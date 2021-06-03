import React from 'react';
import './Logros.scss';

import LogroSection from '../../Components/LogroSection/LogroSection';
import { certificados, diplomasUniversidad, participacionCert } from '../../util/data';

const Logros = () => (
  <div className="logros">
    <div className="logros-contenido">
      <LogroSection content={certificados} />
      <LogroSection content={diplomasUniversidad} />
      <LogroSection content={participacionCert} />
    </div>
  </div>
);

export default Logros;
