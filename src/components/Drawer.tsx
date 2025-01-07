export default function Drawer({isOpen}) {
  const transformClass = isOpen ? "transform-none" : "translate-y-1/2" 
  return (
    <>
      <div id="bottom-drawer"
        className={`fixed bottom-0 left-0 right-0 z-40 w-full p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 h-1/3 ${transformClass}`}
        tabindex="-1"
        aria-labelledby="bottom-drawer-label">

        <h5 id="bottom-drawer-label" className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
          Bottom drawer
        </h5>
        <p className="max-w-lg mb-6 text-sm text-gray-500 dark:text-gray-400">Some text hello words</p>
      </div>
    </>
  )
}
