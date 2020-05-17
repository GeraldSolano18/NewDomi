import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import propTypes from 'prop-types';

import rigth from '../assets/static/rigth.svg';
import leftt from '../assets/static/left.svg';

import '../assets/styles/components/Carrousel.scss';

const Carrousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const left = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(images.length - 1);
    }

  };
  const right = () => {
    if (activeIndex < images.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }

  };
  return (
    <div className='Carrousel'>
      <div className='Carrousel_Buttons'>
        <button onClick={left} className='Carrousel_btn' type='button'>
          <img src={leftt} className='Carrousel_Icon' alt='' />
        </button>
        <button onClick={right} className='Carrousel_btn' type='button'>
          <img src={rigth} className='Carrousel_Icon' alt='' />
        </button>
      </div>

      <div>
        <TransitionGroup>
          <CSSTransition
            timeout={1000} //esto es el tiempo total que la imagen permanece
            classNames='slide'
            key={activeIndex} // cuando el indice cambia el componente se clona
          >
            <img
              src={images[activeIndex]}
              alt='img'
              className='Carrousel_Img'
            />
          </CSSTransition>
        </TransitionGroup>

      </div>
    </div>
  );
};

Carrousel.defaultProps = {
  images: [],
};

Carrousel.propTypes = {
  images: propTypes.arrayOf(
    propTypes.string,
  ),
};

export default Carrousel;
