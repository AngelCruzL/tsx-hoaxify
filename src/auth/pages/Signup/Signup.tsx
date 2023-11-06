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
      <h1 className="text-center mt-4 mb-5">Sign Up</h1>

      <form onSubmit={onSubmit} className="card p-4 mx-auto col-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Display Name
          </label>

          <input
            className="form-control"
            placeholder="Your display name"
            name="name"
            id="name"
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>

          <input
            className="form-control"
            placeholder="Your username"
            name="username"
            id="username"
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>

          <input
            className="form-control"
            placeholder="Your password"
            type="password"
            id="password"
            name="password"
            onChange={onChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="passwordConfirmation" className="form-label">
            Password Confirmation
          </label>

          <input
            className="form-control"
            placeholder="Confirm your password"
            type="password"
            id="passwordConfirmation"
            name="passwordConfirmation"
            onChange={onChange}
          />
        </div>

        <div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};
