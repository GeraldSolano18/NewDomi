/* eslint-disable import/prefer-default-export */
import React from 'react';
import Mision from '../../assets/static/Mision.svg';
import './style.scss';

export const CardUi = () => {
  return (
    <>
      <div className='CardUi_Container'>
        <div className='CardUi'>
          <div className='CardUi_Circle'>
            <img src={Mision} alt='' />
          </div>
          <div className='CardUi_Content'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur sed at temporibus natus mollitia earum consequatur velit ipsum? Aperiam porro quo sint fugit nemo aliquid unde vero esse inventore ducimus!</p>
            <button type='button'>Read more</button>
          </div>
        </div>
        <div className='CardUi'>
          <div className='CardUi_Circle'>
            <h2>02</h2>
          </div>
          <div className='CardUi_Content'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur sed at temporibus natus mollitia earum consequatur velit ipsum? Aperiam porro quo sint fugit nemo aliquid unde vero esse inventore ducimus!</p>
            <button type='button'>Read more</button>
          </div>
        </div>
        <div className='CardUi'>
          <div className='CardUi_Circle'>
            <h2>03</h2>
          </div>
          <div className='CardUi_Content'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur sed at temporibus natus mollitia earum consequatur velit ipsum? Aperiam porro quo sint fugit nemo aliquid unde vero esse inventore ducimus!</p>
            <button type='button'>Read more</button>
          </div>
        </div>
      </div>
    </>
  );
};
