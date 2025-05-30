import { useEffect, useState } from "react";
import { PokemonDetail, PokemonListResponse } from "../types/pokedex";
import { fetchPokedex, fetchPokedexDetails } from "../services/pokedexService";

const useFetch = () => {
  const [pokedex, setAllPokedex] = useState<PokemonDetail[]>([]);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isLoadMoreClicked, setIsLoadMoreClicked] = useState(false);
  const limit = 12;

  const getPokedex = async (offset: number): Promise<PokemonDetail[]> => {
    setLoading(true);
    try {
      const data: PokemonListResponse = await fetchPokedex(offset, limit);

      // get name from fetchPokedex() and stored to names array
      const names = data.results.map((item) => {
        return item.name;
      });

      // array of promise
      const detailPromises = names.map(async (name) => {
        const res = await fetchPokedexDetails(name);

        // getting only required data
        const finalRes: PokemonDetail = {
          name: res?.name,
          abilities: res?.abilities || [],
          id: res?.id || 0,
          height: res?.height || 0,
          // height: typeof res?.height === "number" ? res.height : 0,
          sprites: res?.sprites?.other?.["official-artwork"]?.front_default,
          types: res?.types || [],
          base_experience: res?.base_experience || 0,
          stats: res?.stats || [],
        };

        return finalRes;
      });

      //   console.log("detail promise", detailPromises)

      const details = await Promise.all(detailPromises);
      // console.log("details", details);
      return details;
    } catch (e) {
      setError(e);
      return [];
    } finally {
      setLoading(false);
    }
  };

  //   load more functionality
  const loadMore = async () => {
    if (loading) return;
    setIsLoadMoreClicked(true);
    // console.log("poke load more", pokedex)
    const currentOffset = pokedex.length;

    try {
      const newDetails = await getPokedex(currentOffset);

      setAllPokedex((prev) => [...prev, ...newDetails]);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoadMoreClicked(false);
    }
  };

  const initialLoad = async () => {
    const final = await getPokedex(0);
    setAllPokedex(final);
  };

  useEffect(() => {
    initialLoad();
  }, []);

  return { pokedex, error, loading, loadMore, isLoadMoreClicked, getPokedex };
};

export default useFetch;
