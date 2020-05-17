import React from 'react';
import Zoom from 'react-reveal/Zoom';

import Slides from '../components/Slides';
import CartHome from '../components/CartHome';

import Mision from '../assets/static/Mision.svg';
import Vision from '../assets/static/Vision.svg';
import Valores from '../assets/static/Valores.svg';
import '../assets/styles/App.scss';

const images = [
  {
    id: '1x',
    src: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    titulo: 'el disenio es aerte',
  },
  {
    id: '2xx',
    src: 'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    titulo: 'Al fin nos encontramos un buen curso estoy emocionado por seeguir viendo cuanto puedo aprender',
  },
  {
    id: '3xxx',
    src: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    titulo: 'Deberia estudiar mas horas al diaaa',
  // eslint-disable-next-line comma-dangle
  }
// eslint-disable-next-line comma-dangle
];

const Home = () => {
  return (
    <div>
      <Slides
        interval={2000}
        images={images}
      />

      <div className='Landing_con'>

        <div className='Landing_Cart'>
          <div>
            <Zoom>
              <CartHome
                titulo='Mision'
                icon={Mision}
                contenido=''
              />
            </Zoom>
          </div>
          <div>
            <CartHome
              titulo='Vision'
              icon={Vision}
              contenido='lormmmmmm'
            />
          </div>
          <div>

            <CartHome
              titulo='Valores'
              icon={Valores}
              contenido='lorem loreeeeeeemmmm'
            />
          </div>

        </div>

        hola
      </div>
    </div>
  );

};
export default Home;
