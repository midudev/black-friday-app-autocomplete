import { useMemo, useRef, useState } from 'react'
import { createAutocomplete } from '@algolia/autocomplete-core'
import AutocompleteItem from './AutocompleteItem'

export default function Search(props) {
  const { marginStyle } = props
  const [autocompleteState, setAutocompleteState] = useState({
    collections: [],
    isOpen: false
  })

  const autocomplete = useMemo(() => createAutocomplete({
    placeholder: 'Busca tu oferta',
    onStateChange: ({ state }) => setAutocompleteState(state),
    getSources: () => [{
      sourceId: 'offers-next-api',
      getItems: async ({ query }) => {
        if (!!query) {
          const res = await fetch(`/api/search?q=${query}`)
          return await res.json()
        }
      }
    }],
    ...props
  }), [props])

  const formRef = useRef(null)
  const inputRef = useRef(null)
  const panelRef = useRef(null)

  const formProps = autocomplete.getFormProps({
    inputElement: inputRef.current
  })
  const inputProps = autocomplete.getInputProps({
    inputElement: inputRef.current
  })

  return (
    <form ref={formRef} className={`flex justify-center ${marginStyle ? marginStyle : 'mb-20'}`} {...formProps}>
      <div className="flex relative p-1  bg-gradient-to-tr from-purple-600 to-blue-300 rounded-full w-2/6">
        <input ref={inputRef} className='flex-1 p-2 pl-4 rounded-full w-full' {...inputProps} />
        {
          autocompleteState.isOpen && (
            <div className="absolute mt-16 top-0 left-0 border border-gray-100 bg-white overflow-hidden rounded-lg shadow-lg z-10" ref={panelRef} {...autocomplete.getPanelProps()}>
              {autocompleteState.collections.map((collection, index) => {
                const { items } = collection
                return (
                  <section key={`section-${index}`}>
                    {items.length > 0 && (
                      <ul {...autocomplete.getListProps()}>
                        {
                          items.map(item => <AutocompleteItem key={item.id} {...item} />)
                        }
                      </ul>
                    )}
                  </section>
                )
              })}
            </div>
          )
        }
      </div>
    </form>
  )
}
