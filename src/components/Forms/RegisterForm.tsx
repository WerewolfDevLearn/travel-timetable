import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../redux/store';
import userOps from '../../redux/user/userOps';

interface CustomElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
}
interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

export function RegisterForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onSubmit = (event: React.FormEvent<CustomForm>) => {
    event.preventDefault();
    const { name, email, password } = event.currentTarget.elements;
    const data = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    dispatch(userOps.register(data));
  };
  const navTo = () => {
    navigate('/login');
  };
  return (
    <>
      <div className="form-container">
        <h1 className="form-heading">Register</h1>
        <form className="form" onSubmit={onSubmit}>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="form-input"
          />
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
              Register
            </button>
            <button type="button" className="nav-button" onClick={() => navTo()}>
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
