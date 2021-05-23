import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Drawer from './Drawer';

describe('Drawer', () => {
  //navbar-test

  it('Que mi drawer tenga el texto que le mando', () => {
    const drawer = render(<Drawer />);

    const t1 = screen.getByText('Inicio');
    const t2 = screen.getByText('Logros');
    const t3 = screen.getByText('Proyectos');
    const t4 = screen.getByText('Deportes');
    const t5 = screen.getByText('Contacto');

    expect(t1).toBeInTheDocument();
    expect(t2).toBeInTheDocument();
    expect(t3).toBeInTheDocument();
    expect(t4).toBeInTheDocument();
    expect(t5).toBeInTheDocument();
  });

  it('Que mi drawer si se renderize correctamente', () => {
    render(<Drawer />);
    expect(screen.queryByTestId('drawer-test')).not.toBeNull();
  });
});
