import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Inicio from './Inicio/Inicio';
import Deportes from './Deportes/Deportes';
import Contacto from './Contacto/Contacto';

import Navbar from '../Components/Navbar/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <div className="main-content">
      <Switch>
        <Route path="/deportes">
          <Deportes />
        </Route>

        <Route path="/contacto">
          <Contacto />
        </Route>

        <Route path="/">
          <Inicio />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
