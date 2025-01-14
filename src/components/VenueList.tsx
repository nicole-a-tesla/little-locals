import { Venue } from "../shared/types";

export default function VenueList({venues}: {venues: Venue[]}) {
    const venuesMarkdown = venues.map(v => <p className="max-w-lg mb-6 text-sm text-gray-500 dark:text-gray-400" key={v.id}>{v.name}</p>)

    return (
        <>
            <h5 id="bottom-drawer-label" className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
                Venues
            </h5>
            { venuesMarkdown }
        </>
  )
}