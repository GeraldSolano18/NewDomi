import React from 'react';
import SideBar from '../../components/SideBar';
import DashMenu from '../../components/DashboardMenu';

import '../../assets/styles/views/Empresa/Dashboard.scss';

const Dashboard = () => {
  return (
    <div className='pruebaGrid'>
      <div className='sidebar'>
        <SideBar />
      </div>

      <div className='contenedormenu'>
        <DashMenu />
      </div>

      <div className='contenedorhm'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae magni itaque totam aspernatur voluptates fuga laborum natus obcaecati, dignissimos animi labore enim corrupti, necessitatibus facilis nesciunt magnam, reprehenderit quod fugit!
      </div>
    </div>
  );

};

export default Dashboard;
