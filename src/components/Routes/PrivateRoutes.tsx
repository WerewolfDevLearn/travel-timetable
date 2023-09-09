import { Outlet, Navigate } from 'react-router-dom';

import { useToken } from '../../redux/selectors';

import routes from '../../routes';

export default function PrivateRoutes() {
  const token = useToken();

  return token ? <Outlet /> : <Navigate to={routes.login} />;
}
