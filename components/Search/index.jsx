import { useMemo, useRef, useState } from "react"
import { createAutocomplete } from "@algolia/autocomplete-core"
import AutocompletePanel from "./AutocompletePanel"

export default function Search(props) {
  const [autocompleteState, setAutocompleteState] = useState({
    collections: [],
    isOpen: false
  })

  const autocomplete = useMemo(
    () =>
      createAutocomplete({
        placeholder: "Busca tu oferta",
        onStateChange: ({ state }) => setAutocompleteState(state),
        getSources: () => [
          {
            sourceId: "offers-next-api",
            getItems: ({ query }) => {
              if (!!query) {
                return fetch(`/api/search?q=${query}`).then((res) => res.json())
              }
            }
          }
        ],
        ...props
      }),
    [props]
  )

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
    <form ref={formRef} className="flex justify-center mb-20" {...formProps}>
      <div className="flex relative p-1  bg-gradient-to-tr from-purple-600 to-blue-300 rounded-full w-2/6">
        <input ref={inputRef} className="flex-1 p-2 pl-4 rounded-full w-full" {...inputProps} />
        {autocompleteState.isOpen && (
          <AutocompletePanel autocompleteState={autocompleteState} panelRef={panelRef} autocomplete={autocomplete} />
        )}
      </div>
    </form>
  )
}
