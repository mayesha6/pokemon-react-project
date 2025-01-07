import { useEffect, useState } from "react";
import PokemonCards from "../../components/PokemonCards/PokemonCards";
import Search from "../../components/Search/Search";
import Loading from './../../components/Loading/Loading';
import Sort from "../../components/Sort/Sort";
import PokemonType from "../../components/PokemonType/PokemonType";

const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [itemsPerPage] = useState(9); // Items per page
  const API = 'https://pokeapi.co/api/v2/pokemon?limit=50';

  const fetchPokemon = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();

      const detailedPokemonData = data.results.map(async (res) => {
        const response = await fetch(res.url);
        const data = await response.json();
        setLoading(false);
        return data;
      });

      const detailedResPokemonData = await Promise.all(detailedPokemonData);
      setPokemon(detailedResPokemonData);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  // Sort by name and base stat
  const handleSort = (e) => {
    const sortBy = e.target.value;
    const sortPokemon = [...pokemon].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'baseStats') {
        return a.stats[1].base_stat - b.stats[1].base_stat;
      }
    });

    setPokemon(sortPokemon);
  };

  // Select Pokémon by type
  const handlePokemonType = (e) => {
    const selectPokemonType = e.target.value;
    if (selectPokemonType === '') {
      fetchPokemon(); // Reload all Pokémon
    } else {
      const filteredPokemon = pokemon.filter(
        (pokemonType) => pokemonType.types[0].type.name === selectPokemonType
      );
      setPokemon(filteredPokemon);
    }
  };

  // Search Pokémon
  const searchPokemon = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPokemon = searchPokemon.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(searchPokemon.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="container mx-auto px-6">
      {/* search */}
      <Search search={search} setSearch={setSearch} />

      {/* sort and filter  */}
      <div className="flex justify-between items-center">
        <Sort onHandleSort={handleSort} />
        <PokemonType onHandlePokemonType={handlePokemonType} />
      </div>

      {/* Display pokemon  */}
      <div className="my-10">
        <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 text-center gap-6">
          {currentPokemon.map((currentPokemon) => {
            return (
              <PokemonCards key={currentPokemon.id} currentPokemon={currentPokemon} />
            );
          })}
        </ul>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 my-6">
        <button onClick={handlePrevPage} disabled={currentPage === 1} className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 hover:bg-[#8EB486] duration-300 hover:text-white">Previous</button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages} className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 hover:bg-[#8EB486] duration-300 hover:text-white">Next</button>
      </div>
    </div>
  );
};

export default Home;
