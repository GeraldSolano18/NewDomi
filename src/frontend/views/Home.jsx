/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import ImpactoCard from '../components/ImpactoCard';
import BannerHero from '../components/BannerHero';
import Footer from '../components/Footer';
import { CardUi } from '../components/CardUi';
import { CardHover } from '../components/CardHover';

import Slides from '../components/Slides';
import online from '../assets/static/icon_online.svg';
import bud from '../assets/static/icon_bud.svg';
import onboarding from '../assets/static/icon_onboarding.svg';
import api from '../assets/static/icon_api.svg';
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
const Home = () => {
  return (
    <div>
      <Slides
        interval={4000}
        images={images}
      />

      <div className='Landing_con'>
        <Bounce>
          <h1 className='title__h11'>
            Un título descriptivo
          </h1>
        </Bounce>

      </div>
      {/* <section className='hero'>
        <div className='wrapper'>
          <div className='hero__content'>
            <div className='hero__image' />
            <div className='hero__description'>
              <h1 className='title__h1'>
                Texto principal
              </h1>
              <p className='copy'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas laboriosam culpa ipsam sapiente, facere officia, non libero dolorum perspiciatis in magni repellendus accusantium tempora accusamus quos enim necessitatibus alias aspernatur.
              </p>
              <button
                type='button'
                className='cartButton'
              >
                Conocer más
              </button>
            </div>
          </div>

        </div>
      </section> */}

      <CardUi />
      <div className='two_ph'>
        <Fade left>
          <ImpactoCard
            title='Impacto Social'
            content='Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías
            Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías
            Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones'
            claseCss='two_1'
          />
        </Fade>
        <Fade right>
          <ImpactoCard
            title='Impacto economico'
            content='Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías
          Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías
          Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones'
            claseCss='two_2'
          />
        </Fade>

      </div>
      <Fade>
        <BannerHero />
      </Fade>
      <CardHover />
      <div className='why'>
        <div className='wrapper'>
          <Bounce>
            <h1 className='title__h1'>
              ¿Por qué elegirnos a nosotros?
            </h1>
          </Bounce>

          <div className='why__grid'>
            <Zoom>
              <div className='why_item'>
                <img src={api} alt='' />
                <h1 className='title__h2'>
                  Online Shop
                </h1>
                <p className='copy'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas laboriosam culpa ipsam sapiente
                </p>
              </div>
            </Zoom>
            <Zoom>
              <div className='why_item'>
                <img src={online} alt='' />
                <h1 className='title__h2'>
                  Online Shop
                </h1>
                <p className='copy'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas laboriosam culpa ipsam sapiente
                </p>
              </div>
            </Zoom>
            <Zoom>
              <div className='why_item'>
                <img src={bud} alt='' />
                <h1 className='title__h2'>
                  Online Shop
                </h1>
                <p className='copy'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas laboriosam culpa ipsam sapiente, facere officia
                </p>
              </div>
            </Zoom>
            <Zoom>
              <div className='why_item'>
                <img src={onboarding} alt='' />
                <h1 className='title__h2'>
                  Online Shop
                </h1>
                <p className='copy'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas laboriosam culpa ipsam sapiente, facere officia
                </p>
              </div>
            </Zoom>

          </div>

        </div>

      </div>

      <Fade>
        <Footer />
      </Fade>

    </div>
  );

};
export default Home;
