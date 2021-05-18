import React from 'react';
import './Inicio.scss';

import Carrousel from '../../Components/Carrousel/Carrousel';

import {homeCarrousel} from '../../util/data';

const Home = (props) => {
    return <div className="inicio">
        <Carrousel images={homeCarrousel}/>
    </div>;
}

export default Home;