// import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Profile from './profile/Profile';
import { Feedback } from './feedback/Feedback';
import { PhoneBook } from './phonebook/PhoneBook';
import { Gallary } from './gallery/Gallary';

export const App = () => {
  return (
    <>
      <Gallary />
      <Profile />
      <Feedback />
      <PhoneBook />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};
