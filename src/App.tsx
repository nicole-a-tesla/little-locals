import './App.css'
import Header from './components/Header'
import MapComponent from './components/Map';
import Drawer from './components/Drawer'
import { useState } from 'react';
import useVenues from './hooks/useVenues';
import { LngLatBounds, MapEvent, ViewStateChangeEvent } from 'react-map-gl';

function App() {
  // Center on Edinburgh
  const [mapViewState, setMapViewState] = useState({
    longitude: -3.1883,
    latitude: 55.9533,
    zoom: 12,
    bearing: 0,
    pitch: 0,
    padding: {top: 0, left: 0, right: 0, bottom: 0},
  })
  const [bounds, setBounds] = useState<LngLatBounds | undefined>(undefined);
  const venues = useVenues({bounds});

  const mapLoadCallback = (evt: MapEvent) => {
    setBounds(evt.target.getBounds())
  }

  const mapMoveCallback = (evt: ViewStateChangeEvent) => {
    setBounds(evt.target.getBounds());
    setMapViewState(evt.viewState)
  }

  return (
    <>
      <Header />
      <MapComponent
        viewState={mapViewState}
        venues={venues}
        mapLoadCallback={mapLoadCallback}
        mapMoveCallback={mapMoveCallback}/>
      <Drawer isOpen={true} venues={venues}/>
    </>
  )
}

export default App
