import { ChangeEvent, FC, ReactElement, useState } from 'react';
import { SignupForm } from '@auth/types';

type Actions = {
  onSubmit: () => void;
};

type Props = {
  actions?: Actions;
};

export const SignupPage: FC<Props> = ({ actions }): ReactElement => {
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

  const onSubmit = () => {
    actions?.onSubmit();
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
        <button type="submit" onClick={onSubmit}>
          Sign Up
        </button>
      </div>
    </>
  );
};
