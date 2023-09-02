import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import CustomLoader from '../CustomLoader/CustomLoader';

import { AppHeader } from '../AppHeader/AppHeader';
// import usePHBState from '../../redux/selectors';

import 'react-toastify/dist/ReactToastify.css';

export const Section = () => {
  // const { isLoading } = usePHBState();
  const isLoading = false;

  return (
    <>
      <AppHeader />
      <ToastContainer />
      {isLoading ? <CustomLoader /> : <Outlet />}
    </>
  );
};
