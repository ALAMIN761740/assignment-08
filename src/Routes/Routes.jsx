import React from 'react';

import {
  createBrowserRouter,
  
} from "react-router";
import Root from '../Pages/Roots/Root';
import Errorpages from '../Pages/Errorpages/Errorpages';
import Home from '../Pages/Home/Home';
import LawyerDetails from '../Pages/LawyerDetails/LawyerDetails';
import Bookings from '../Pages/Bookings/Bookings';
import Blogs from '../Pages/Blogs';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Errorpages></Errorpages>,
    children:[
      {
        index:true,
        loader:()=>fetch('MyData.json'),
        path:"/",
        Component:Home,
      },
      {
        path: "/lawyer/:id",
        element: <LawyerDetails></LawyerDetails>,
      },
      {
        path: "/bookings",
        element: <Bookings></Bookings>
      },
      {
        path:"/Blogs",
        element: <Blogs></Blogs>,
      }
    ]
  },
]);