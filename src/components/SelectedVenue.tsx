import { Venue } from '../shared/types';

export default function SelectedVenue({selectedVenue}: {selectedVenue: Venue}) {
    return (
        <>
            <h1>{selectedVenue.name}</h1>
            <p>{selectedVenue.allowsBabies ? "Allows babies" : "Doesn't allow babies"}</p>
        </>
    )
}