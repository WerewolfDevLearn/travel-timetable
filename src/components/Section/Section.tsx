import { AppHeader } from '../AppHeader/AppHeader';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Loader } from '../Loader/Loader';
// import usePHBState from '../../redux/selectors';

import 'react-toastify/dist/ReactToastify.css';

export const Section = () => {
  // const { isLoading } = usePHBState();
  const isLoading = false;

  return (
    <div className='container'>
      <AppHeader />
      <ToastContainer />
      <Outlet />
      {isLoading && <Loader />}
    </div>
  );
};
