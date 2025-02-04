import { Venue } from "../shared/types";
import { Dispatch, SetStateAction } from "react";

export default function VenueListItem(
    {venue, setSelectedVenue}:
    {venue: Venue, setSelectedVenue: Dispatch<SetStateAction<Venue | null>>}
) {
    return (
        <div>
            <p onClick={() => setSelectedVenue(venue)} className="max-w-lg mb-6 text-sm text-gray-500 dark:text-gray-400" key={venue.id}>
                {venue.name}
            </p>
        </div>
    )
}