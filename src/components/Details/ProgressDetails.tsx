import React from "react";

interface basicDetailsProps {
  pokemonDetails: PokemonDetail | null,
  pokedexColor: React.CSSProperties;
}

const ProgressDetails = ( {pokemonDetails, pokedexColor}: basicDetailsProps) => {
  console.log("pode de", pokemonDetails)
  return (
    <>
    {pokemonDetails?.stats?.map( (stat)=> {
      return (
          <li className="d-flex justify-content-between">
            <div
              className="progress w-100 mb-2"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow={stat.base_stat}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{height: '1.5rem'}}
            >
              <div
                className="progress-bar progress-bar-striped text-bg-success" 
              
                style={{ ...pokedexColor, width:`${stat.base_stat}%` }}
              >
                {stat.base_stat}%
              </div>
            </div>
          </li>

      )
    })}
      
    </>
  );
};

export default ProgressDetails;
