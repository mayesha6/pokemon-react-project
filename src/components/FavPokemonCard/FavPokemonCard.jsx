/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"
import { removeDataFromLocalStorage } from "../LocalStorage/LocalStorage"

const FavPokemonCard = ({favPokemon}) => {
    const handleDislikeBtn = () =>{
        removeDataFromLocalStorage(favPokemon)
      }
  return (
    <li className="shadow hover:shadow-md rounded py-10 duration-300">
              <img src={favPokemon.sprites.other.dream_world.front_default} alt={favPokemon.name} className="w-1/3 h-24 mx-auto"/>
              <p className="capitalize text-2xl font-semibold mb-4 mt-6">{favPokemon.name}</p>
              <NavLink to={`/pokemon/${favPokemon.name}`} className="bg-[#8EB486] rounded-full py-1 px-5 mb-6 capitalize font-bold text-white hover:bg-green-600 duration-300">view Details</NavLink>
              <button className="bg-[#8EB486] rounded-full py-1 px-5 mb-6 capitalize font-bold text-white hover:bg-green-600 duration-300 ms-3" onClick={handleDislikeBtn}>Dislike</button>
            </li>
  )
}

export default FavPokemonCard