import PokedexCard from '../components/PokedexCard'
import useFetch from '../hooks/useFetch'


const PokedexList = () => {
  const {pokedex} = useFetch()
  console.log("pok", pokedex)
 
  return (
    <div>
      
      {/* <Link to="/pokedex/1"> Pokemon 1 </Link>
      <Link to="/pokedex/2"> Pokemon 2 </Link> */}

      <div className="subbanner spell-list-bg">
        <div className="hero-content">
          <h2> Pokedex </h2>
          <p>
            {" "}
            Connect with your friends around the world and play Pokémon with some of
            the best Pokémon Masters anywhere!{" "}
          </p>
        </div>
      </div>

      <div className="main bg-gradient">
        <div className="container">
          <div className="row">
            {/* <SpellComponent /> */}
            <PokedexCard list={pokedex}/>
          </div>
        </div>
      </div>


    </div>
  )
}

export default PokedexList
