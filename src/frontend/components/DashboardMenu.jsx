import React from 'react';
import { Link } from 'react-router-dom';
import config from '../assets/static/config1.svg';
import user from '../assets/static/user.svg';

import '../assets/styles/components/DashboardMenu.scss';

const DashboardMenu = () => {
  return (
    <div className='container_master'>
      <Link className='nojoda' to='/configinitial'>
        <button type='button' className='Dash_Buttons'>
          <img className='config' src={config} alt='' />
          <div className='buttontext'>Configuracion incial</div>
        </button>
      </Link>

      <div className='nojoda'>
        <button type='button' className='Dash_Buttons'>
          <img className='config' src={user} alt='' />
          <div className='buttontext'>Usuarios del sistema</div>
        </button>
      </div>

      <div className='nojoda'>
        <button type='button' className='Dash_Buttons'>
          <img className='config' src={config} alt='' />
          <div className='buttontext'>Usuarios del sistema</div>
        </button>
      </div>

    </div>
  );

};

export default DashboardMenu;
