import React from 'react';
import '../assets/styles/components/Header.scss';
import { Link } from 'react-router-dom';
import Logo from '../assets/static/logo.svg';

const Header = () => {
  return (

    <div className='Header'>
      <div>
        <Link to='/'>
          <img src={Logo} className='header__img' alt='logoDomi' />
        </Link>
      </div>
      <div className='Header__menu'>
        <ul>
          <li>
            <Link to='/sobreRedStore' className='Link'>
              Sobre DomiTiendas
            </Link>
          </li>
          <li>
            <Link to='/comercios' className='Link'>
              Comercios
            </Link>

          </li>
          <li>
            <Link to='/emprededores' className='Link'>
              Emprendedores
            </Link>
          </li>
          <li>
            <Link to='/control' className='Link'>
              Control de inventario
            </Link>
          </li>
          <li>
            <Link to='/desicion' className='Link'>
              Toma de desiciones
            </Link>
          </li>
          <li>
            <Link to='/aumenta' className='Link'>
              Aumenta tus ventas
            </Link>
          </li>
          <li>
            <Link to='/contactanos' className='Link'>
              Contactanos
            </Link>
          </li>
        </ul>
      </div>

    </div>

  );
};

export default Header;
