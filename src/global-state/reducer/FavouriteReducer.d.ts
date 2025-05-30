import { PokemonDetail } from "../../types/pokedex";
import { FavouriteAction } from "../actions/FavouriteActions";


export type FavouriteState = PokemonDetail[];

export declare function FavouriteReducer(
  state: FavouriteState,
  action: FavouriteAction
): FavouriteState;