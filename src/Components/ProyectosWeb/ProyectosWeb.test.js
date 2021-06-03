import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ProyectosWeb from './ProyectosWeb';

const dataProyectosWeb = {
  title: 'Proyectos Web',
  items: [
    {
      title: 'Clone Amazon Prime',
      description:
        'Este clone se realizo en la clase de Tecnologias Web. Este fue parte de un proyecto que habia que realizar en la clase. Este sirvio para concretar los conocimientos de React y estilos con css.',
      link: 'http://stw-uvg.site:3169',
      image: '',
    },
    {
      title: 'Calendario Japones',
      description:
        'Este pagina se realizo para el departamente de internalizacion de la Universidad del Valle de Guatemala. El fin de esta pagina era poder mostrar los diferentes calendario japoneses. Para esto se utilizo React.',
      link: 'https://andrei-portales.github.io/calendario-japon',
      image: '',
    },
  ],
};

describe('PresentationCard ', () => {
  //navbar-test

  it('Que mi Componente tenga el texto renderizado', () => {
    const element = render(<ProyectosWeb data={dataProyectosWeb} />);

    const t1 = screen.getByText('Proyectos Web');
    const t2 = screen.getByText('Clone Amazon Prime');
    const t3 = screen.getByText('Calendario Japones');

    expect(t1).toBeInTheDocument();
    expect(t2).toBeInTheDocument();
    expect(t3).toBeInTheDocument();
  });

  it('Que mi componente si se renderize correctamente', () => {
    render(<ProyectosWeb data={dataProyectosWeb} />);
    expect(screen.queryByTestId('proyectoweb-test')).not.toBeNull();
  });
});
