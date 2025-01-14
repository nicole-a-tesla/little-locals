export default function Drawer({isOpen, venues}: {isOpen: boolean, venues: Venue[]}) {
  const transformClass = isOpen ? "transform-none" : "translate-y-1/2" 
  const venuesMarkdown = venues.map(v => <p className="max-w-lg mb-6 text-sm text-gray-500 dark:text-gray-400" key={v.url}>{v.name}</p>)
  return (
    <>
      <div id="bottom-drawer"
        className={`fixed bottom-0 left-0 right-0 z-40 w-full p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 h-1/3 ${transformClass}`}
        tabIndex={-1}
        aria-labelledby="bottom-drawer-label">

        <h5 id="bottom-drawer-label" className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
          Venues
        </h5>
        { venuesMarkdown }
      </div>
    </>
  )
}
