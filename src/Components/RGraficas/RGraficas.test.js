import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import RGraficas from './RGraficas';

describe('Graficas', () => {
  //navbar-test

  it('Que mi componente tenga el texto que le mando', () => {
    const componene = render(
      <RGraficas content={{ title: 'Estudio', elements: [] }} />,
    );

    const t1 = screen.getByText('Estudio');

    expect(t1).toBeInTheDocument();
  });

  it('Que mi Graficas si se renderize correctamente', () => {
    render(<RGraficas content={{ title: 'Estudio', elements: [] }} />);
    expect(screen.queryByTestId('graficas-test')).not.toBeNull();
  });
});
