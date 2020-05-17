import React from 'react';
import Zoom from 'react-reveal/Zoom';
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
          <Zoom>
            <p className='parrafo'>
            La base de toda empresa comercial es la compra y venta de bienes o servicios; de aquí la importancia del manejo del inventario por parte de la misma. Este manejo contable permitirá a la PYME mantener el control oportunamente, así como también conocer al final del período contable un estado confiable de la situación económica de la misma
            </p>
          </Zoom>
          <img className='img' src={img} alt='' />
          <img className='img1' src={img1} alt='' />

          <Zoom>
            <p className='parrafo'>
            La base de toda empresa comercial es la compra y venta de bienes o servicios; de aquí la importancia del manejo del inventario por parte de la misma. Este manejo contable permitirá a la PYME mantener el control oportunamente, así como también conocer al final del período contable un estado confiable de la situación económica de la misma
            </p>
          </Zoom>

        </div>

      </div>
    </div>
  );
};

export default SobreRed;
