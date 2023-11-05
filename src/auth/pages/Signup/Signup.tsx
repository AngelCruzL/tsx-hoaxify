import { FC, ReactElement } from 'react';

export const SignupPage: FC = (): ReactElement => {
  return (
    <>
      <h1>Sign Up</h1>

      <div>
        <input placeholder="Your display name" />
      </div>

      <div>
        <input placeholder="Your username" />
      </div>

      <div>
        <input placeholder="Your password" type="password" />
      </div>

      <div>
        <input placeholder="Confirm your password" type="password" />
      </div>

      <div>
        <button type="submit">Sign Up</button>
      </div>
    </>
  );
};
