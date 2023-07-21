// import usePHBState from '../../redux/selectors';
import { Outlet, Navigate } from 'react-router-dom';
import routes from '../../routes';

export function PubliceRoutes() {
  const name = 'Anna';
  // const {
  // user: { profile },
  // } = usePHBState();

  return name ? <Navigate to={routes.trips} /> : <Outlet />;
}
