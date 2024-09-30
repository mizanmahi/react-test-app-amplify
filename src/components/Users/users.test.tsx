import { render, screen } from '@testing-library/react';
import Users from './User';

it('sfsdf', () => {
  render(<Users />);
  const el = screen.getByRole('textbox', {
    name: 'Name',
  });
  const els = screen.getAllByRole('textbox');
  expect(els).toHaveLength(2);
  expect(el).toBeInTheDocument();
});
