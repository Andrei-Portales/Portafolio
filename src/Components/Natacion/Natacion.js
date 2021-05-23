import React from 'react';
import './Natacion.scss';

const Natacion = () => (
  <div className="natacion-c">
    <h1 className="title-n">Natacion</h1>
    <div className="n-content">
      <video width="750" height="500" controls>
        <source src="https://drive.google.com/uc?id=1Ku9OM1oY-fEQYR382mhu2MsRbr0X1lef" type="video/mp4" />
      </video>
    </div>
  </div>
);

export default Natacion;
