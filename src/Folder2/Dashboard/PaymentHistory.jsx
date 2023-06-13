import React, { useContext, useEffect, useState } from 'react';
import usePayments from '../../Folder1/Hooks/usePayments';
import { AuthContext } from '../Authentication/AuthProvider';
import useClasses from '../../Folder1/Hooks/useClasses';
import { motion } from 'framer-motion';

const PaymentHistory = () => {
  const [paydata]=usePayments();
  const {user}=useContext(AuthContext);
  const [classes]=useClasses()
const [mail,setMail]=useState([])

useEffect(() => {
  const selectedMail = paydata?.filter(data => data?.email === user?.email);
  console.log(selectedMail);
  setMail(selectedMail);
}, []);
console.log(mail);




  return (
    <div>
          <motion.h1
  className="my-2 font-mono text-5xl text-center"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 2 }}
  transition={{ duration: 0.5 }}
>
Payment History
</motion.h1>

<div>
<div className="overflow-x-auto">
  <table className="table font-mono">
    {/* head */}
    <thead>
      <tr>
      
        <th>#</th>
        <th>Email</th>
        <th>Date</th>
        <th>Transaction Id</th>
    
      </tr>
    </thead>
   {  <tbody>

     {
      mail?.map((info,i)=>
      
         <tr key={i}>
      <td className='font-semibold '>
        {i+1}
      </td>
        <td className='font-semibold'>
        {info.email}
            
              
        </td>
        <td className='font-semibold text-blue-600'>
        {info.date}
        </td>
        <td className='font-semibold text-green-600'> {info.transactionId}</td>
       
      </tr>
        
      )
     }
    
    </tbody>}

   
    
  </table>
</div>
</div>
    </div>
  );
};

export default PaymentHistory;