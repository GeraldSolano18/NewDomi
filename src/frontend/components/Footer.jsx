import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Particles from 'react-particles-js';
import '../assets/styles/components/Footer.scss';

const Footer = () => {
  const particleOPT = {
    particles: {
      number: {
        value: 70,
        density: {
          enable: true,
          value_area: 700,
        },
      },
      color: {
        value: '#ffffff',
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
      },
    },
  };

  return (
    <div className='pruebaa'>

      <div className='Footer'>

        <div>
          <Particles params={particleOPT} className='particless' />
        </div>

      </div>

    </div>
  );
};

export default Footer;
