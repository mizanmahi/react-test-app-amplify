import { render, screen } from '@testing-library/react';
import PrimaryButton from './PrimaryButton';

describe('PrimaryButton()', () => {
  it('Renders correctly!', () => {
    // Arrange
    render(<PrimaryButton />);
    const el = screen.getByText(/Click to Add/i);
    expect(el).toBeInTheDocument();
  });
  it('Renders correctly with the name provided', () => {
    // Arrange
    const action = 'Post';
    render(<PrimaryButton action={action} />);
    const el = screen.getByText(new RegExp(`Click to ${action}`, 'i'));
    expect(el).toBeInTheDocument();
  });
});
