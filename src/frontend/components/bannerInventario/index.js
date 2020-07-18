/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import Particles from "react-particles-js";
import Zoom from 'react-reveal/Zoom';
import './inventario.scss';

const particleOPT = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    size: {
      value: 1,
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
      color: "#ffffff",
      opacity: 1,
    },
  },
};

export const BannerInventario = () => {
  return (
    <div className='content_banner'>
      <div className='particles_banner'>
        <Particles params={particleOPT} />
      </div>
      <div className='content_wrapper'>

        <div className='content_header'>
          <div>
            <h1>
              Controla tu inventario de manera eficiente
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem libero sit magni accusamus maxime tempore eos enim tenetur laboriosam quas, qui aspernatur, blanditiis voluptates magnam a vitae quia architecto amet.</p>
          </div>
          <div>
            <button type='button' className='header_button'>
              Conocer mas
            </button>
          </div>
        </div>

        <div className='content_grid'>
          <Zoom>
            <div className='grandeppX'>
              <img src='https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' className='img_grid' alt='' />
              <p className='detail_grid'>
                loddddddddddddn dj kdnkndknkdnndn
              </p>
            </div>
          </Zoom>
          <Zoom>
            <div>
              <img src='https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' className='img_grid' alt='' />
              <p className='detail_grid'>
                GRander
              </p>
            </div>
          </Zoom>
          <Zoom>
            <div>
              <img src='https://images.pexels.com/photos/2538122/pexels-photo-2538122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' className='img_grid' alt='' />
              <p className='detail_grid'>
                GRanderddd
              </p>
            </div>
          </Zoom>
          <Zoom>
            <div className='largo'>
              <img src='https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' className='img_grid' alt='' />
              <p className='detail_grid'>
                GRanderddd
              </p>
            </div>
          </Zoom>

        </div>
      </div>
    </div>
  );
};
