import { useNavigate } from 'react-router-dom';
export function LoginForm() {
  const navigate = useNavigate();
  const navTo = () => {
    navigate('/register');
  };
  return (
    <>
      <div className='form-container'>
        <h1 className='form-heading'>Login</h1>
        <form className='form'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='text'
            id='email'
            name='email'
            placeholder='Enter your email'
            className='form-input'
          />
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            className='form-input'
            placeholder='Enter your password'
          ></input>
          <div className='login-buttons-wrp'>
            <button type='submit' className='nav-button'>
              Login
            </button>
            <button type='button' className='nav-button' onClick={() => navTo()}>
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
