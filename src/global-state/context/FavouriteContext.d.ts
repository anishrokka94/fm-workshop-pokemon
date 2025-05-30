// import { FavouriteState } from "../reducer/FavouriteReducer";
// import { FavouriteAction } from "../actions/FavouriteActions";
import { PokemonDetail } from "../../types/pokedex";

export interface FavouriteContextType {
  favourites: PokemonDetail[];
    dispatch: Dispatch<Action>;
}