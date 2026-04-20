import { render, screen } from '@testing-library/react';
import VayuGuard from '../VayuGuard';

test('renders dashboard tab', () => {
  render(<VayuGuard />);
  expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
});
