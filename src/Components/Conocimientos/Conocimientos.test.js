import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Conocimientos from './Conocimientos';

describe('Conocimientos', () => {

  it('QUe mi componente conocimientos este renderizado correctamente', () => {
    render(<Conocimientos />);
    expect(screen.queryByTestId('conocimientos-test')).not.toBeNull();
  });
});
