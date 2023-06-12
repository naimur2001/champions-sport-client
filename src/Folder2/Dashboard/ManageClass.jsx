import React, { useState } from 'react';
import useClasses from '../../Folder1/Hooks/useClasses';
import Swal from 'sweetalert2';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

const ManageClass = () => {
  const [Classes, refetch] = useClasses();

  const handleApproved = (cl) => {
    console.log(cl);
    fetch(`https://champion-sports-server.vercel.app/classes/approve/${cl?._id}`, {
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
  };

  const handleDenied = (cl) => {
    console.log(cl);
    fetch(`https://champion-sports-server.vercel.app/classes/denied/${cl?._id}`, {
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
  };
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [feeddata,setFeedData]=useState(null)
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(modalData);
    // setFeedData(data);
    fetch(`https://champion-sports-server.vercel.app/classes/feedback/${modalData}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
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
  };


  const handleModalFunction1 = (cl) => {
    setModalData(cl._id);
    // Set the modal data
    console.log(modalData);
    
    setShowModal(true);

  };




  return (
    <div>
      <motion.h1
        className="my-2 font-mono text-5xl text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Manage Class
      </motion.h1>
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
            </tr>
          </thead>
          {Classes?.map((cl, i) => (
            <tbody className="font-semibold" key={cl._id}>
              <tr>
                <td>{i + 1}</td>
                <td>
                  <div className="mask mask-squircle ">
                    <img src={cl.url} alt="class" className="w-12 h-12" />
                  </div>
                </td>
                <td>{cl.name}</td>
                <td>
                  {cl.instructor_name}
                  <br />
                  <span className="badge badge-success">{cl.instructor_email}</span>
                </td>
                <td>{cl.seat}</td>
                <td>${cl.price}</td>
                <td className="text-purple-700">{cl.status}</td>
                <td className="">
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => handleApproved(cl)}
                      className={`badge font-medium text-white badge-lg  badge-neutral ${
                        cl.status !== 'pending' ? 'disabled opacity-25' : ''
                      }`}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleDenied(cl)}
                      className={`badge font-medium text-white badge-lg mx-2 badge-error ${
                        cl.status !== 'pending' ? 'disabled opacity-25' : ''
                      }`}
                    >
                      Deny
                    </button>
                    <button
                      onClick={() => handleModalFunction1(cl)}
                      className="font-medium text-white badge-lg  badge badge-primary"
                    >
                      feedback
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      {/* Modal */}
      {showModal && (
        <div>
          <input type="checkbox" id="my_modal_6" className="modal-toggle" checked={showModal} />
          <div className="modal">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="modal-box w-1/3">
                <h3 className="font-bold text-lg mb-2">Feedback</h3>
                <input
                  type="text"
                  
                  {...register('feedback', { required: true })}
                  placeholder="Write..."
                  name="feedback"
                  className="input input-bordered"
                />
                <div className="modal-action">
                  <input className="btn btn-error" type="submit" value={'Send'} />
                  <label htmlFor="my_modal_6" className="btn" onClick={() => setShowModal(false)}>
                    Close!
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClass;
