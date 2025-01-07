/* eslint-disable react/prop-types */

import {  useState } from "react"
import { NavLink } from "react-router-dom"
import { getDataFromLocalStorage, removeDataFromLocalStorage, setDataFromLocalStorage } from "../LocalStorage/LocalStorage"

const PokemonCards = ({currentPokemon}) => {
  const [favItems, setFavItems] = useState(getDataFromLocalStorage()||[])

  const handleFavBtn = () =>{
    const favData = getDataFromLocalStorage()
    const updatedFavData = [...favData, currentPokemon]
    setDataFromLocalStorage(updatedFavData);
    setFavItems(updatedFavData)
  }
  const handleDislikeBtn = () =>{
    removeDataFromLocalStorage(currentPokemon)
    const favData = getDataFromLocalStorage()
    setFavItems(favData)
  }  

  const isFav = favItems.find((favItem)=>{
    return favItem.id===currentPokemon.id
  })
    return (
      <li className="shadow hover:shadow-md rounded py-10 duration-300">
          <img src={currentPokemon.sprites.other.dream_world.front_default} alt={currentPokemon.name} className="w-1/3 h-24 mx-auto"/>
          <p className="capitalize text-2xl font-semibold mb-4 mt-6">{currentPokemon.name}</p>
          <NavLink to={`/pokemon/${currentPokemon.name}`} className="bg-[#8EB486] rounded-full py-1 px-5 mb-6 capitalize font-bold text-white hover:bg-green-600 duration-300">view Details</NavLink>
          <button className="bg-[#8EB486] rounded-full py-1 px-5 mb-6 capitalize font-bold text-white hover:bg-green-600 duration-300 ms-3" onClick={isFav?handleDislikeBtn:handleFavBtn}>{isFav?'Dislike':'Favourite'}</button>
      </li>
      
    )
}
  
export default PokemonCards