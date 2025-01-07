/* eslint-disable react/prop-types */

const Sort = ({onHandleSort}) => {
  return (
    <div>
        <label htmlFor="sort" className="block mb-2">Sort by: </label>
        <select id="sort" onChange={onHandleSort} className="border-2 py-1 px-3 rounded outline-none">
            <option value="">-- Select --</option>
            <option value="name">Name</option>
            <option value="baseStats">Base Stats</option>
        </select>
    </div>
  )
}

export default Sort