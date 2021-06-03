import React, { useState } from 'react';
import './LogroSection.scss';

import dropDownIcon from '../../assets/icons/down-arrow.svg';
import upArrow from '../../assets/icons/upload.svg';

const LogroSection = (props) => {
  const { content } = props;
  const { title, items } = content;

  const [fullScreen, setFullScreen] = useState(false);
  const [imageFull, setImageFull] = useState(null);

  const [showContent, setShowContent] = useState(false);

  const openFullScreen = (image) => {
    setImageFull(image);
    setFullScreen(true);
  };

  const changeShow = () => setShowContent(!showContent);

  return (
    <div className="logros-l" data-testid="logros-test">
      <div className="title-container" onClick={changeShow}>
        <h1 className="title-l">{title}</h1>
        <img
          key={showContent ? 'showcontent' : 'hideContent'}
          src={showContent ? upArrow : dropDownIcon}
          alt="dropDownIcon"
        />
      </div>

      {showContent ? (
        <div className="l-content">
          {items.map((item) => (
            <div
              key={item.title}
              className="certificado-item"
              onClick={() => openFullScreen(item.image)}
            >
              <img src={item.image} alt="certificado" />
              <div>{item.title}</div>
            </div>
          ))}
        </div>
      ) : null}

      {fullScreen ? (
        <div>
          <div
            className="background-full"
            onClick={() => setFullScreen(false)}
          />
          <div className="image-full" onClick={() => setFullScreen(false)}>
            <img src={imageFull} alt="certificado" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default LogroSection;
