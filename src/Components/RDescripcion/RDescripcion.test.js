import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import RDescripcion from './RDescripcion';

describe('Descripcion ', () => {
  //navbar-test

  it('Que mi componente tenga el texto que le mando', () => {
    const componene = render(
      <RDescripcion content={{ title: 'Estudio', elements: [] }} />
    );

    const t1 = screen.getByText('Estudio');

    expect(t1).toBeInTheDocument();
  });

  it('Que mi Descripcion si se renderize correctamente', () => {
    render(<RDescripcion content={{ title: 'Estudio', elements: [] }} />);
    expect(screen.queryByTestId('RD-test')).not.toBeNull();
  });
});
