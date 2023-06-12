import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import usePayments from '../../Folder1/Hooks/usePayments';
import { AuthContext } from '../Authentication/AuthProvider';
import useClasses from '../../Folder1/Hooks/useClasses';
// import { data } from 'autoprefixer';
const EnrolledClass = () => {
  const [paydata]=usePayments();
  const {user}=useContext(AuthContext);
  const [classes]=useClasses()
const [mail,setMail]=useState('')

useEffect(() => {
  const selectedMail = paydata?.filter(data => data?.email === user?.email);
  console.log(selectedMail);
  setMail(selectedMail);
}, []);

const [enrollClasses, setEnrollClasses] = useState([]);

useEffect(() => {
  if (mail && mail.length > 0) {
    const enrolledClasses = classes?.filter((data) =>
      mail.flatMap((m) => m?.cartItemsIds || []).some((cid) => cid === data._id)
    );
    setEnrollClasses(enrolledClasses);
  }
}, [mail, classes]);


  return (
    <div>
          <motion.h1
  className="my-2 font-mono text-5xl text-center"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 2 }}
  transition={{ duration: 0.5 }}
>
Enrolled Class
</motion.h1>

<div>
<div className="overflow-x-auto">
  <table className="table font-mono">
    {/* head */}
    <thead>
      <tr>
      
        <th>#</th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
    
      </tr>
    </thead>
   {  <tbody>

     {
      enrollClasses?.map((info,i)=>
      
         <tr key={i}>
      <td className='font-medium'>
        {i+1}
      </td>
        <td>
 
                <img src={info.url} className='w-12 h-12 rounded-2xl' alt="Avatar" />
              
        </td>
        <td>
        {info.name}
        </td>
        <td className='font-medium'>$ {info.price} paid</td>
       
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

export default EnrolledClass;