import AutocompleteItem from "./AutocompleteItem"

export default function AutocompletePanel({ autocompleteState, panelRef, autocomplete }) {
  return (
    <div className="absolute mt-16 top-0 left-0 border border-gray-100 bg-white overflow-hidden rounded-lg shadow-lg z-10" ref={panelRef} {...autocomplete.getPanelProps()}>
      {autocompleteState.collections.map(({ items }, index) => (
        <section key={`section-${index}`}>
          {items.length > 0 && (
            <ul {...autocomplete.getListProps()}>
              {items.map((item) => (
                <AutocompleteItem key={item.id} {...item} />
              ))}
            </ul>
          )}
        </section>
      )
      )}
    </div>
  )
}