import Link from "next/link"

const AutocompleteItem = ({ id, title, img, price }) => {
  return (
    <li>
      <Link href={`/detail/${id}`}>
        <a className="hover:bg-blue-300 flex gap-4 p-4">
          <img src={img} alt={title} className="w-12 h-12 object-contain" />
          <div>
            <h3 className="text-sm font-semibold">{title}</h3>
            <p className="text-xs text-gray-600">{price}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default AutocompleteItem
