import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Inicio from './Inicio/Inicio';

import Navbar from '../Components/Navbar/Navbar';

const App = (props) => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/">
          <Inicio />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
