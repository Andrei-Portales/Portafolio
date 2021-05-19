import React from 'react';
import './RGraficas.scss';

const RGraficas = (props) => {
  const { content } = props;
  const { title, elements } = content;

  return (
    <div className="sectionRG">
      <div className="title-RG">{title}</div>

      <div className="ele-RG">
        {elements.map((item) => {
          return (
            <div key={item.title} className="progress-container">
              <div className="headers-progress">
                <div>{item.title}</div>
                <div>{item.progress * 100}%</div>
              </div>

              <progress
                value={`${item.progress}`}
                max="1"
                className="progress-bar"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RGraficas;
