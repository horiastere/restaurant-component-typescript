import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

import Navbar from './Navbar';

test('Navbar is rendered with title', () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );

  const title = screen.getByTestId('title');
  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent('Blue Margarita');
})
