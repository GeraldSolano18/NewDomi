import React, { } from 'react';
import { Link } from 'react-router-dom';

import inventory from '../assets/static/inventory.svg';
import grafico from '../assets/static/graph.svg';
import dash from '../assets/static/DashBoard.svg';
import product from '../assets/static/product.svg';
import logo from '../assets/static/logo.svg';
import '../assets/styles/components/SideBar.scss';

const SideBar = () => {
//   const sidebar = document.getElementById('sidebar');

  //   sidebar.addEventListener('mouseleave', (e) => {
  //     console.log('Hola esto quiza funcione');
  //   });
  //   const toggle = () => {
  //     console.log('hola');
  //     const prueba = document.getElementById('prueba');
  //     prueba.style.background = 'black';
  //     // prueba.className='prueba'
  //   };

  return (
    <div className='SideBar'>

      <div className='SidebarDomi'>
        <img className='SidebarLogo' src={logo} alt='' />
      </div>

      <div className='SideBar_box'>
        <img className='SideBar_Icon' src={dash} alt='' />
        <Link className='SideBar_P' to='/'>Principal</Link>

      </div>

      <div className='SideBar_box'>
        <img className='SideBar_Icon' src={inventory} alt='' />
        <p className='SideBar_P'>Inventario</p>
      </div>

      <div className='SideBar_box'>
        <img className='SideBar_Icon' src={grafico} alt='' />
        <p className='SideBar_P'>Informes</p>
      </div>

      <div className='SideBar_box'>
        <img className='SideBar_Icon' src={product} alt='' />
        <p className='SideBar_P'>Nuevos productos</p>
      </div>

    </div>
  );

};

export default SideBar;
