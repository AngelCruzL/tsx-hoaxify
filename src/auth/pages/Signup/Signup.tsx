import { ChangeEvent, FC, ReactElement, useState } from 'react';
import { SignupForm } from '@auth/types';

export const SignupPage: FC = (): ReactElement => {
  const [signUpForm, setSignUpForm] = useState<SignupForm>({
    name: '',
    username: '',
    password: '',
    passwordConfirmation: '',
  });

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSignUpForm({
      ...signUpForm,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <h1>Sign Up</h1>

      <div>
        <input
          placeholder="Your display name"
          name="name"
          onChange={onChange}
        />
      </div>

      <div>
        <input
          placeholder="Your username"
          name="username"
          onChange={onChange}
        />
      </div>

      <div>
        <input
          placeholder="Your password"
          type="password"
          name="password"
          onChange={onChange}
        />
      </div>

      <div>
        <input
          placeholder="Confirm your password"
          type="password"
          name="passwordConfirmation"
          onChange={onChange}
        />
      </div>

      <div>
        <button type="submit">Sign Up</button>
      </div>
    </>
  );
};
