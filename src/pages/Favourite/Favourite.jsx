import { useState } from "react"
import { getDataFromLocalStorage } from "../../components/LocalStorage/LocalStorage"
import FavPokemonCard from "../../components/FavPokemonCard/FavPokemonCard"

const Favourite = () => {
  const [favPokemons, setFavPokemons] = useState(getDataFromLocalStorage())
 

  return (
    <div className="container mx-auto px-6 my-20 min-h-[45lvh]">
      <ul className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 text-center gap-6'>
        {favPokemons.map((favPokemon)=>{
          return(
            <FavPokemonCard key={favPokemon.id} favPokemon={favPokemon}/>
          )
        })}
      </ul>
    </div>
  )
}

export default Favourite