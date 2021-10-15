/* eslint-disable import/prefer-default-export */
import React from 'react';
import './banner.scss';

export const BannerComercio = () => {
  return (
    <>
      <div className='Comercio_Banner'>
        <div className='content_header'>
          <div>
            <h1>
              Controla tu inventario de manera eficiente
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem libero sit magni accusamus maxime tempore eos enim tenetur laboriosam quas, qui aspernatur, blanditiis voluptates magnam a vitae quia architecto amet.</p>
          </div>
        </div>

        <div className='Comercio_Banner_grid'>
          <div className='grande'>
            <img className='comercio_item_banner' src='https://images.pexels.com/photos/2220314/pexels-photo-2220314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='' />
            <div className='opacity_show'>
              <p className='ppp'>hola puedes cer mas aqui</p>
            </div>
          </div>
          <div className='grande'>
            <img className='comercio_item_banner' src='https://images.pexels.com/photos/3962293/pexels-photo-3962293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='' />
          </div>
          <div className='Banner_grid_item peque'>
            <img className='comercio_item_banner' src='https://images.pexels.com/photos/4177833/pexels-photo-4177833.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='' />
          </div>
          <div>
            <img className='comercio_item_banner' src='https://images.pexels.com/photos/936038/pexels-photo-936038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='' />
          </div>
          <div className='grande'>
            <img className='comercio_item_banner' src='https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='' />
          </div>
        </div>
      </div>
    </>
  );
};
