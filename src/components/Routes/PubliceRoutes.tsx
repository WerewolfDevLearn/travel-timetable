import { Outlet, Navigate } from 'react-router-dom';

import { useToken } from '../../redux/selectors';

import routes from '../../routes';

export default function PubliceRoutes() {
  const token = useToken();
  return token ? <Navigate to={routes.trips} /> : <Outlet />;
}
