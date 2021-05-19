import React from 'react';
import './Deportes.scss';

import Natacion from '../../Components/Natacion/Natacion';

const Deportes = (props) => {
  return (
    <div className="deportes">
      <div className="deportes-contenido">
          <Natacion />
      </div>
    </div>
  );
};

export default Deportes;
