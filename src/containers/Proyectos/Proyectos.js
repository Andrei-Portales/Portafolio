import React from 'react';
import './Proyectos.scss';
import ProyectosWeb from '../../Components/ProyectosWeb/ProyectosWeb';

import { dataProyectosWeb, dataProyectosAndroid } from '../../util/data';

const Logros = () => (
  <div className="proyectos">
    <div className="proyectos-contenido">
      <h1 className="title-proyectos">Proyectos</h1>
      <ProyectosWeb data={dataProyectosWeb} />
      <ProyectosWeb data={dataProyectosAndroid} />
    </div>
  </div>
);

export default Logros;
