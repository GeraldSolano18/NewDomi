import React from 'react';
import '../assets/styles/components/Header.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/static/logo.svg';

const Header = () => {
  return (

    <div className='Header'>
      <div>
        <NavLink to='/'>
          <img src={Logo} className='header__img' alt='logoDomi' />
        </NavLink>
      </div>
      <div className='Header__menu'>
        <span>
          <NavLink to='/sobreRedStore' className='NavLink' activeClassName='activeItem'>
            Sobre DomiTiendas
          </NavLink>
        </span>

        <span>
          <NavLink to='/comercios' className='NavLink' activeClassName='activeItem'>
            Comercios
          </NavLink>

        </span>
        <span>
          <NavLink to='/emprededores' className='NavLink' activeClassName='activeItem'>
            Emprendedores
          </NavLink>
        </span>
        <span>
          <NavLink to='/control' className='NavLink' activeClassName='activeItem'>
            Control de inventario
          </NavLink>
        </span>
        {/* <span>
            <NavLink to='/desicion' className='NavLink' activeClassName='activeItem'>
              Toma de desiciones
            </NavLink>
          </span>
          <span>
            <NavLink to='/aumenta' className='NavLink' activeClassName='activeItem'>
              Aumenta tus ventas
            </NavLink>
          </span> */}
        <span>
          <NavLink to='/contactanos' className='NavLink' activeClassName='activeItem'>
            Contactanos
          </NavLink>
        </span>
      </div>

    </div>

  );
};

export default Header;
