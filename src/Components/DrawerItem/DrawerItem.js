import React from 'react';
import './DrawerItem.scss';

const DrawerItem = (props) => {
  const { title, image, navigate } = props;

  return (
    <li className="drawer-item" onClick={navigate}>
      <img src={image} alt={title} />
      {title}
    </li>
  );
};

export default DrawerItem;
