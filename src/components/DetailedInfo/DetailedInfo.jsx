import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loading from "../Loading/Loading"
import { getDataFromLocalStorage, removeDataFromLocalStorage, setDataFromLocalStorage } from "../LocalStorage/LocalStorage"


const DetailedInfo = () => {
    const params = useParams()
    const {name} = params
    const [currentPokemon, setCurrentPokemon] = useState(null)

    useEffect(()=>{
        const fetchSinglePokemon = async() => {
            try{
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
                const data = await response.json()
                console.log(data)
                setCurrentPokemon(data)
            }
            catch(error){
                console.log(error)
            }            
        }
        
        fetchSinglePokemon()
    },[name])
    const [favItems, setFavItems] = useState(getDataFromLocalStorage()||[])
    console.log(currentPokemon)
    const handleFavBtn = () => {
        const favData = getDataFromLocalStorage()
        console.log('favData: ',favData)
        const updatFavData = [...favData, currentPokemon]
        setDataFromLocalStorage(updatFavData)
        setFavItems(updatFavData)
    }

    const handleDislikeBtn = () =>{
        removeDataFromLocalStorage(currentPokemon)
        const favData = getDataFromLocalStorage()
        setFavItems(favData)
    }

    const isFav = favItems.find((favItem)=>{
        console.log(favItem)
        return favItem.id === currentPokemon?.id
    })
  return (
    <div>
        {currentPokemon?(<div className="container mx-auto px-6 my-20 flex flex-col md:flex-row gap-40 justify-center items-center">
            <div>
                <img src={currentPokemon.sprites.other.dream_world.front_default} alt={currentPokemon.name} className="w-auto"/>
            </div>
            <div className="">
                <p className="capitalize text-3xl font-semibold mb-3 mt-6">{currentPokemon.name}</p>
                
                <ul className="">
                    <li className="capitalize font-semibold mb-2">types: <span className="font-normal">{currentPokemon.types.map((type)=>type.type.name).join(", ")}</span></li>
                    <li className="capitalize font-semibold mb-2">height: <span className="font-normal">{currentPokemon.height}</span></li>
                    <li className="capitalize font-semibold mb-2">weight: <span className="font-normal">{currentPokemon.weight}</span></li>
                    <li className="capitalize font-semibold mb-2">speed: <span className="font-normal">{currentPokemon.stats[5].base_stat}</span></li>
                    <li className="capitalize font-semibold mb-2">experience: <span className="font-normal">{currentPokemon.base_experience}</span></li>
                    <li className="capitalize font-semibold mb-2">base_stat (attack): <span className="font-normal">{currentPokemon.stats[1].base_stat}</span></li>
                    <li className="capitalize font-semibold mb-2">abilities: <span className="font-normal">{currentPokemon.abilities.map((ability)=>ability.ability.name).slice(0,1).join(', ')}</span></li>
                </ul>

                <button className="bg-[#8EB486] rounded-full py-1 px-5 mb-6 capitalize font-bold text-white hover:bg-green-600 duration-300 ms-3" onClick={isFav?handleDislikeBtn:handleFavBtn}>{isFav?'Dislike':'Favourite'}</button>
            </div>
        </div>):(<Loading/>)
    }
    </div>
  )
}

export default DetailedInfo