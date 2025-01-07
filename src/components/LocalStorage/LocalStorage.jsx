const pokemonKey = "pokemonKey"
export const getDataFromLocalStorage = () => {
    const rawPokemon = localStorage.getItem(pokemonKey)
    if(!rawPokemon) return []
    return JSON.parse(rawPokemon)
}
export const setDataFromLocalStorage = (pokemons) => {
    localStorage.setItem(pokemonKey, JSON.stringify(pokemons))
}

export const removeDataFromLocalStorage = (pokemon) => {
    const alreadyExistPokemon = getDataFromLocalStorage()
    const isAlreadyExist = alreadyExistPokemon.find((poke)=>poke.id==pokemon.id)
    const restPokemon= alreadyExistPokemon.filter((poke)=>poke.id!=pokemon.id)
    if(isAlreadyExist){
        localStorage.setItem(pokemonKey, JSON.stringify(restPokemon))
    }
}