import React from 'react';
// import useClasses from '../../Folder1/Hooks/useClasses';

import { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MyClass = () => {
  const {user}=useContext(AuthContext)
  const { data:certainClass  = [], refetch } = useQuery(['classes'], async () => {
    const res = await fetch(`http://localhost:5000/classes/${user.email}`);
    return res.json();
  }); 



  return (
    <div>
            <div className="overflow-x-auto">
  <table className="table font-mono">
    {/* head */}
    <thead>
      <tr>
      
        <th>#</th>
        <th>Name</th>
        <th>Status</th>
        <th>Total Enrolled Studen</th>
        <th>Feedback</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>

     {
      certainClass?.map((info,i)=>
      
         <tr key={i}>
      <td className='font-medium'>
        {i+1}
      </td>
      
        <td>
        {info.name}
        </td>
        <td className='font-medium '> {info.status}</td>
        <td className='font-medium'> {0 || info.seat}</td>
        <td className='font-medium'> n/a </td>
        <th>
          
          <button  className='btn btn-error btn-xs ml-2'>Update</button>
        </th>
      </tr>
        
      )
     }
    
    </tbody>

   
    
  </table>
</div>
    </div>
  );
};

export default MyClass;