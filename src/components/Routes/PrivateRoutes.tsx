// import usePHBState from '../../redux/selectors';
import { Outlet, Navigate } from 'react-router-dom';
import routes from '../../routes';

export function PrivateRoutes() {
  const name = 'Anna';
  // const {
  //   user: { profile },
  // } = usePHBState();

  return name ? <Outlet /> : <Navigate to={routes.login} />;
}
