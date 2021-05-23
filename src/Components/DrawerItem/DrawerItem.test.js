import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import DrawerItem from './DrawerItem';

describe('DrawerItem', () => {
  //navbar-test

  it('Que mi drawer item tenga el texto que le mando', () => {
    const drawerItem = render(
      <DrawerItem title="Inicio" image="" navigate={() => {}} />
    );

    const t1 = screen.getByText('Inicio');
    expect(t1).toBeInTheDocument();
  });

  it('Que mi drawer item si se renderize correctamente', () => {
    render(<DrawerItem title="Inicio" image="" navigate={() => {}} />);
    expect(screen.queryByTestId('drawerItem-test')).not.toBeNull();
  });
});
