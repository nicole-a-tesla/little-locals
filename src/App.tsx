import './App.css'
import Header from './components/Header'
import MapComponent from './components/Map';
import Drawer from './components/Drawer'
import { useState } from 'react';
import useVenues from './hooks/useVenues';
import { LngLatBounds, MapEvent, ViewStateChangeEvent } from 'react-map-gl';
import { Venue } from './shared/types';

function App() {
  // Center on Edinburgh
  const [mapViewState, setMapViewState] = useState({
    longitude: -3.1883,
    latitude: 55.9533,
    zoom: 13,
    bearing: 0,
    pitch: 0,
    padding: {top: 0, left: 0, right: 0, bottom: 0},
  })
  const [bounds, setBounds] = useState<LngLatBounds | null>(null);
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);
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
        selectedVenue={selectedVenue}
        setSelectedVenue={setSelectedVenue}
        mapLoadCallback={mapLoadCallback}
        mapMoveCallback={mapMoveCallback}/>
      <Drawer
        isOpen={selectedVenue !== null}
        venues={venues}
        selectedVenue={selectedVenue}
        setSelectedVenue={setSelectedVenue}/>
    </>
  )
}

export default App
