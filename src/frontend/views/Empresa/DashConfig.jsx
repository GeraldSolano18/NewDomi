import React from 'react';
import SideBar from '../../components/SideBar';
import DashMenu from '../../components/DashboardMenu';

import '../../assets/styles/views/Empresa/DashConfig.scss';

const DashConfig = () => {
  return (
    <div className='pruebaGrid'>
      <div className='sidebar'>
        <SideBar />
      </div>

      <div className='contenedormenu'>
        <DashMenu />
      </div>

      <div className='contenedorhm'>
        
        <div className='containerForm'>
          <div className='colform'>
            <input type='text' placeholder='Nombre del negocio' className='datoscaja' />
            <input type='text' placeholder='Descripcion del negocio' className='datoscaja' />
            <input type='text' placeholder='Logo' className='datoscaja' />
          </div>
          <div className='colform'>
            <input type='text' placeholder='Links de redes sociales' className='datoscaja' />
            <input type='text' placeholder='Horario de atencion' className='datoscaja' />
            <input type='text' placeholder='Ubicacion' className='datoscaja' />
          </div>

        </div>

      </div>
    </div>
  );
};

export default DashConfig;
