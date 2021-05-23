import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import PresentationCard from './PresentationCard';

describe('PresentationCard ', () => {
  //navbar-test

  it('Que mi PresentationCard  tenga el texto que le mando', () => {
    const presentationCard = render(<PresentationCard />);

    const t1 = screen.getByText('Andrei Portales Okrassa');

    expect(t1).toBeInTheDocument();
  });

  it('Que mi PresentationCard si se renderize correctamente', () => {
    render(<PresentationCard />);
    expect(screen.queryByTestId('presentationcard-test')).not.toBeNull();
  });
});
