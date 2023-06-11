import React from 'react';
import useClasses from '../../Folder1/Hooks/useClasses';

const ManageClass = () => {
  const [Classes,refetch]=useClasses();

const handleApproved=()=>{}
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
                <div className="mask mask-squircle w-12 h-12">
                <img src={cl.url} alt="class" />
              </div>
                </td>
                <td>{cl.name}</td>
                <td>{cl.instructor_name}
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
                      className={`badge font-medium text-white badge-lg  badge-secondary
                        `}
                  
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
                      onClick={() => handleFeedback(user)}
                      className={`badge font-medium text-black badge-lg mx-2 badge-info
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