import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url('https://s29588.pcdn.co/wp-content/uploads/sites/2/2019/03/Movie_Posters_Orange_Blue_Featured.jpg.optimal.jpg')` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <img src="https://play-lh.googleusercontent.com/BGCtAtNN1Ck_ke7wU-7EDps4y1EFoufBGSvbdyVYERpGPh2OA2_dF-Ovcx8lFF-pKVI" alt="" />
        </div>

        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">Term of Services</Link>
            <Link to="/">About Us</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Privacy Policy</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">You must watch</Link>
            <Link to="/">Recent Release</Link>
            <Link to="/">Top IMDB</Link>
            <Link to="/">About Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;