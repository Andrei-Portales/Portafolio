import React, { useState } from 'react';
import './Carrousel.scss';

import previusIcon from '../../assets/icons/left-arrow.svg';
import nextIcon from '../../assets/icons/right-arrow.svg';

const Carrousel = (props) => {
  const { images } = props;

  const [state, setState] = useState({ currentIndex: 0 });

  const next = () => {
    const { currentIndex } = state;

    if (currentIndex < images.length - 1) {
      setState({ currentIndex: currentIndex + 1 });
    } else {
      setState({ currentIndex: 0 });
    }
  };

  const previus = () => {
    const { currentIndex } = state;

    if (currentIndex > 0) {
      setState({ currentIndex: currentIndex - 1 });
    } else {
      setState({ currentIndex: images.length - 1 });
    }
  };

  return (
    <div className="carrousel-c">
      <div className="carrousel">
        <img
          key={state.currentIndex}
          className="carrousel-image"
          src={images[state.currentIndex]}
          alt="carrousel"
        />
        <div className="previus" onClick={previus}>
          <img src={previusIcon} alt="previus" />
        </div>
        <div className="next" onClick={next}>
          <img src={nextIcon} alt="next" />
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
