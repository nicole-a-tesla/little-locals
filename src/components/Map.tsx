import * as React from 'react';
import Map, { useMap } from 'react-map-gl/maplibre';

export default function MapComponent({viewState, mapMoveCallback}) {
    return (
        <Map
          {...viewState}
          onMove={evt => mapMoveCallback(evt)}
          style={{width: "100vw", height: "100vh", position: "absolute", top: 0, left: 0}}
          mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${import.meta.env.VITE_MAP_TILER_KEY}`}
        />
    )
}
