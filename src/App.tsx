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
  const [bounds, setBounds] = useState(0); // todo inital bounds val
  const venues = useVenues();

  const mapMoveCallback = (evt) => {
    const bounds = evt.target.getBounds();
    console.log('new bounds = ', bounds)
    setBounds(bounds);
    setMapViewState(evt.viewState)
  }

  return (
    <>
      <Header />
      <MapComponent
        viewState={mapViewState}
        venues={venues}
        mapMoveCallback={mapMoveCallback}/>
      <Drawer isOpen={true} venues={venues}/>
    </>
  )
}

export default App
