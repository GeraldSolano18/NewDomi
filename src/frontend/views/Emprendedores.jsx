import React from 'react';

import Acordeon from '../components/Acordeon';

import fondo from '../assets/static/fondo-blanco.png';
import Emprendedores from '../assets/static/Emprendedores.png';
import logo from '../assets/static/logo.svg';
import composicion from '../assets/static/composicion.jpg';

import '../assets/styles/views/Emprendedores.scss';

const Emprededores = () => {
  return (
    <div className='container'>
      <img src={fondo} alt='blancofondo' className='fondo-blanco' />
      <div className='contenido'>
        <img src={Emprendedores} className='banner' alt='Banner' />
        <div className='seccion'>
          <p className='titulo'>Emprendedores</p>
          <img className='header__img' src={logo} alt='logo' />
        </div>
        <div>
          <p className='pBlue'>
DomiTiendas permite a los comercios Nicaraguense maximimar beneficios y evitar completamente las perdidasmediante un sistema de control
          </p>
          <div className='padre'>
            <div className='martop'>
              <Acordeon
                titulo='Aumenta tus ventas'
                contenido='srptpkerjporrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrreeeeeeeeeeeeeeee
              eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
              '
                bgColor='#ADFFCA'
              />
              <Acordeon
                titulo='Mejor control monetario'
                contenido='nos seeee'
                bgColor='#06807A'
              />
              <Acordeon
                titulo='nose imbsil un titulo'
                contenido='srptpkerjporrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrreeeeeeeeeeeeeeee
              eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee

              '
                bgColor='#ADFFCA'
              />
            </div>
            <div>
              <img src={composicion} alt='' className='imgMargin' />
            </div>
          </div>
        </div>
      </div>
      <div className='spaceblanco'>
        <img src={fondo} alt='blancofondo' className='fondo-blanco' />
      </div>

    </div>
  );
};

export default Emprededores;
