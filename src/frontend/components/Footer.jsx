import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/static/logowhite.svg';
import '../assets/styles/components/Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='wrapper'>
        <div className='Landing_Do '>
          <img className='footer__logo' src={logo} alt=' ' />
          <p>DomiTiendas</p>
        </div>
        <div className='footer__social'>
          <span className='icon__facebook' />
          <span className='icon__instagram' />
          <span className='icon__twitter' />
          <span className='icon__youtube' />
          <span className='icon__pinterest' />
        </div>
        <div className='footer__links'>
          <Link className='footer__link' to='/sobreRedStore'><p>Link</p></Link>
          <Link className='footer__link' to='/'><p>About us</p></Link>
          <Link className='footer__link' to='/'><p>About us</p></Link>
          <Link className='footer__link' to='/'><p>About us</p></Link>
          <Link className='footer__link' to='/'><p>About us</p></Link>
          <Link className='footer__link' to='/'><p>About us</p></Link>
        </div>
        <div className=' footer__button'>
          <button
            type='button'
            className='cartButton'
          >
            Contactanos
          </button>
        </div>

        <p className='footer__copyright'>@DomiTiendas || Todos los derechos reservados</p>

      </div>
    </footer>
  );
};

export default Footer;
