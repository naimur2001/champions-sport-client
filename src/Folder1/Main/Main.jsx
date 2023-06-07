import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../Folder2/Shared/Navbar';
import Footer from '../../Folder2/Shared/Footer';

const Main = () => {
  const location=useLocation();
  // console.log(location);
  const noHeaderFooter=location.pathname.includes('*')
  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar> }
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;