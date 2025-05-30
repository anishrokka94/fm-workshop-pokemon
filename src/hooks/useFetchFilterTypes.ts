import React, { useEffect, useState } from "react";
import { fetchPokedexFilterTypes } from "../services/pokedexService";

const useFetchFilterTypes = () => {
  const [filterCategories, setFilterCategories] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllFilterTypes = async () => {
      setLoading(true);
      try {
        const data = await fetchPokedexFilterTypes();
        setFilterCategories(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    getAllFilterTypes();
  }, []);

  return {
    filterCategories,
    error,
    loading,
  };
};

export default useFetchFilterTypes;
