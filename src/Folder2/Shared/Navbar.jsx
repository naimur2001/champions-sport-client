import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
  const handleSignOut=()=>{
    logOut()
  .then(result=>{
// console.log('');
  })
  .catch(error=>{
    console.log(error);
  })
  }
  const navElement = 
    <>
      <li className=' font-medium'>
        <Link to="/">Home</Link>
      </li>
      <li className=' font-medium'>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li className=' font-medium'>
        <Link to="/classes">Classes</Link>
      </li>
      { user && (
        <>
          <li className=' font-medium'>
            <Link to="/dashboard">Dashboard</Link>
          </li>
         
        </>
      )}
     
    </>
  
  return (
    <div>
  <div className="navbar bg-gradient-to-r from-red-300 to-yellow-300">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52   ">
      {
        navElement
      }
      </ul>
    </div>
    <a className="btn btn-ghost font-mono text-xl">Champions Sport</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {
      navElement
     }
    </ul>
  </div>
  <div className="navbar-end">
    {user ? <span className='flex justify-between gap-1'>
      <span className=" flex">
          <img className='w-10 h-10 rounded-full' src={user.photoURL} />
    
        </span>  <span onClick={handleSignOut} className='  py-1 px-2 rounded-lg btn-ghost'>Logout</span>
    </span> : <Link to={'/login'}><button className='btn btn-ghost'>Login</button></Link>}
   
  </div>
</div>
    </div>
  );
};

export default Navbar;