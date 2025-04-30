import { useEffect, useState } from "react";
import { PokemonListItem } from "../types/pokedex";
import { fetchPokedex } from "../services/pokedexService";

const useFetch = () => {
  const [pokedex, setAllPokedex] = useState<PokemonListItem[]>([]);
  const [error, setError ] = useState(null);

  useEffect(() => {
    const getPokedex = async () => {
      try {
        const data = await fetchPokedex();
        setAllPokedex(data.results);
      } catch (e) {
        setError(e)
      }
    };

    getPokedex();
  }, []);

  return { pokedex };
};

export default useFetch;
