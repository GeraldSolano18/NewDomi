/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Particles from "react-particles-js";

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
      value: "#2d314d",
    },
    size: {
      value: 2,
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
      color: "#2d314d",
      opacity: 1,
    },
  },
};

const BannerHero = () => {
  return (
    <>
      <div className='hero_banner_props_left'>
        <div className='hero_banner_content'>
          <div className='particles_banner'>
            <Particles height='500px' width='751px' params={particleOPT} />
          </div>
          <div className='hero_banner_center'>
            <h1 className='hero_banner_h1'> Lorem ipsum es el texto que emostraciones de tipografía</h1>
            <p className='hero_banner_p'>
              Lorem ipsum es el texto que sLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografíae usa habitualmente en diseño gráfico en demostraciones de tipografía
            </p>
            <p className='hero_banner_p'>
              Lorem ipsum es el texto que sLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografíae usa habitualmente en diseño gráfico en demostraciones de tipografía
            </p>
          </div>
        </div>
        <div className='hero_banner_img' />
      </div>
    </>
  );
};

export default BannerHero;
