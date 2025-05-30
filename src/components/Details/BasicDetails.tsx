import { PokemonDetail } from "../../types/pokedex";

interface BasicDetailsProps {
  pokemonDetails: PokemonDetail | null;
  pokedexColor: React.CSSProperties;
}

const BasicDetails = ({ pokemonDetails, pokedexColor }: BasicDetailsProps) => {
  // console.log(pokemonDetails)

  const { height, weight, base_experience } = pokemonDetails;

  // console.log("pokedex color", pokedexColor)
  return (
    <div className="perspective-card perspective-card-right">
      <ul className="list-unstyled">
        <li className="d-flex justify-content-between">
          <span>Experience</span>
          <span>{base_experience}</span>
        </li>
        <li className="d-flex justify-content-between">
          <span>Height</span>
          <span>{height}</span>
        </li>
        <li className="d-flex justify-content-between">
          <span>Weight</span>
          <span>{weight}</span>
        </li>
        <li className="d-flex justify-content-between">
          <span>Types</span>
          <span>
            <span className="badge bg-primary me-1" style={pokedexColor}>
              {" "}
              poison{" "}
            </span>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default BasicDetails;
