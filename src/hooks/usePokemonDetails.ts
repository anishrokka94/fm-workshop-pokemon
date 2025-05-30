import { useEffect, useState } from 'react'
import { fetchPokedexDetails } from '../services/pokedexService'
import { PokemonDetail } from '../types/pokedex';

const usePokemonDetails = (name:string) => {
  const [pokemonDetails, setPokemonDetails ] = useState<PokemonDetail | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(()=> {
      if(!name) return;
      
      const getPokemonDetails = async ()=> {
        setLoading(true)
        try {
          const res = await fetchPokedexDetails(name);

          const finalRes: PokemonDetail = {
            id: res.id || 0,
            name: res.name || String,
            height: res?.height || 0,
            weight: res?.weight || 0,
            sprites: res?.sprites || {},
            abilities: res.abilities || [],
            base_experience: res?.base_experience || 0,
            stats: res?.stats || []
          }

          setPokemonDetails(finalRes);

        }
        catch(e) {
          setError(e);
        }
        finally {
          setLoading(false)
        }
      }

      getPokemonDetails()
    
  },[name])
  return { pokemonDetails, error, loading}
}

export default usePokemonDetails
