import React from 'react';
import ReactDOM from 'react-dom';
import App from './frontend/routes/app';
// import Empresa from './frontend/routes/Empresa';
//import 'semantic-ui-css/semantic.min.css'; error de babel

//render recibe el componente y donde se empuja el componente
ReactDOM.render(<App />, document.getElementById('app'));
