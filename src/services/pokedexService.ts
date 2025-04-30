import axios from "axios";

// fetch pokemon list data
export const fetchPokedex = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=10");
  return response.data;
};
