import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../views/Layout';
import SobreRed from '../views/SobreRed';
import Comercios from '../views/Comercios';
import Emprededores from '../views/Emprendedores';
import Control from '../views/ControlInventario';
import Desicion from '../views/Desicion';
import Aumenta from '../views/AumentaVentas';
import contactanos from '../views/Contactanos';

import Home from '../views/Home';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/sobreRedStore' component={SobreRed} />
        <Route exact path='/comercios' component={Comercios} />
        <Route exact path='/emprededores' component={Emprededores} />
        <Route exact path='/control' component={Control} />
        <Route exact path='/desicion' component={Desicion} />
        <Route exact path='/aumenta' component={Aumenta} />
        <Route exact path='/contactanos' component={contactanos} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
export default App;
