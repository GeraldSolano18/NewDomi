import React from 'react';
import Fade from 'react-reveal/Fade';

import fondo from '../assets/static/fondo-blanco.png';
import img from '../assets/static/logistc.png';
import img1 from '../assets/static/empresario.png';
import logo from '../assets/static/logo.svg';

import '../assets/styles/views/SobreRed.scss';

const SobreRed = () => {
  return (
    <div className='container'>
      <img src={fondo} alt='blancofondo' className='fondo-blanco' />
      <div className='contenido'>
        <div className='seccion'>
          <Fade>
            <p className='titulo'>Sobre RedStore</p>
            <img className='header__img' src={logo} alt='logo' />
          </Fade>

        </div>

        <div className='contenido__'>
          <Fade left>
            <p className='parrafo'>
            La base de toda empresa comercial es la compra y venta de bienes o servicios; de aquí la importancia del manejo del inventario por parte de la misma. Este manejo contable permitirá a la PYME mantener el control oportunamente, así como también conocer al final del período contable un estado confiable de la situación económica de la misma
            </p>
          </Fade>
          <Fade right>
            <img className='img' src={img} alt='' />
          </Fade>
          <Fade left>
            <img className='img1' src={img1} alt='' />
          </Fade>

          <Fade right>
            <p className='parrafo'>
            La base de toda empresa comercial es la compra y venta de bienes o servicios; de aquí la importancia del manejo del inventario por parte de la misma. Este manejo contable permitirá a la PYME mantener el control oportunamente, así como también conocer al final del período contable un estado confiable de la situación económica de la misma
            </p>
          </Fade>

        </div>

      </div>
    </div>
  );
};

export default SobreRed;
