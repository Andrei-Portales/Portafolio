import React from 'react';
import './Conocimientos.scss';

import RDescripcion from '../RDescripcion/RDescripcion';
import RGraficas from '../RGraficas/RGraficas';
import RTags from '../RTags/RTags';

import {educacion, experiencia, codeSkills, languages, conoTags} from '../../util/data';

const Conocimientos = () => {
  return (
    <div className="conocimientos-c">
      <h1 className="title-c">Resumen</h1>
      <div className="c-content">
        <div>
          <RDescripcion content={educacion}/>
          <RDescripcion content={experiencia}/>
        </div>

        <div>
            <RGraficas content={codeSkills} />
            <RGraficas content={languages} />
            <RTags content={conoTags}/>
        </div>
      </div>
    </div>
  );
};

export default Conocimientos;
