import { useSelector } from 'react-redux';

import { RootState } from './store';

export function useToken() {
  return useSelector((state: RootState) => state.user.token);
}
export function useUser() {
  return useSelector((state: RootState) => {
    return {
      name: state.user.name,
      email: state.user.email,
    };
  });
}

export function useRefreshing() {
  return useSelector((state: RootState) => state.isRefreshing);
}
