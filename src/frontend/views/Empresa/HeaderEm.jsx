import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const HeaderEm = () => {
  return (
    <div>
      <Header className='header'>
        <div className='logo' />
        <Menu theme='dark' mode='horizontal'>
          <Menu.Item key='1'>nav 1</Menu.Item>
          <Menu.Item key='2'>nav 2</Menu.Item>
          <Menu.Item key='3'>nav 3</Menu.Item>
        </Menu>
      </Header>
    </div>
  );
};

export default HeaderEm;

