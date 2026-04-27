import React from "react";
import movieReel from '../assets/movieReel.png'
import { Link } from "react-router-dom";
import Resume from "../assets/BrandonWhiteResume.pdf"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row footer__row">
            <Link to="/">
          <figure className="footer__figure">
            <img
              src={movieReel}
              className="footer__logo--img"
              alt="MovieVu Reel"
            />
            <h1 className="header__logo--title">
              movie<span className="bold">Vu</span>
            </h1>
          </figure>
            </Link>
          <div className="footer__social--list">
            <Link to=
              "https://github.com/leroialfonse"
              target="_blank"
              className="footer__social--link link__hover-effect link__hover-effect--white"
            >
              Github
            </Link>
            <Link to=
              "https://www.linkedin.com/in/brandon-white-dev/"
              target="_blank"
              className="footer__social--link link__hover-effect link__hover-effect--white"
            >
              LinkedIn
            </Link>
            {/* <!-- <a href="" className="footer__social--link
              link__hover-effect
              link__hover-effect--white" onclick="toggleModal()">
              Contact
              </a> --> */}
            <Link
              to={Resume}
              target="_blank"
              className="footer__social--link link__hover-effect link__hover-effect--white"
            >
              Resume
            </Link>
          </div>
          <div className="footer__copyright">
            Copyright &copy; 2026 Brandon White
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
