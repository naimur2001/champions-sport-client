import React from 'react';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MyClass = () => {
  const {user}=useContext(AuthContext)
  const token=localStorage.getItem("jwt-token")
  const { data:certainClass  = [], refetch } = useQuery(['classes'], async () => {
    const res = await fetch(`https://champion-sports-server.vercel.app/classes/${user.email}`
    , {headers : {
      authorization: `bearer ${token}`
    }}
    );
    return res.json();
  }); 



  return (
    <div>
      <motion.h1
  className="my-2 font-mono text-5xl text-center"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
>
  My Class
</motion.h1>

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
        <td className='font-medium'> {info.feedback || 'n/a'} </td>
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
