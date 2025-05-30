import axios from "axios";

// fetch pokemon list data
export const fetchPokedex = async (offset = 12, limit = 12) => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
  );
  return response.data;
};

export const fetchPokedexDetails = async (name: string) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  // console.log("first",response)
  return response.data;
};

export const fetchPokedexSpecies = async (name: string) => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon-species/${name}`
  );
  // console.log("species", response)
  return response.data;
};

export const fetchFavouritePokedex = async () => {
  const response = await axios.get(`api/favorites?addedBy=Anish Rokka`);
  // console.log("res", response);
  return response.data;
};

export const fetchPokedexFilterTypes = async () => {
  const response = await axios.get("http://localhost:4000/api/search/filters");
  return response.data;
};

//   Species
//   https://pokeapi.co/api/v2/pokemon-species/{id or name}/
// Evolution Data
// https://pokeapi.co/api/v2/evolution-chain/{id}/
