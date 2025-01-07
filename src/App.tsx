import './App.css'
import Header from './components/Header'
import Map from './components/Map';
import Drawer from './components/Drawer'

function App() {
  return (
    <>
      <Header />
      <Map /> 
      <Drawer isOpen={true}/>
    </>
  )
}

export default App
