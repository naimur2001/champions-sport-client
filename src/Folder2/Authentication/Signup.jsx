import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { useForm } from 'react-hook-form';
import SocialLogin from './SocialLogin';
import Swal from 'sweetalert2';


const Signup = () => {
  const {createUser,updateUserProfile}=useContext(AuthContext);
  const navigate=useNavigate();
// use hook form 
  const { register, handleSubmit,reset,watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    createUser(data.email,data.password)
    .then(result=> {
      const user=result.user;
      // console.log(user);
   updateUserProfile(data.name,data.url)
   .then(()=>{
    const savedUser={name: data.name,email:data.email,url:data.url}
fetch('https://champion-sports-server.vercel.app/users',{
  method:"POST",
  headers: {
    'content-type' : 'application/json'
  },
  body: JSON.stringify(savedUser)
})
.then(res=>res.json())
.then(data=>{
  if (data.insertedId) {
    reset();
    Swal.fire({
      position:'center',
      icon:"success",
      title: 'Info Added',
      timer: 1000
    })
  }
})
    Swal.fire(
      'Account Created',
      'success'
    )
   });
   navigate('/')
    } )
    .catch(error=>{
      console.log(error.message);
    })
  };

 

  return (
 
    <div>
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className='ml-40'>
          <img src="/src/assets/loginsignup poster.png" className='w-3/5 h-1/3 rounded-2xl' alt="" />
        </div>
        <div className="card lg:w-2/3 w-full max-w-2xl shadow-2xl bg-base-100 ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" {...register('name', { required: true })} placeholder="name" name="name" className="input input-bordered" />
              {errors.name && <span className="text-red-600">Name field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" {...register('email', { required: true })} placeholder="email" name="email" className="input input-bordered" />
              {errors.email && <span className="text-red-600">Email field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input type="text" {...register('url', { required: true })} placeholder="Photo URL" name="url" className="input input-bordered" />
              {errors.url && <span className="text-red-600">Photo field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" {...register('password', {
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
              })} name="password" placeholder="password" className="input input-bordered" />
              {errors.password?.type === 'required' && <p className="text-red-600">Password field is required</p>}
              {errors.password?.type === 'pattern' && (
                <p className="text-red-600">
                  Password must have at least 6 characters, one uppercase letter, one lowercase letter, one digit, and one special character.
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                {...register('confirmPassword', {
                  required: true,
                  validate: value => value === watch('password') || "Passwords don't match"
                })}
                name="confirmPassword"
                placeholder="Confirm password"
                className="input input-bordered"
              />
              {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword.message}</p>}
            </div>
  
            <div className="form-control mt-3">
              <input className="btn btn-error" type="submit" value={'Submit'} />
            </div>
            <p className='mx-1 text-center'><small>Have an Account? <Link to={'/login'} className='text-yellow-600 text-base'>LogIn</Link></small></p>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  </div>
  
    
  );
};

export default Signup;