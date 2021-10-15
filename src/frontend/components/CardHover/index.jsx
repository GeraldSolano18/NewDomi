/* eslint-disable import/prefer-default-export */
import React from 'react';
import './style.scss';
import desing from '../../assets/static/desing.svg';
import startup from '../../assets/static/startupcolor.svg';
import data from '../../assets/static/datacolor.svg';
import money from '../../assets/static/colormoney.svg';

export const CardHover = () => {
  return (
    <div className='Hover_body'>
      <div className='Hover_Container'>
        <div className='Hover_Card'>
          <div className='Hover_imgBx' data-text='Arquitectura'>
            <img src={desing} alt='' />
          </div>
          <div className='Hover_Content'>
            <div>
              <h3>Desingn</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, autem id magnam beatae excepturi, nulla sed eum optio velit quos cum veniam quia ab ipsum error, quisquam ea. Alias, impedit.</p>
              <button type='button'>Read More</button>
            </div>
          </div>
        </div>

        <div className='Hover_Card'>
          <div className='Hover_imgBx' data-text='Startup'>
            <img src={startup} alt='' />
          </div>
          <div className='Hover_Content'>
            <div>
              <h3>Desingn</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, autem id magnam beatae excepturi, nulla sed eum optio velit quos cum veniam quia ab ipsum error, quisquam ea. Alias, impedit.</p>
              <button type='button'>Read More</button>
            </div>
          </div>
        </div>

        <div className='Hover_Card'>
          <div className='Hover_imgBx' data-text='Dashboard'>
            <img src={data} alt='' />
          </div>
          <div className='Hover_Content'>
            <div>
              <h3>Desingn</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, autem id magnam beatae excepturi, nulla sed eum optio velit quos cum veniam quia ab ipsum error, quisquam ea. Alias, impedit.</p>
              <button type='button'>Read More</button>
            </div>
          </div>
        </div>

        <div className='Hover_Card'>
          <div className='Hover_imgBx' data-text='Ahorra'>
            <img src={money} alt='' />
          </div>
          <div className='Hover_Content'>
            <div>
              <h3>Desingn</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, autem id magnam beatae excepturi, nulla sed eum optio velit quos cum veniam quia ab ipsum error, quisquam ea. Alias, impedit.</p>
              <button type='button'>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
