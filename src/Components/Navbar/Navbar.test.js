import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Navbar from './Navbar';

describe('Button', () => {
  //navbar-test

  it('Que mi navbar tenga las opciones', () => {
    const navbar = render(<Navbar />);

    const t1 = screen.getByText('Inicio');
    const t2 = screen.getByText('Logros');
    const t3 = screen.getByText('Proyectos');

    const t5 = screen.getByText('Contacto');

    expect(t1).toBeInTheDocument();
    expect(t2).toBeInTheDocument();
    expect(t3).toBeInTheDocument();
    expect(t5).toBeInTheDocument();
  });

  it('Que mi navbar este definido', () => {
    render(<Navbar />);
    expect(screen.queryByTestId('navbar-test')).not.toBeNull();
  });
});
