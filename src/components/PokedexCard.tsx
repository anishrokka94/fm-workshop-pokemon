import { Link } from "react-router-dom";
import { PokemonDetail } from "../types/pokedex";
import { useContext } from "react";
import {
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
} from "../global-state/actions/FavouriteActions";
import { FavouriteContext } from "../global-state/context/FavouriteContext";
import axios from "axios";
import useRemovefavourite from "../hooks/useRemoveFavourite";
import { Pokemon } from "./Filter/AdvancedSearch/AdvancedSearch.d";
import { toast } from "react-toastify";

interface PokedexCardProps {
  list: PokemonDetail[] | Pokemon[];
  loading: boolean;
}

const PokedexCard = ({ list, loading }: PokedexCardProps) => {
  const { favourites, dispatch } = useContext(FavouriteContext);

  const { removeFavourite } = useRemovefavourite();

  const notifySuccess = () => toast("Added to Favourite");
  const notifyDanger = () => toast("Removed from Favourite");

  const handleAddToFavourite = async (pokemon: PokemonDetail) => {
    try {
      await axios.post("/api/favorites", {
        id: pokemon.id,
        name: pokemon.name,
        addedBy: "Anish Rokka",
      });

      dispatch({ type: ADD_TO_FAVOURITES, payload: pokemon });
      notifySuccess();
    } catch (error) {
      console.error("Failed to add favourite:", error);
    }
  };

  const handleRemove = async (pokemon: PokemonDetail) => {
    dispatch({ type: REMOVE_FROM_FAVOURITES, payload: pokemon });

    try {
      await removeFavourite(pokemon);
      notifyDanger();
    } catch (e) {
      console.error("Failed to remove from favourites:", e);
    }
  };

  return loading ? (
    <span className="placeholder">Loading....</span>
  ) : (
    <>
      {list.map((pokedex) => {
        const isFavourite = favourites.some((fav) => fav.id === pokedex.id);

        // const isDetail = (pokedex as PokemonDetail).sprites !== undefined;

        const imageUrl =
          typeof pokedex.sprites === "string"
            ? pokedex.sprites
            : pokedex.sprites?.other?.["official-artwork"]?.front_default;

        return (
          <div className="col-md-3" key={pokedex.id}>
            <Link to={`/view/${pokedex.name}`}>
              <div className="card custom-card glass-ui p-2 mb-3">
                <div
                  className="fav-icon position-absolute me-2"
                  onClick={(e) => {
                    e.preventDefault();
                    if (isFavourite) {
                      // console.log("Dispatching ADD_TO_FAVOURITES for:", pokedex);
                      handleRemove(pokedex);
                    } else {
                      handleAddToFavourite(pokedex);
                    }
                  }}
                >
                  <img
                    src={isFavourite ? "/img/fav-filled.svg" : "/img/fav.svg"}
                    alt="favourite icon"
                  />
                </div>
                <div className="d-flex">
                  <img
                    src={imageUrl}
                    className="img-fluid me-3"
                    width="80"
                    alt={pokedex.name}
                  />
                  <div className="content">
                    {" "}
                    <h5 className="text-capitalize">{pokedex.name} </h5>{" "}
                    {pokedex?.types?.map((pokedexType, index: number) => {
                      if (!pokedexType?.type?.name) return null;
                      return (
                        <span
                          key={index}
                          className="badge rounded-pill text-dark border me-1 text-capitalize"
                        >
                          {" "}
                          {/* {pokedexType.type.name}{" "} */}
                          {typeof pokedexType === "string"
                            ? pokedexType
                            : pokedexType?.type?.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default PokedexCard;
