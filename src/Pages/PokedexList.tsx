import PokedexCard from "../components/PokedexCard";
import SearchPokedex from "../components/Filter/SearchPokedex/SearchPokedex";
import useFavouriteList from "../hooks/useFavouriteList";
import useFetch from "../hooks/useFetch";
import AdvancedSearch from "../components/Filter/AdvancedSearch/AdvancedSearch";
import { useState } from "react";
import { Pokemon } from "../components/Filter/AdvancedSearch/AdvancedSearch.d";

const PokedexList = () => {
  const {
    pokedex: initialPokedex,
    error,
    loading,
    loadMore,
    isLoadMoreClicked,
  } = useFetch();

  const { allFavourites } = useFavouriteList();

  const [filteredResults, setFilteredResults] = useState<Pokemon[] | null>(
    null
  );
  const pokedexToRender = filteredResults || initialPokedex;

  const handleSearchResults = (results: Pokemon[]) => {
    setFilteredResults(results);
  };

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div className="subbanner spell-list-bg">
        <div className="hero-content">
          <h2> Pokedex </h2>
          <p>
            {" "}
            Connect with your friends around the world and play Pokémon with
            some of the best Pokémon Masters anywhere!{" "}
          </p>
        </div>
      </div>

      <div className="main bg-gradient">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <button
                    className="btn btn-dark mb-3 btn-sm"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <img
                      width={16}
                      src="/img/icons-filter-50.png"
                      alt="filter icon"
                    />
                    <span> Filter Pokemon </span>
                  </button>

                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <AdvancedSearch onSearch={handleSearchResults} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            {/* <SpellComponent /> */}
            <PokedexCard list={pokedexToRender} loading={loading} />
            {!filteredResults && (
              <div className="mt-3 text-center">
                <button
                  type="button"
                  className="btn btn-danger btn-brand"
                  onClick={loadMore}
                  disabled={isLoadMoreClicked}
                >
                  {isLoadMoreClicked ? "Loading..." : "Load more"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokedexList;
