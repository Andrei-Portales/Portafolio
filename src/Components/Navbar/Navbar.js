import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

import menuIcon from '../../assets/icons/square.svg';

const Navbar = (props) => {
  const [state, setState] = useState({ isDrawerOpen: false });

  const openDrawer = () => {
    const { isDrawerOpen } = state;
    if (isDrawerOpen) {
      setState({ isDrawerOpen: false });
    } else {
      setState({ isDrawerOpen: true });
    }
  };

  //fadeInLeft

  return (
    <div className="navbar">
      <div className="menu-icon">
        <img src={menuIcon} />
      </div>
      <div className="title-nav">Andrei Portales</div>
      <div className="items-nav">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/tecnologias">Tecnologias</Link>
          </li>
          <li>
            <Link to="/logros">Logros</Link>
          </li>
          <li>
            <Link to="/proyectos">Proyectos</Link>
          </li>
          <li>
            <Link to="/deportes">Deportes</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
