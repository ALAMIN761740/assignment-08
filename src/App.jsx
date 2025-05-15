import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { LoadingProvider } from './Components/Loader/LoadingContext';
import { router } from './Routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <LoadingProvider>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </LoadingProvider>
  );
}

export default App;
