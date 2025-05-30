import { useCallback, useContext, useEffect, useState } from "react";
import { fetchFavouritePokedex } from "../services/pokedexService";
import { FavouritePokemon } from "../components/favourites/favouritePokemon";
import { ADD_TO_FAVOURITES } from "../global-state/actions/FavouriteActions";
import { FavouriteContext } from "../global-state/context/FavouriteContext";
import useFetch from "./useFetch";

const useFavouriteList = () => {
  const [allFavourites, setAllFavourites] = useState<FavouritePokemon[]>([]);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { pokedex } = useFetch();
  const { favourites } = useContext(FavouriteContext);

  const getAllFavourites = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetchFavouritePokedex();

      // console.log("Fetched favourites:", res);

      const finalRes: FavouritePokemon[] = res.map((pokemon: any) => {
        const completeData = pokedex.find((p) => p.id === pokemon.id);

        return completeData
          ? completeData
          : {
              id: pokemon.id,
              name: pokemon.name,
              addedBy: pokemon.addedBy,
              types: [],
            };
      });

      // }
      setAllFavourites(finalRes);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [pokedex]);

  useEffect(() => {
    getAllFavourites();
  }, [pokedex, favourites]);

  return { refetch: getAllFavourites, allFavourites, error, loading };
};

export default useFavouriteList;
