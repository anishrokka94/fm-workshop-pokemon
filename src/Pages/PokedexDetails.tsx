import { useParams } from "react-router-dom";
import { getColor } from "../utils/colorMap";
import BasicDetails from "../components/Details/BasicDetails";
import ProgressDetails from "../components/Details/ProgressDetails";
import usePokemonDetails from "../hooks/usePokemonDetails";
import usePokemonSpecies from "../hooks/usePokemonSpecies";

const PokedexDetails = () => {
  const { name } = useParams();
  // console.log("name", name)

  const { pokemonDetails, error, loading } = usePokemonDetails(name);

  // console.log("poke", pokemonDetails)

  const { pokedexSpecies } = usePokemonSpecies(name);
  // console.log("pkde species", pokedexSpecies?.color.name)

  const pokedexColor = {
    background: getColor(pokedexSpecies?.color.name),
    color: "#fff",
  };

  if (loading) {
    return <p> Loading... </p>;
  }

  if (error) {
    return <p> {error.message} </p>;
  }

  if (!pokemonDetails) {
    return <p> No pokemon details found </p>;
  }

  return (
    <>
      <div
        className="subbanner subbanner-sm spell-list-bg"
        style={pokedexColor}
      >
        <div className="hero-content">
          <h3 className="text-capitalize"> {pokemonDetails?.name} </h3>
        </div>
      </div>

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              {pokemonDetails && (
                <BasicDetails
                  pokemonDetails={pokemonDetails}
                  pokedexColor={pokedexColor}
                />
              )}
            </div>
            <div className="col-md-4">
              {pokemonDetails && (
                <div className="bg-logo">
                  <img
                    src={
                      pokemonDetails?.sprites?.other?.["official-artwork"]
                        ?.front_default
                    }
                    className="img-fluid"
                    alt={pokemonDetails?.name}
                  />
                </div>
              )}
            </div>
            <div className="col-md-4">
              <div className="perspective-card perspective-card-left">
                <ul className="list-unstyled">
                  {pokemonDetails && (
                    <ProgressDetails
                      pokemonDetails={pokemonDetails}
                      pokedexColor={pokedexColor}
                    />
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PokedexDetails;
