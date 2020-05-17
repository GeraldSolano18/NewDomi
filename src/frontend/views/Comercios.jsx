import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import fondo from '../assets/static/fondo-blanco.png';
import logo from '../assets/static/logo.svg';
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
          <ul>
            <img src={check} className='check' alt='check' />
            <li className='liCheck'>
              Ahórrate dolores de cabeza y dinero con un sistema
              de control de inventarios confiable,
              practico y facil de usar acorde a tus necesidades.
            </li>
            <img src={check} className='check' alt='check' />
            <li className='liCheck'>
              mejora tus ventas con nosotros
            </li>
            <img src={check} className='check' alt='check' />
            <li className='liCheck'>
              Informacion estadistica de facil acceso
            </li>
            <img src={check} className='check' alt='check' />
            <li className='liCheck'>
              Informacion estadistica de facil acceso de forma eficiente
            </li>
          </ul>
          <div>
          perra
          </div>
        </div>
      </div>
      ooeooeoee no seas caballo
    </div>
  );
};

export default Comercios;
