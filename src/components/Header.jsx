import React, {useState} from "react";
import Reel from "../assets/movieReel.png";
import { Link , useParams} from "react-router-dom";
import Resume from "../assets/BrandonWhiteResume.pdf"


const Header = () => {

  


  return (
    <header className="overlay">
      <nav>
        <div className="header__logo">
            <Link to="/"> 
          <div className="header__logo--brand">
            <img src={Reel} className="header__logo--img" alt="MovieVue Reel" />
            <h1 className="header__logo--title">
              movie<span className="bold">Vu</span>
            </h1>
          </div>
            </Link>
        </div>
        <ul className="header__links">
          <li>
            <Link to="/search">Search Movies</Link>
          </li>
         
          <li className="contact">
            <Link to={Resume} target="_blank" className="contact-button">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
