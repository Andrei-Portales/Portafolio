import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Navbar.scss';

import Drawer from '../Drawer/Drawer';

import menuIcon from '../../assets/icons/square.svg';

const Navbar = (props) => {
  const [state, setState] = useState({ isDrawerOpen: false });
  const history = useHistory();

  const openDrawer = () => {
    const { isDrawerOpen } = state;
    if (isDrawerOpen) {
      setState({ isDrawerOpen: false });
    } else {
      setState({ isDrawerOpen: true });
    }
  };

  const navigate = (path) => {
      setState({ isDrawerOpen: false });
    history.push(path);
  };

  return (
    <div>
      <div className="navbar">
        <div className="menu-icon" onClick={openDrawer}>
          <img src={menuIcon} alt="drawer" />
        </div>
        <div className="title-nav">Andrei Portales</div>
        <div className="items-nav">
          <ul>
            <li onClick={() => navigate('/')}>Inicio</li>
            <li onClick={() => navigate('/tecnologias')}>Tecnologias</li>
            <li onClick={() => navigate('/logros')}>Logros</li>
            <li onClick={() => navigate('/proyectos')}>Proyectos</li>
            <li onClick={() => navigate('/deportes')}>Deportes</li>
            <li onClick={() => navigate('/contacto')}>Contacto</li>
          </ul>
        </div>
      </div>

      {state.isDrawerOpen ? <Drawer navigate={navigate} openDrawer={openDrawer}/> : null}
    </div>
  );
};

export default Navbar;
