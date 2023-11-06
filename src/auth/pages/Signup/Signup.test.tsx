import { expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
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

  describe('Interactions', () => {
    const changeEvent = (content: string) => {
      return {
        target: {
          value: content,
        },
      };
    };

    const actions = {
      onSubmit: vi.fn(),
    };

    it('should set the displayName input value into state', async () => {
      render(<SignupPage />);
      const displayNameInput: HTMLInputElement =
        screen.getByPlaceholderText('Your display name');
      const inputValue = 'my-display-name';

      fireEvent.change(displayNameInput, changeEvent(inputValue));

      expect(displayNameInput.value).toBe(inputValue);
    });

    it('should set the username input value into state', async () => {
      render(<SignupPage />);
      const usernameInput: HTMLInputElement =
        screen.getByPlaceholderText('Your username');
      const inputValue = 'some-username';

      fireEvent.change(usernameInput, changeEvent(inputValue));

      expect(usernameInput.value).toBe(inputValue);
    });

    it('should set the password input value into state', async () => {
      render(<SignupPage />);
      const passwordInput: HTMLInputElement =
        screen.getByPlaceholderText('Your password');
      const inputValue = 'Secret123';

      fireEvent.change(passwordInput, changeEvent(inputValue));

      expect(passwordInput.value).toBe(inputValue);
    });

    it('should set the passwordConfirmation input value into state', async () => {
      render(<SignupPage />);
      const passwordConfirmationInput: HTMLInputElement =
        screen.getByPlaceholderText('Confirm your password');
      const inputValue = 'Secret123';

      fireEvent.change(passwordConfirmationInput, changeEvent(inputValue));

      expect(passwordConfirmationInput.value).toBe(inputValue);
    });

    it('should execute the "onSubmit" action when the submit button is pressed', () => {
      render(<SignupPage actions={actions} />);
      const signupButton = screen.getByRole('button', { name: 'Sign Up' });

      fireEvent.click(signupButton);

      expect(actions.onSubmit).toHaveBeenCalled();
      expect(actions.onSubmit).toHaveBeenCalledOnce();
    });
  });
});
