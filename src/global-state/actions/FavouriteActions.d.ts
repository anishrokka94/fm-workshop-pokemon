import { PokemonDetail } from "./../../types/pokedex"


export const ADD_TO_FAVOURITES = string; 
export const REMOVE_FROM_FAVOURITES = string;

export type FavouriteAction =
  | { type: typeof ADD_TO_FAVOURITES; payload: PokemonDetail }
  | { type: typeof REMOVE_FROM_FAVOURITES; payload: number };