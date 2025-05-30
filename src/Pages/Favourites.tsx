import React, { useContext } from "react";
import useFavouriteList from "../hooks/useFavouriteList";
import PokedexCard from "../components/PokedexCard";
// import { FavouriteContext } from "../global-state/context/FavouriteContext";

const Favourites = () => {
  // const { favourites } = useContext(FavouriteContext);

  const { allFavourites, refetch } = useFavouriteList();
  console.log("fav list", allFavourites);
  return (
    <>
      <div className="main bg-gradient">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-12">
              {/* <div>Your Favourites({allFavourites.length})</div> */}
            </div>
          </div>
          <div className="row">
            {/* <SpellComponent /> */}
            <PokedexCard list={allFavourites} refetch={refetch} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Favourites;
