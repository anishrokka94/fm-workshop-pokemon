import {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useReducer,
} from "react";
import { FavouriteReducer } from "../reducer/FavouriteReducer";
import { PokemonDetail } from "../../types/pokedex";
import {
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
} from "../actions/FavouriteActions";

export type Action =
  | { type: typeof ADD_TO_FAVOURITES; payload: PokemonDetail }
  | { type: typeof REMOVE_FROM_FAVOURITES; payload: PokemonDetail };

interface FavouriteContextType {
  favourites: PokemonDetail[];
  dispatch: Dispatch<Action>;
}

export const FavouriteContext = createContext<FavouriteContextType | undefined>(
  {
    favourites: [],
    dispatch: () => {},
  }
);

export const FavouriteProvider = ({ children }: { children: ReactNode }) => {
  const [favourites, dispatch] = useReducer(FavouriteReducer, [], () => {
    const stored = localStorage.getItem("favourites");
    return stored ? JSON.parse(stored) : [];
  });
  // console.log("faav", favourites)

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  return (
    <FavouriteContext.Provider value={{ favourites, dispatch }}>
      {children}
    </FavouriteContext.Provider>
  );
};
