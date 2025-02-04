import { Dispatch, SetStateAction } from "react";
import { Venue } from "../shared/types";
import VenueListItem from "./VenueListItem";

export default function VenueList(
    {venues, setSelectedVenue}:
    {venues: Venue[], setSelectedVenue: Dispatch<SetStateAction<Venue | null>>}
) {
    const venuesMarkdown = venues.map(v => <VenueListItem venue={v} setSelectedVenue={setSelectedVenue}/>)

    return (
        <>
            <h5 id="bottom-drawer-label" className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
                Venues
            </h5>
            { venuesMarkdown }
        </>
  )
}