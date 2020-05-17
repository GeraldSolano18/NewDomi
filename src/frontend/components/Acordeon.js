/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useRef } from 'react';
import propTypes from 'prop-types';
import arrow from '../assets/static/rigth.svg';

import '../assets/styles/components/Acordeon.scss';

const Acordeon = ({ titulo, contenido, bgColor }) => {
  const [isExpanded, setExpanded] = useState(false);
  const contentRef = useRef();

  const toggle = () => setExpanded(!isExpanded);

  const animation = {
    background: bgColor,
    padding: '0.5em 1em',
    borderRadius: '6px',
    width: '600px',
    color: '#000',
    fontSize: '18px',
    fontFamily: 'Montserrat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    userSelect: 'none',
    cursor: 'pointer',

  };
  const aniContenido = {
    height: isExpanded ? contentRef.current.scrollHeight : '0px',
    overflow: 'hidden',
    width: '550px',
    transition: 'all 350ms easy-out',
    padding: isExpanded ? '1' : '0 0.5em',
    margin: '0px',
  };
  const imgStyles = {
    width: '25px',
    transition: 'transform 250ms ease',
    transform: isExpanded ? 'rotate(90deg)' : 'rotate(0)',
  };
  const martop = {
    marginTop: '10px',
  };
  return (
    <div style={martop}>
      <div style={animation} onClick={toggle}>
        <span>
          {titulo}
        </span>
        <img src={arrow} alt='arrow' style={imgStyles} />
      </div>
      <div style={aniContenido} ref={contentRef}>
        {contenido}
      </div>

    </div>
  );
};

Acordeon.defaultProps = {
  titulo: '',
  contenido: '',
  bgColor: '#523da5',
};

Acordeon.propTypes = {
  titulo: propTypes.string,
  contenido: propTypes.string,
  bgColor: propTypes.string,
};

export default Acordeon;

