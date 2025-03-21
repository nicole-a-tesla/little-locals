import Map, { ViewState } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { MapLoadCallback, MapMoveCallback, Venue } from '../shared/types';
import { Dispatch, SetStateAction } from 'react';
import Markers from './Markers';

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
      <Markers venues={venues} setSelectedVenue={setSelectedVenue} selectedVenue={selectedVenue} />
    </Map>
    </div>
  )
}
