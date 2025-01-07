/* eslint-disable react/prop-types */

const PokemonType = ({onHandlePokemonType}) => {
  return (
    <div>
        <label htmlFor="sort" className="block mb-2">Filter by: </label>
        <select id="sort" onChange={onHandlePokemonType} className="border-2 py-1 px-3 rounded outline-none">
            <option value="">-- Select --</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
        </select>
    </div>
  )
}

export default PokemonType