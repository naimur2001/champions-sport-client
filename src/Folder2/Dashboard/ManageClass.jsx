import React from 'react';
import useClasses from '../../Folder1/Hooks/useClasses';
import Swal from 'sweetalert2';

const ManageClass = () => {
  const [Classes,refetch]=useClasses();

const handleApproved=(cl)=>{
  console.log(cl);
  fetch(`http://localhost:5000/classes/approve/${cl?._id}`, {
    method: 'PATCH',
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.modifiedCount) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Status Updated`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      
      }
    });
}
const handleDenied=()=>{}
const handleFeedback=()=>{}
  return (
 <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Seats</th>
              <th>price</th>
              <th>status</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          {Classes?.map((cl, i) => (
            <tbody className="font-semibold" key={cl._id}>
              <tr>
                <td>{i + 1}</td>
                <td>
                <div className="mask mask-squircle ">
                <img src={cl.url} alt="class" className='w-12 h-12' />
              </div>
                </td>
                <td>{cl.name}</td>
                <td>{cl.instructor_name}
                <br/>
                <span  className='badge badge-success'>{cl.instructor_email}</span>
                </td>
                <td>
                  {cl.seat}
                </td>
                <td>
                  ${cl.price} 
                </td>
                <td className='text-purple-700'>
                  {cl.status}
                </td>
                <td className="">
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => handleApproved(cl)}
                      className={`badge font-medium text-white badge-lg  badge-accent
                     ${cl.status === 'approved' ? 'disabled opacity-25' : ''} `}
                  
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleDenied(cl)}
                      className={`badge font-medium text-black badge-lg mx-2 badge-warning 
                     `}
                  
                    >
                      Deny
                    </button>
                    <button
                      onClick={() => handleFeedback(cl)}
                      className={`badge font-medium text-black badge-lg mx-2 badge-accent
                       `}
                  
                    >
                      Feedback
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManageClass;