import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../Folder1/Hooks/useAdmin';
import { AuthContext } from '../Authentication/AuthProvider';

const AdminRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  const [role,roleLoading] = useAdmin();
  const location = useLocation();

  if(loading || roleLoading ){
      return <div className='flex justify-center items-center relative'>
        <div className=" absolute top-44  radial-progress animate-spin " style={{ "--value": "70", "--size": "4rem", "--thickness": "2px" }}></div>
      </div>

  }

  if (user && role==='admin') {
      return children;
  }
  return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;