import React, { Fragment } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import Inicio from './pages/Inicio/Inicio';
import Contacto from './pages/Contacto/Contacto';
import Logros from './pages/Logros/Logros';
import Proyectos from './pages/Proyectos/Proyectos';

import Navbar from './Components/Navbar/Navbar';

const App = () => (
  <Fragment>
    <Navbar />

    <div className="main-content">
      <Switch>
        <Route path="/contacto">
          <Contacto />
        </Route>

        <Route path="/proyectos">
          <Proyectos />
        </Route>

        <Route path="/logros">
          <Logros />
        </Route>

        <Route path="/">
          <Inicio />
        </Route>
      </Switch>
    </div>
  </Fragment>
);

export default App;

