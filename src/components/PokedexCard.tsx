import { Link } from 'react-router-dom'
import { PokemonListItem } from '../types/pokedex';

interface PokedexCardProps {
    list: PokemonListItem[];
  }

const PokedexCard = ({list}:PokedexCardProps) => {
   
  return (
   <>
    {list.map( (pokedex) => {
    return (
        <div className="col-md-4">
        <div className="card custom-card glass-ui p-2 mb-3">
          <div className="content">
            {" "}
            <Link to={`/view/${pokedex.name}`}>
            {pokedex.name}
            </Link>{" "}
          </div>
        </div>
      </div>
    )
   })}
   </>
   
  )
}

export default PokedexCard
