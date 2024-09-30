import { render, screen } from '@testing-library/react';
import App from './App';

describe('App()', () => {
   it('Renders hello world', () => {
      // Arrange
      render(<App />);
      const el = screen.getByRole('heading', {
         level: 1,
      });
      expect(el).toHaveTextContent('Hello mizan');
   });

   // test('should render hello world', () => {
   //   render(<App />);
   //   const element = screen.getByText('Hello World');
   //   expect(element).toBeInTheDocument();
   // });
});
