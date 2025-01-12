import * as React from 'react';
import Map, { Marker } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function MapComponent({viewState, venues, mapMoveCallback, mapLoadCallback}) {
  const markers = venues.map(v => {
    return <Marker longitude={v.longitude} latitude={v.latitude} key={v.url} color="red"/>
  })

  return (
    <div style={{width: "100vw", height: "100vh", position: "absolute", top: 0, left: 0}}>
    <Map
      {...viewState}
      onMove={mapMoveCallback}
      onLoad={mapLoadCallback}
      style={{width:"100%", height:"100%"}}
      mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${import.meta.env.VITE_MAP_TILER_KEY}`}
    >
    { markers }
    </Map>
    </div>
  )
}
