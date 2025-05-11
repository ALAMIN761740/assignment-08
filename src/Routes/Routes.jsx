import React from 'react';

import {
  createBrowserRouter,
  
} from "react-router";
import Root from '../Pages/Roots/Root';
import Errorpages from '../Pages/Errorpages/Errorpages';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Errorpages></Errorpages>
  },
]);