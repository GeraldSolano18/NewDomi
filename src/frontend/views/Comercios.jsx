import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import fondo from '../assets/static/fondo-blanco.png';
import logo from '../assets/static/logo.svg';
import pos from '../assets/static/pos.png';
import banner from '../assets/static/bannerComercio.png';
import check from '../assets/static/Check.svg';
import '../assets/styles/views/Comercios.scss';

const Comercios = () => {
  return (
    <div className='container'>
      <img src={fondo} alt='blancofondo' className='fondo-blanco' />
      <div className='contenido'>
        <img src={banner} className='banner' alt='Banner' />
        <div className='seccion'>
          <Fade>
            <p className='titulo'>Comercios</p>
            <img className='header__img' src={logo} alt='logo' />
          </Fade>

        </div>
        <div>
          <Zoom>
            <p className='pBlue'>
              Red store permite a los comercios Nicaraguense maximimar beneficios y evitar completamente las perdidasmediante un sistema de control
            </p>
          </Zoom>

        </div>
        <div className='contenido_'>
          <div>
            <Fade left>
              <div className='itemList'>
                <img src={check} className='check' alt='check' />
                <p className='liCheck'>Ahórrate dolores de cabeza y dinero con un sistemade control de inventarios confiable,practico y facil de usar acorde a tus necesidades.</p>
              </div>

              <div className='itemList'>
                <img src={check} className='check' alt='check' />
                <p className='liCheck'>mejora tus ventas con nosotros</p>
              </div>

              <div className='itemList'>
                <img src={check} className='check' alt='check' />
                <p className='liCheck'>  Informacion estadistica de facil acceso</p>
              </div>

              <div className='itemList'>
                <img src={check} className='check' alt='check' />
                <p className='liCheck'>Informacion estadistica de facil acceso de forma eficiente</p>
              </div>

            </Fade>
          </div>

          <div>
            <Fade right>
              <div>
                <img src={pos} className='posimg' alt='' />
              </div>
            </Fade>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Comercios;
