import Map, { Marker, ViewState } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { MapLoadCallback, MapMoveCallback, Venue } from '../shared/types';
import { Dispatch, SetStateAction } from 'react';
import { MapEvent } from 'react-map-gl';

export default function MapComponent(
  {
    viewState,
    venues,
    selectedVenue,
    setSelectedVenue,
    mapMoveCallback,
    mapLoadCallback
  }:
  {
    viewState: ViewState,
    venues: Venue[],
    selectedVenue: Venue | null,
    setSelectedVenue: Dispatch<SetStateAction<Venue | null>>,
    mapMoveCallback: MapMoveCallback,
    mapLoadCallback: MapLoadCallback
  }
) {

  const markerClick = (evt: MapEvent, venue: Venue) => {
    setSelectedVenue(venue);
    if (evt.originalEvent) {
      // prevent this from triggering a map-level click event
      evt.originalEvent.stopPropagation();
    }
  }

  const markers = venues.map(v => {
    return <Marker
      longitude={v.longitude}
      latitude={v.latitude}
      key={v.id}
      onClick={(evt) => markerClick(evt, v)}
      color={ selectedVenue?.id === v.id ? "red" : "blue"}/>
  })

  return (
    <div style={{width: "100vw", height: "100vh", position: "absolute", top: 0, left: 0}}>
    <Map
      {...viewState}
      onMove={mapMoveCallback}
      onLoad={mapLoadCallback}
      onClick={() => setSelectedVenue(null)}
      style={{width:"100%", height:"100%"}}
      mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${import.meta.env.VITE_MAP_TILER_KEY}`}
    >
    { markers }
    </Map>
    </div>
  )
}
