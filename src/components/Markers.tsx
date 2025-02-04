import { Venue } from "../shared/types";
import { MapEvent, Marker } from 'react-map-gl';
import {useMap} from 'react-map-gl/maplibre';
import { Dispatch, SetStateAction } from 'react';

export default function Markers({venues, selectedVenue, setSelectedVenue}: {
    venues: Venue[],
    selectedVenue: Venue | null,
    setSelectedVenue: Dispatch<SetStateAction<Venue | null>>,
}) {
    const {current: map} = useMap();

    const markerClick = (evt: MapEvent, venue: Venue) => {
        setSelectedVenue(venue);
        if (map !== undefined) {
            map.flyTo({center: [venue.longitude, venue.latitude]}); 
        }
        if (evt.originalEvent) {
        // prevent this from triggering a map-level click event
        evt.originalEvent.stopPropagation();
    }
  }

  const markdown = venues.map(v => {
    return <Marker
    longitude={v.longitude}
    latitude={v.latitude}
    key={v.id}
    onClick={(evt) => markerClick(evt, v)}
    color={ selectedVenue?.id === v.id ? "red" : "blue"}/>
  })

  return markdown;
}