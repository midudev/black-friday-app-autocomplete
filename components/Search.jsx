export default function Search () {
  return (
    <form className="flex justify-center mb-20">
      <div className="flex p-1 bg-gradient-to-tr from-purple-600 to-blue-300 rounded-full w-2/6">
        <input className="flex-1 p-2 pl-4 rounded-full" type="text" placeholder="Search a product..." />
      </div>
    </form>
  )
}