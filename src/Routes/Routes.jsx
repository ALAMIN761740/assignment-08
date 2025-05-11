import React from 'react';

import {
  createBrowserRouter,
  
} from "react-router";
import Root from '../Pages/Roots/Root';
import Errorpages from '../Pages/Errorpages/Errorpages';
import Home from '../Pages/Home/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Errorpages></Errorpages>,
    children:[
      {
        index:true,
        path:"/",
        Component:Home,
      }
    ]
  },
]);