import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../public/img/svg/Logo";
import HeartIcon from "../../public/img/svg/HeartIcon";
import { FavouriteContext } from "../global-state/context/FavouriteContext";
// import { FavouriteContext } from "../global-state/FavouriteContext";

const Navbar = () => {
  const { favourites } = useContext(FavouriteContext);
  console.log("nav favs", favourites);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light custom-nav">
      <div className="container">
        <a className="navbar-brand" href="/">
          <Logo />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pokedex/list">
                Pokedex
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>

          <div className="nav-icons">
            <Link className="nav-link" to="/favourites">
              <div className="position-relative">
                <HeartIcon />
                <span
                  style={{
                    width: "22px",
                    height: "22px",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                  }}
                  className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"
                >
                  {favourites.length}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
