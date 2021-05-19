import React from 'react';
import './Inicio.scss';

// import Carrousel from '../../Components/Carrousel/Carrousel';
// import { homeCarrousel } from '../../util/data';

import PresentationCard from '../../Components/PresentationCard/PresentationCard';
import Conocimientos from '../../Components/Conocimientos/Conocimientos';
// import Carrousel from '../../Components/Carrousel/Carrousel';

const Home = (props) => {
  return (
    <div className="inicio">
      {/* <Carrousel images={homeCarrousel}/> */}
      <div className="inicio-contenido">
        <PresentationCard />
        <Conocimientos />
      </div>
    </div>
  );
};

export default Home;
