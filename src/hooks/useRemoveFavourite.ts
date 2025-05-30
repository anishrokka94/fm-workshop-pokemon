import { useState } from "react";
import axios from "axios";
import { PokemonDetail } from "../types/pokedex";

const useRemovefavourite = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const removeFavourite = async (pokemon: PokemonDetail) => {
    setLoading(true);

    setError(null);

    try {
      await axios.delete("/api/favorites", {
        params: {
          id: pokemon.id,
          addedBy: "Anish Rokka",
        },
      });
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return { removeFavourite, loading, error };
};

export default useRemovefavourite;
