import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../Folder1/Hooks/useAdmin';

const Dashboard = () => {
const [role]=useAdmin()
console.log(role);
  return (
<div>
<div className="drawer lg:drawer-open rounded-lg">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col ">

    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open SideBar</label>
  <Outlet></Outlet>
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-64 h-full bg-slate-400 text-base-content">
  {role === 'admin' ? (
    <>
      <li className='font-medium'>
        <NavLink to="/dashboard/manageclass">Manage Class</NavLink>
      </li>
      <li className='font-medium'>
        <NavLink to="/dashboard/manageuser">Manage User</NavLink>
      </li>
    </>
  ) : role === 'instructor' ? (
    <>
      <li className='font-medium'>
        <NavLink to="/dashboard/addclass">Add a Class</NavLink>
      </li>
      <li className='font-medium'>
        <NavLink to="/dashboard/myclass">My Classes</NavLink>
      </li>
    </>
  ) : (
    <>
      <li className='font-medium'>
        <NavLink to="/dashboard/selectclass">My Selected Class</NavLink>
      </li>
      <li className='font-medium'>
        <NavLink to="/dashboard/enrollclass">My Enrolled Class</NavLink>
      </li>
    </>
  )}
  <div className="divider"></div>
  <li className='font-medium'>
    <NavLink to={'/'}>Home</NavLink>
  </li>
</ul>

  </div>
</div>
</div>
  );
};

export default Dashboard;