import { NavLink } from 'react-router-dom';
import routes from '../../routes';
// import navStyle from './Navigation.module.css';

export const Navigation = () => {
  return (
    <ul className='nav-list'>
      <li key='NavigationRegister' className='nav-listItem'>
        <NavLink to={routes.register} className='nav-link'>
          Register
        </NavLink>
      </li>
      <li key='NavigationLogin' className='nav-listItem'>
        <NavLink to={routes.login} className='nav-link'>
          Login
        </NavLink>
      </li>
    </ul>
  );
};
