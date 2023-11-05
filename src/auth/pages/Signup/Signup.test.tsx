import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { SignupPage } from './Signup.tsx';

describe('Signup', () => {
  describe('Layout', () => {
    it('should render the heading of the signup page', () => {
      render(<SignupPage />);

      expect(screen.getByRole('heading', { name: 'Sign Up' })).toBeDefined();
    });
  });
});
