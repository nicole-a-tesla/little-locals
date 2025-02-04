import { Venue } from '../shared/types';
import SelectedVenue from './SelectedVenue';
import VenueList from './VenueList';

export default function Drawer({isOpen, venues, selectedVenue, setSelectedVenue}:
  {isOpen: boolean, venues: Venue[], selectedVenue: Venue | null, setSelectedVenue: Dispatch<SetStateAction<Venue | null>>}
) {
  const transformClass = isOpen ? "transform-none" : "translate-y-1/2" 

  if (selectedVenue) {
  }
  return (
    <>
      <div id="bottom-drawer"
        className={`fixed bottom-0 left-0 right-0 z-40 w-full p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 h-1/3 ${transformClass}`}
        tabIndex={-1}
        aria-labelledby="bottom-drawer-label">

        { selectedVenue
          ? <SelectedVenue selectedVenue={selectedVenue} />
          : <VenueList venues={venues} setSelectedVenue={setSelectedVenue}/> }
      </div>
    </>
  )
}
