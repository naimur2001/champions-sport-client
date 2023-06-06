import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../Folder2/Shared/Navbar';

const Main = () => {
  const location=useLocation();
  // console.log(location);
  const noHeaderFooter=location.pathname.includes('*')
  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar> }
      <Outlet></Outlet>
    </div>
  );
};

export default Main;