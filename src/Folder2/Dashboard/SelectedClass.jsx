import React from 'react';
import useClassCart from '../../Folder1/Hooks/useClassCart';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Folder1/Hooks/useAxiosSecure';

const SelectedClass = () => {
  const [classcart,refetch]=useClassCart();
  
const [axiosSecure]=useAxiosSecure()
  const handleRemove=(id)=>{
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
      axiosSecure.delete(`/classcart/${id}`)
      .then(res=>{
        console.log(res.data);
        refetch()

        if (res.data.deletedCount>0) {

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
        <th></th>
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
          <button className="btn btn-warning btn-xs">Pay</button>
          <button onClick={()=>handleRemove(info._id)} className='btn btn-error btn-xs ml-2'>Remove</button>
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