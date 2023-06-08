import React from 'react';
import useUser from '../../Folder1/Hooks/useUser';

const ManageUser = () => {
  const [users]=useUser();
    // update
    const handleMakeAdmin=(user)=>{
      console.log(user);
             fetch(`http://localhost:5000/users/admin/${user._id}`,{
              method: "PATCH"
             })
             .then(res=>res.json())
             .then(data=>{
              console.log(data)
              if (data.modifiedCount) {
                refetch()
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: `${user.name} is now Admin`,
                  showConfirmButton:false,
                  timer: 1500
                })
              }
             })
    }
  return (
    <div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Actions</th>
        <th></th>
      </tr>
    </thead>
 {
  users?.map((user,i)=>
    <tbody className='font-semibold'>
    {/* row 1 */}
    <tr>
    <td >
      {i+1}
    </td>
      
      <td>
        {user.name}
        
      </td>
      <td>{user.email}</td>
      <td className=''>
<div className=''>
<button className="badge font-medium text-black badge-lg mx-1 badge-secondary">Instructor</button>
<button onClick={()=>handleMakeAdmin(user)} className="badge font-medium text-black badge-lg mx-1 badge-warning">Admin</button>
</div>          
       
      </td>
    </tr>
  
  </tbody>
    )
 }  
  </table>
</div>
    </div>
  );
};

export default ManageUser;