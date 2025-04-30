import React from 'react'
import { useParams } from 'react-router-dom';

const PokedexDetails = () => {
    const { name } = useParams();
    console.log("name", name)
  return (
    <div>
        <p> Pokemon {name} </p>
    </div>
  )
}

export default PokedexDetails
