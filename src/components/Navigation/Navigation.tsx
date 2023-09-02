import { NavLink } from 'react-router-dom';

import routes from '../../routes';

export const Navigation = () => {
  return (
    <ul className="nav-list">
      <li key="NavigationRegister" className="nav-listItem">
        <NavLink to={routes.register} className="nav-link">
          Register
        </NavLink>
      </li>
      <li key="NavigationLogin" className="nav-listItem">
        <NavLink to={routes.login} className="nav-link">
          Login
        </NavLink>
      </li>
      <li key="NavigationtoTrips" className="nav-listItem">
        <NavLink to={routes.trips} className="nav-link">
          Trips
        </NavLink>
      </li>
      <li key="NavigationtoHome" className="nav-listItem">
        <NavLink to={routes.home} className="nav-link">
          Home
        </NavLink>
      </li>
    </ul>
  );
};
