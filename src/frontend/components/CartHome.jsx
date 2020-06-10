import React from 'react';

import '../assets/styles/components/CartHome.scss';

const CartHome = ({ titulo, icon, contenido }) => {
  return (
    <div className='cartHome'>
      <p className='cartP'>{titulo}</p>
      <img src={icon} className='cartIcon' alt='' />
      <div className='cartContenido'>
        <div className='content'>
          {contenido}
        </div>

        <button
          type='button'
          className='cartButton'
        >
            Conocer más
        </button>
      </div>
    </div>
  );
};

export default CartHome;
