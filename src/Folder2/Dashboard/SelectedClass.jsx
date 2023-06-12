import React from 'react';
import useClassCart from '../../Folder1/Hooks/useClassCart';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Folder1/Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const SelectedClass = () => {
  const [classcart,refetch]=useClassCart();
  
const [axiosSecure]=useAxiosSecure()
const handleRemove = (info) => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Remove it!'
  }).then((result) => {
    if (result.isConfirmed) {
      axiosSecure.delete(`/classcart/${info._id}`)
        .then(res => {
          console.log(res.data);
          refetch();

          if (res.data.deletedCount > 0) {
            

            Swal.fire(
              'success',
              'Class removed',
              'Removed'
            )
          }
        })
    }
  })
}


  return (
    <div>
      <motion.h1
  className="my-2 font-mono text-5xl text-center"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
Selected Class
</motion.h1>
      <div className="overflow-x-auto">
  <table className="table font-mono">
    {/* head */}
    <thead>
      <tr>
      
        <th>#</th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
        <th><Link to={'/dashboard/payment'}> <button className="btn btn-warning btn-xs">Pay</button></Link></th>
      </tr>
    </thead>
    <tbody>

     {
      classcart?.map((info,i)=>
      
         <tr key={i}>
      <td className='font-medium'>
        {i+1}
      </td>
        <td>
 
                <img src={info.classUrl} className='w-12 h-12 rounded-2xl' alt="Avatar" />
              
        </td>
        <td>
        {info.className}
        </td>
        <td className='font-medium'>$ {info.classPrice}</td>
        <th>
         
          <button onClick={()=>handleRemove(info)} className='btn btn-error btn-xs ml-2'>Remove</button>
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

export default SelectedClass;
// fetch(`https://champion-sports-server.vercel.app/classes/${info.classId}`)
//               .then(res => res.json())
//               .then(classData => {
//                 const updatedSeat = parseInt(classData.seat) + 1; 
//                 fetch(`https://champion-sports-server.vercel.app/classes/inc/${info.classId}`, {
//                   method: "PATCH",
//                   headers: {
//                     "Content-Type": "application/json",
//                   },
//                   body: JSON.stringify({ seat: parseInt(updatedSeat) }),
//                 })
//                   .then(res => res.json())
//                   .then(data => {
//                     console.log("Seat updated:", data);
//                   });
//               });