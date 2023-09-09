import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../redux/store';
import userOps from '../../redux/user/userOps';

interface CustomElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}
interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}
export function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onSubmit = (event: React.FormEvent<CustomForm>) => {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    const data = {
      email: email.value,
      password: password.value,
    };
    dispatch(userOps.login(data));
  };
  const navTo = () => {
    navigate('/register');
  };
  return (
    <>
      <div className="form-container">
        <h1 className="form-heading">Login</h1>
        <form className="form" onSubmit={onSubmit}>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="form-input"
          />
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
          ></input>
          <div className="login-buttons-wrp">
            <button type="submit" className="nav-button">
              Login
            </button>
            <button type="button" className="nav-button" onClick={() => navTo()}>
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
