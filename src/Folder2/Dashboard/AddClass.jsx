import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const AddClass = () => {
  const {user}=useContext(AuthContext)
  const sts='pending';

  const handleAddData=(event)=>{
    event.preventDefault();
    const form=event.target;
    const name=form.name.value;
    const url=form.url.value;
    const seat=form.seat.value;
    const price=form.price.value;
    const status=sts;
    const instructor_name=user.displayName
    const instructor_email=user.email
    const classInfo={
      name,url,seat,price,status,instructor_name,instructor_email,
    }
    console.log(classInfo);
    fetch(`http://localhost:5000/classes`,{
      method: "POST",
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(classInfo)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if (data.insertedId) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your data has been saved',
          background:'cyan',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }


  return (
    <div>
       <div>
       <motion.h1
  className="my-2 font-mono text-5xl text-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  Add a Class Information
</motion.h1>

  <div className='bg-slate-200 p-2 rounded-lg'>
      <form onSubmit={handleAddData} >

<div className='grid grid-cols-2 gap-4'>
<div className="form-control">
          <label className="label">
            <span className="label-text text-gray-600 text-lg font-semibold">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-600 text-lg font-semibold">Class Photo</span>
          </label>
          <input type="text" name='url' placeholder="Photo-url" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-600 text-lg font-semibold">Instructor Name</span>
          </label>
          <input type="text"  defaultValue={user?.displayName} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-600 text-lg font-semibold">Instructor Email</span>
          </label>
          <input type="text"  defaultValue={user?.email} className="input input-bordered" />
        </div>

      <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-600 text-lg font-semibold">Available Seat</span>
          </label>
          <input type="text" name='seat' placeholder="Available seat" className="input input-bordered" />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-600 text-lg font-semibold">Price</span>
          </label>
          <input type="text" name='price' placeholder="Price" className="input input-bordered" />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-600 text-lg font-semibold">Status</span>
          </label>
          <input type="text"  defaultValue={sts} className="input input-bordered" />
        </div>
    
 
</div>

     <div className="form-control mt-3">
          <input type="submit" value={"Add"} className='btn bg-slate-400 border-0 text-gray-700 text-xl hover:text-lime-700 ' />
        </div>
      </form>
     
    </div>
      </div>
    </div>
  );
};

export default AddClass;