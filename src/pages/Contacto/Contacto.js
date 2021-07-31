import React from 'react';
import './Contacto.scss';

// iconos
import { contactItems } from '../../util/data';

const Contacto = () => {
  const sendEmail = () => {
    // fetch para enviar el mensaje
  };

  return (
    <div className="contacto">
      <div className="contacto-contenido">
        <div className="contacto-c">
          <h1 className="title-contacto">Contacto</h1>
          <div className="contacto-content">
            <div className="left-side-contacto">
              {contactItems.map((item) => (
                <div className="info-item-contact" key={item.title}>
                  <img src={item.icon} alt="location" />
                  <div>{item.title}</div>
                </div>
              ))}
            </div>

            <div className="right-side-contacto">
              <div className="ayuda-title">En que puedo ayudarte?</div>
              <div className="fields-conteiner">
                <div className="left-fields">
                  <input type="input" placeholder="Nombre Completo" />
                  <input type="input" placeholder="Correo" />
                  <input type="input" placeholder="Tema" />
                </div>

                <div className="right-fields">
                  <textarea placeholder="Mensaje" rows="7" />
                </div>
              </div>
              <div className="c-b-c">
                <div className="send-button-contact" onClick={sendEmail}>
                  Enviar mensaje
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
