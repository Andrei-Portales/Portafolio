import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Navbar.scss';

import Drawer from '../Drawer/Drawer';

import menuIcon from '../../assets/icons/square.svg';

const Navbar = () => {
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
    <div data-testid="navbar-test">
      <div className="navbar">
        <div className="menu-icon" onClick={openDrawer}>
          <img src={menuIcon} alt="drawer" />
        </div>
        <div className="title-nav">Andrei Portales</div>
        <div className="items-nav">
          <ul>
            <div onClick={() => navigate('/')}>Inicio</div>
            <div onClick={() => navigate('/logros')}>Logros</div>
            <div onClick={() => navigate('/proyectos')}>Proyectos</div>
            {/* <div onClick={() => navigate('/contacto')}>Contacto</div> */}
          </ul>
        </div>
      </div>

      {state.isDrawerOpen ? (
        <Drawer navigate={navigate} openDrawer={openDrawer} />
      ) : null}
    </div>
  );
};

export default Navbar;
