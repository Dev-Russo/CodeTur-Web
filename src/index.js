import React from 'react';
import jwt_decode from 'jwt-decode';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Login from './paginas/conta/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResetarSenha from './paginas/conta/resetarsenha';
import Dashboard from './paginas/admin/dashboards'
import Pacote from './paginas/admin/pacotes'
import naoencontrado from './paginas/naoencontrado'
import { ToastProvider } from 'react-toast-notifications'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const RotaPrivadaAdmin = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('token-codetur') !== null && jwt_decode(localStorage.getItem('token-codetur')).role === 'Admin' ?
        (<Component {...props} />) :
        (<Redirect to={{ pathname: '/', state: { from: props.location } }} />)
    }
  />
);

const rotas = (
  <Router>
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/resetar-senha' component={ResetarSenha} />
      <RotaPrivadaAdmin path='/admin' exact component={Dashboard} />
      <RotaPrivadaAdmin path='/admin/pacote' exact component={Pacote} />
      <Route path={naoencontrado} />
    </Switch>
  </Router>
)

ReactDOM.render(
  <ToastProvider>
    {rotas}
  </ToastProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
