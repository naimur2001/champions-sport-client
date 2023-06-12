
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './Authentication/AuthProvider';


const PrivateRoute = ({children}) => {
  const {user,loading}=useContext(AuthContext)
  const location=useLocation()
  if (load) {
    return <div className='flex justify-center items-center relative '>
    <div className="  absolute top-44 radial-progress animate-spin text-red-500" style={{ "--value": "70", "--size": "6rem", "--thickness": "2rem" }}></div>
  
    </div>
   }
 
   if (user) {

    return children;
   }
  

  return <>

  <Navigate to='/login' state={{from: location}} replace ></Navigate>

  </>
};

export default PrivateRoute;