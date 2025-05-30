import { PokemonDetail } from "../../types/pokedex";
import {
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
} from "../actions/FavouriteActions";

type Action =
  | { type: typeof ADD_TO_FAVOURITES; payload: PokemonDetail }
  | { type: typeof REMOVE_FROM_FAVOURITES; payload: PokemonDetail };

export const FavouriteReducer = (state: PokemonDetail[], action: Action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      // console.log("Reducer: ADD_TO_FAVOURITES", action.payload);
      if (state.find((fav) => fav.id === action.payload.id)) return state;
      return [...state, action.payload];

    case REMOVE_FROM_FAVOURITES:
      return state.filter((poke) => poke.id !== action.payload.id);

    default:
      return state;
  }
};
