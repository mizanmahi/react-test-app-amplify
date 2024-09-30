import { render, screen } from '@testing-library/react';
import Greet from './Greet';

describe('Greet()', () => {
   it('Renders correctly!', () => {
      // Arrange
      render(<Greet />);
      const el = screen.getByText('Hello People!');
      expect(el).toBeVisible();
   });
});
