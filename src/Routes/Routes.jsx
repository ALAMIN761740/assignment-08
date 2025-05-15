import { createBrowserRouter } from "react-router-dom";
import Root from '../Pages/Roots/Root';
import Errorpages from '../Pages/Errorpages/Errorpages';
import Home from '../Pages/Home/Home';
import LawyerDetails from '../Pages/LawyerDetails/LawyerDetails';
import Bookings from '../Pages/Bookings/Bookings';
import Blogs from '../Pages/Blogs';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpages />,
    children: [
      {
        index: true,
        loader: () => fetch('/MyData.json'),
        element: <Home />,
      },
      {
        path: "LawyerDetails/:LicenseNo",
        element: <LawyerDetails />,
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
    ],
  },
]);
