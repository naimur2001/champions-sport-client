import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';

const ManageUser = () => {
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch('http://localhost:5000/users');
    return res.json();
  });

  

  const handleMakeAdmin_Instructor = (user) => {
    fetch(`http://localhost:5000/users/admin/${user?._id}`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Position Updated`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        
        }
      });
  };



  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          {users?.map((user, i) => (
            <tbody className="font-semibold" key={user._id}>
              <tr>
                <td>{i + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="">
                  <div className="mx-2">
                    <button
                      onClick={() => handleMakeAdmin_Instructor(user)}
                      className={`badge font-medium text-white badge-lg  badge-secondary
                      ${user?.role === 'instructor' ? 'disabled opacity-20' : '' }   `}
                  
                    >
                      Instructor
                    </button>
                    <button
                      onClick={() => handleMakeAdmin_Instructor(user)}
                      className={`badge font-medium text-black badge-lg mx-2 badge-warning 
                      ${user?.role === 'admin' ? 'disabled opacity-20' : '' }  `}
                  
                    >
                      Admin
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

export default ManageUser;