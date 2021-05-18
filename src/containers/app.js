import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Inicio from './Inicio/Inicio';

import Navbar from '../Components/Navbar/Navbar';

const App = (props) => {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
      <Switch>
        <Route path="/">
          <Inicio />
        </Route>
      </Switch>
      </div>
     
    </Router>
  );
};

export default App;
