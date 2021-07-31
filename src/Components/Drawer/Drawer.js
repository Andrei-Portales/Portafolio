import React from 'react';
import './Drawer.scss';

import DrawerItem from '../DrawerItem/DrawerItem';

// iconos drawer
import homeIcon from '../../assets/icons/home.svg';
// import tecIcon from '../../assets/icons/tecnology.svg';
import rewardIcon from '../../assets/icons/medal.svg';
import projIcon from '../../assets/icons/project.svg';
// import contactIcon from '../../assets/icons/contact.svg';

const Drawer = (props) => {
  const { openDrawer, navigate } = props;

  return (
    <div className="drawer" data-testid="drawer-test">
      <div className="drawer-content">
        <DrawerItem
          title="Inicio"
          image={homeIcon}
          navigate={() => navigate('/')}
        />
        <DrawerItem
          title="Logros"
          image={rewardIcon}
          navigate={() => navigate('/logros')}
        />
        <DrawerItem
          title="Proyectos"
          image={projIcon}
          navigate={() => navigate('/proyectos')}
        />
        {/* <DrawerItem
          title="Contacto"
          image={contactIcon}
          navigate={() => navigate('/contacto')}
        /> */}
      </div>

      <div className="drawer-fondo" onClick={openDrawer} />
    </div>
  );
};

export default Drawer;
