/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Particles from "react-particles-js";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import Slides from '../components/Slides';
import CartHome from '../components/CartHome';

import Mision from '../assets/static/Mision.svg';
import Vision from '../assets/static/Vision.svg';
import Valores from '../assets/static/Valores.svg';
import '../assets/styles/App.scss';

const images = [
  {
    id: '1x',
    src: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    titulo: 'Titulo 1 sub',
  },
  {
    id: '2xx',
    src: 'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    titulo: 'Titulo 2 subtit',
  },
  {
    id: '3xxx',
    src: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    titulo: 'Titulo 3 subtitulos',
  // eslint-disable-next-line comma-dangle
  }
// eslint-disable-next-line comma-dangle
];
const particleOPT = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 600,
      },
    },
    color: {
      value: "#000000",
    },
    size: {
      value: 1.5,
      random: false,
      anim: {
        speed: 30,
        size_min: 0.1,
        sync: false,
      },
      opacity: {
        value: 1000,
        random: false,
      },
    },
    line_linked: {
      enable: true,
      random: false,
      distance: 100,
      color: "#000000",
      opacity: 0.9,
    },
  },
};

const Home = () => {
  return (
    <div>
      <Slides
        interval={4000}
        images={images}
      />

      <div className='Landing_con'>

        <div className='Landing_Cart'>
          <div>
            <Zoom>
              <CartHome
                titulo='Mision'
                icon={Mision}
                contenido='Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías '
              />
            </Zoom>
          </div>
          <div>
            <Zoom>
              <CartHome
                titulo='Vision'
                icon={Vision}
                contenido='Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías '
              />
            </Zoom>

          </div>
          <div>
            <Zoom>
              <CartHome
                titulo='Valores'
                icon={Valores}
                contenido='Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías '
              />
            </Zoom>

          </div>

        </div>

      </div>
      <div className='two_ph'>
        <Fade left>
          <div className='two_1'>
            <p className='two_title'>Impacto Social</p>
            <p className='two_content'>
          Lorem ipsum es el texto que se usa habitualmente en diseño gráfico de tipografías Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías
          Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías
          Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías
            </p>
            <button type='button' className='two_button'> VER MÁS</button>
          </div>
        </Fade>
        <Fade right>
          <div className='two_2'>
            <p className='two_title'>Impacto económico</p>
            <p className='two_content'>
          Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías
          Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías
          Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías
            </p>
            <button type='button' className='two_button'> VER MÁS</button>
          </div>
        </Fade>

      </div>

      <Fade>
        <div className='hero_banner'>
          <div className='hero_banner_content'>
            <div className='particles_banner'>
              <Particles height='500px' width='751px' params={particleOPT} />
            </div>
            <div className='hero_banner_center'>
              <h1 className='hero_banner_h1'>Lorem Title App </h1>
              <p className='hero_banner_p'>
          Lorem ipsum es el texto que se usa habitualmente en diseño gráfico de tipografías Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías
          Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías
          Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías
              </p>
              <p className='hero_banner_p'>
        es de tipografías
          Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías
              </p>
            </div>
          </div>
          <div className='hero_banner_img' />
        </div>
      </Fade>

      <div className='hero__image' />

    </div>
  );

};
export default Home;
