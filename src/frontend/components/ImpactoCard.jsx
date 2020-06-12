import React from 'react';
import propTypes from 'prop-types';

const ImpactoCard = ({ title, content, claseCss }) => {
  return (
    <>
      <div className={claseCss}>
        <p className='two_title'>{title}</p>
        <p className='two_content'>
          {content}
        </p>
        <button type='button' className='two_button'> VER MÁS</button>
      </div>

    </>
  );
};

ImpactoCard.defaultProps = {
  title: '',
  content: '',
  claseCss: '',

};

ImpactoCard.propTypes = {
  title: propTypes.string,
  content: propTypes.string,
  claseCss: propTypes.string,
};

export default ImpactoCard;
