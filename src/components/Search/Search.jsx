/* eslint-disable react/prop-types */

const Search = ({search, setSearch}) => {
  return (
    <div>
        <form action="">
            <input type="text" placeholder='Search Pokemon' value={search} onChange={(e)=>setSearch(e.target.value)} className='capitalize border mx-auto block max-w-xs w-full py-2 px-3 outline-none rounded-t-lg border-b-2 border-b-[#8EB486] mt-10'/>
        </form>
    </div>
  )
}

export default Search