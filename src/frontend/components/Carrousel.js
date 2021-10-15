import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import propTypes from 'prop-types';

import rigth from '../assets/static/rigth.svg';
import leftt from '../assets/static/left.svg';

import '../assets/styles/components/Carrousel.scss';

const Carrousel = ({ images }) => {
  //inicializamos el estado de activeIndex en 0
  const [activeIndex, setActiveIndex] = useState(0);

  //CUANDO SE CLICKEA EL BOTON PARA IR A LA IZQUIERDA
  const left = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(images.length - 1);
    }

  };
    //CUANDO SE CLICKEA EL BOTON PARA IR A LA DERECHA
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
        {/* Boton left dispara en su on click la funcion left */}
        <button onClick={left} className='Carrousel_btn' type='button'>
          <img src={leftt} className='Carrousel_Icon' alt='' />
        </button>
        {/* Boton right dispara en su on click la funcion right */}
        <button onClick={right} className='Carrousel_btn' type='button'>
          <img src={rigth} className='Carrousel_Icon' alt='' />
        </button>
      </div>

      <div>
        <TransitionGroup>
          <CSSTransition //==Esta configuracion permite que se duplique el elemento
            timeout={5000} //esto es el tiempo total que la imagen permanece
            classNames='slide' //nombre de las clases que aplica a los componentes mutados
            key={activeIndex} // cuando el indice cambia el componente se clona el componente IMG
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
