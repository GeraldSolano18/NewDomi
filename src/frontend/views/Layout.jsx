import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header';
// import Footer from '../components/Footer';

const Layout = withRouter(({ children, location }) => (
  <div className='App'>
    <Header />
    {children}
    {/* <Footer /> */}
  </div>
));

export default Layout;
