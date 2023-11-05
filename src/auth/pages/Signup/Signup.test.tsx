import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { SignupPage } from './Signup.tsx';

describe('Signup', () => {
  describe('Layout', () => {
    it('should render the heading of the signup page', () => {
      render(<SignupPage />);
      const pageHeading = screen.getByRole('heading', { name: 'Sign Up' });

      expect(pageHeading).toBeDefined();
    });

    it('should render the input for display name', () => {
      render(<SignupPage />);
      const displayNameInput = screen.getByPlaceholderText('Your display name');

      expect(displayNameInput).toBeDefined();
    });

    it('should render the input for username', () => {
      render(<SignupPage />);
      const usernameInput = screen.getByPlaceholderText('Your username');

      expect(usernameInput).toBeDefined();
    });

    it('should render the input for password', () => {
      render(<SignupPage />);
      const passwordInput = screen.getByPlaceholderText('Your password');

      expect(passwordInput).toBeDefined();
    });

    it('should render the input for password as password input type', () => {
      render(<SignupPage />);
      const passwordInput = screen.getByPlaceholderText('Your password');

      expect(passwordInput.getAttribute('type')).toBe('password');
    });

    it('should render the input for password confirmation', () => {
      render(<SignupPage />);
      const passwordConfirmationInput = screen.getByPlaceholderText(
        'Confirm your password',
      );

      expect(passwordConfirmationInput).toBeDefined();
    });

    it('should render the input for password confirmation as password input type', () => {
      render(<SignupPage />);
      const passwordConfirmationInput = screen.getByPlaceholderText(
        'Confirm your password',
      );

      expect(passwordConfirmationInput.getAttribute('type')).toBe('password');
    });

    it('should render the submit button', () => {
      render(<SignupPage />);
      const signupButton = screen.getByRole('button', { name: 'Sign Up' });

      expect(signupButton).toBeDefined();
      expect(signupButton.getAttribute('type')).toBe('submit');
    });
  });
});
