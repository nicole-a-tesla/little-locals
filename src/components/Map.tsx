import MapLibre from 'react-map-gl/maplibre';

export default function Map() {
  console.log(import.meta.env.VITE_MAP_TIER)
  return (
      <MapLibre
        initialViewState={{
          longitude: -3.1883,
          latitude: 55.9533,
          zoom: 12
        }}
        style={{width: "100vw", height: "100vh", position: "absolute", top: 0, left: 0}}
        mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${import.meta.env.VITE_MAP_TILER_KEY}`}
      />
  )
}
