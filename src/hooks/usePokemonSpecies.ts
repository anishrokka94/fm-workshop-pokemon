import React, { useEffect, useState } from 'react'
import { fetchPokedexSpecies } from '../services/pokedexService';
import { PokemonSpecies } from '../types/pokedex';

const usePokemonSpecies = (name) => {
  const [pokedexSpecies, setPokedexSpecies] = useState(null); 
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect( ()=> {
    const getPokedexSpecies = async () => {
        
        setLoading(true)
        try {
            const res = await fetchPokedexSpecies(name)
    
            const finaldata:PokemonSpecies = {
                color: res.color || String
            }
           setPokedexSpecies(finaldata)

        }
        catch (e) {
            setError(e)
        }
        finally {
            setLoading(false)
        }
    }

    getPokedexSpecies();
  },[])

  return {pokedexSpecies, error, loading}
}

export default usePokemonSpecies
