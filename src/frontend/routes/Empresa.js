import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dash from '../views/Empresa/Dashboard';
import DashConfig from '../views/Empresa/DashConfig';

const Empresa = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Dash} />
      <Route exact path='/configinitial' component={DashConfig} />

    </Switch>
  </BrowserRouter>
);
export default Empresa;
