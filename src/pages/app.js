import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Inicio from './Inicio/Inicio';
import Contacto from './Contacto/Contacto';
import Logros from './Logros/Logros';
import Proyectos from './Proyectos/Proyectos';

import Navbar from '../Components/Navbar/Navbar';

const App = () => (
  <Router>
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
  </Router>
);

export default App;
