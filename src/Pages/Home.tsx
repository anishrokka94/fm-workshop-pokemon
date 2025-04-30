import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="hero">
    <div className="hero-content">
      <h1 className="animate__animated animate__bounce">
        {" "}
        A Home Full of Pokémon
      </h1>
      <p>
        {" "}
        Experience the nostalgic story thrilling adventure setting for the world’s greatest game.{" "}
      </p>

      <Link
        to="/pokedex/list"
        className="btn btn-danger btn-lg btn-brand"
      >
        {" "}
        Explore More Pokémon{" "}
      </Link>
    </div>
  </div>
  )
}

export default Home
