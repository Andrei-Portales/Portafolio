import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import RTags from './RTags';

describe('Tags', () => {
  it('Que mi componente tenga el texto que le mando', () => {
    const componene = render(
      <RTags content={{ title: 'Tags', tags: ['Windows', 'Mac'] }} />
    );

    const t1 = screen.getByText('Tags');
    const t2 = screen.getByText('Windows');
    const t3 = screen.getByText('Mac');

    expect(t1).toBeInTheDocument();
    expect(t2).toBeInTheDocument();
    expect(t3).toBeInTheDocument();
  });

  it('Que mi tags si se renderize correctamente', () => {
    render(<RTags content={{ title: 'Tags', tags: ['Windows', 'Mac'] }} />);
    expect(screen.queryByTestId('rtags-test')).not.toBeNull();
  });
});
