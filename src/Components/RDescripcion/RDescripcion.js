import React from 'react';
import './RDescripcion.scss';


const RDescripcion = (props) => {
  const { title, elements } = props.content;

  return (
    <div className="sectionRD">
      <div className="title-RD">{title}</div>

      <div className="ele-RD">
        {elements.map((item) => {
          return (
            <div className="container-RD" key={item.doTitle}>
              <div className="mainD-side">
                <div className="time-RD">{item.time}</div>
                <div className="place-RD">{item.place}</div>
                <img src={item.logo} alt="logo" className="logo-RD" />
              </div>

              <div className="desc-side">
                <div className="titleT-RD">{item.doTitle}</div>
                <div className="description-RD">{item.doDescription}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RDescripcion;
