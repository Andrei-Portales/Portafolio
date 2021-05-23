import React from 'react';
import './DrawerItem.scss';

const DrawerItem = (props) => {
  const { title, image, navigate } = props;

  return (
    <div className="drawer-item" onClick={navigate} data-testid="drawerItem-test">
      <img src={image} alt={title} />
      {title}
    </div>
  );
};

export default DrawerItem;
