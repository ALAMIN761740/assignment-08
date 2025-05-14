

import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
// অন্য component গুলো import করো

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* তোমার routes এখানে */}
      </Routes>

      {/* ✅ ToastContainer একবারই ব্যবহার করতে হয় */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
}

export default App;
