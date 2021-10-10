import React, { useState, useEffect } from 'react';
import '../assets/styles/components/Slides.scss';
import propTypes from 'prop-types';

const Slides = ({ images, interval }) => {

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const tick = setInterval(() => {
      if (activeIndex < images.length - 1) {
        setActiveIndex(activeIndex + 1);
      } else {
        setActiveIndex(0);
      }
    }, interval);

    return () => clearInterval(tick); //limpia los intervalos

  }, [activeIndex, images.length, interval]); //se pasan las dependecias para que cuando alguna cambie, ejecute de nuevo el hook

  return (
    <div className='Slide'>
      <div className='Slide_container'>

        {
          images.map((image, index) => (
            <React.Fragment key={image.id}>
              <img
                src={image.src}
                alt={image.titulo}
                className={
                  index === activeIndex ?
                    'Slide_container_img animaShow' :
                    'Slide_container_img animaHide'
                }
              />
            </React.Fragment>
          ))

        }
        <div className='Slide_container_Domi'>
          <div className='Landing_Domi'>
            <p>DomiTiendas</p>
          </div>
        </div>

        {/* <div className='Slider_prueba'>
          <div className='Slide_container_titulo'>
            {images[activeIndex].titulo }
          </div>

        </div> */}

      </div>
    </div>
  );
};

Slides.defaultProps = {
  interval: 5000,
  images: [],
};

Slides.propTypes = {
  interval: propTypes.number,
  images: propTypes.arrayOf(
    propTypes.shape({
      src: propTypes.string,
      titulo: propTypes.string,

    }),
  ),
};

export default Slides;
