import './App.css'
import Header from './components/Header'
import MapComponent from './components/Map';
import Drawer from './components/Drawer'
import { useState, useEffect } from 'react';
import useVenues from './hooks/useVenues'

function App() {
  const [mapViewState, setMapViewState] = useState({
    longitude: -3.1883,
    latitude: 55.9533,
    zoom: 12

  })
  const [bounds, setBounds] = useState(0);
  const venues = useVenues({bounds});

  const mapLoadCallback = (evt) => {
    setBounds(evt.target.getBounds())
  }

  const mapMoveCallback = (evt) => {
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
