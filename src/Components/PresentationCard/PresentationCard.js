import React from 'react';
import './PresentationCard.scss';

import imagen from '../../assets/images/f5.jpeg';

const PresentationCard = () => (
  <div className="presentation-card" data-testid="presentationcard-test">
    <div className="presentation-imageC">
      <div className="image-container">
        <img src={imagen} alt="perfil" />
      </div>
    </div>
    <div className="presentation-infoC">
      <div>
        <h1 className="name-pres">Andrei Portales Okrassa</h1>
        <p className="desc-pres">
          Soy un programador nacido en Guatemala. Tengo 20 años de edad.
          Actualmente estoy en el tercer año de Ingeneria en Ciencias de la
          Computacion y TI en la Universidad del Valle de Guatemala. Me apasiona
          estar probando cosas nuevas e investigar sobre lo que me llama la
          atencion, en especial cosas de tecnologia. Tengo todas las habilidades
          para crear nuevas herramientas de software. Actualmente me especializo
          en crear aplicaciones moviles y web.
        </p>

        {/* <div className="buttons-pres">
                <div className="proyects-button">
                    Proyectos
                </div>
                <div className="contact-button">
                    Contacto
                </div>
            </div> */}
      </div>
    </div>
  </div>
);

export default PresentationCard;
