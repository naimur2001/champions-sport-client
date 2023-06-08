import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
<div>
<div className="drawer lg:drawer-open rounded-lg">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open SideBar</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li className=' font-medium'>
        <Link to="/addclass">Add Class</Link>
      </li>
      <li className=' font-medium'>
        <Link to="/addclass">Add Class</Link>
      </li>

    </ul>
  
  </div>
</div>
</div>
  );
};

export default Dashboard;