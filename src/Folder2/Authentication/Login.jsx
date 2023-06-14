import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import SocialLogin from './SocialLogin';
import { AuthContext } from './AuthProvider';


const Login = () => {
  const { signIn } = useContext(AuthContext)
  
  const location=useLocation();
  const navigate=useNavigate();
  const from=location?.state?.from?.pathname || '/'
  
  const [bool,setBool]=useState(false);
 

 const handleShowPassword = () => {
  setBool(!bool);
};

  const [error,SetError]=useState('')
  const handleLogin = event => {

    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signIn(email, password)
    .then(result=>{
      const loggedUser =result.user;
        Swal.fire({
          position:'center',
          icon:"success",
          title: 'Login successful',
          timer: 1000
        })
    
      // console.log(loggedUser);
      form.reset();
      navigate(from)
    })
    .catch(error=>{
     
    if (error.code === 'auth/missing-password)') {
       SetError('Password Field Empty');
     }
else if (error.code === 'auth/wrong-password') {
       SetError('Incorrect password');
     }
     else if (error.code === 'auth/user-not-found') {
      SetError('Incorrect email')
     } 
     else if (error.code === 'auth/invalid-email') {
      SetError('Invalid email')
     } 
     else {
       SetError(error.message);
     }
    })
      

  }
  return (
    <div>
  <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row ">
    <div className="">
     <img src="./login.png" className='w-3/5 h-1/3 rounded-2xl' alt="" />
    </div>
    <div className="card mr-24 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <form onSubmit={handleLogin} >
    <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={`${bool ? 'text' : 'password'}`} placeholder="password" name='password' className="input input-bordered" />
          <label className="label">

          <button
          type='button'       
        onClick={handleShowPassword} className='btn btn-xs flex justify-center items-center gap-2' >
          {`${bool ? 'Hide Password' : 'Show Password'}`} <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 ' fill='gray' viewBox="0 0 512 512" ><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM192 368H320c8.8 0 16 7.2 16 16s-7.2 16-16 16H192c-8.8 0-16-7.2-16-16s7.2-16 16-16zm32-144c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-26 15.5-48.4 37.8-58.4c-3.7 5.2-5.8 11.6-5.8 18.4c0 17.7 14.3 32 32 32s32-14.3 32-32c0-6.9-2.2-13.2-5.8-18.4C208.5 175.6 224 198 224 224zm128 64c-35.3 0-64-28.7-64-64c0-26 15.5-48.4 37.8-58.4c-3.7 5.2-5.8 11.6-5.8 18.4c0 17.7 14.3 32 32 32s32-14.3 32-32c0-6.9-2.2-13.2-5.8-18.4C400.5 175.6 416 198 416 224c0 35.3-28.7 64-64 64z"/></svg></button>
           
          </label>
        </div>
        <p className='text-center text-red-500'>{error}</p>
        <div className="form-control mt-6">
          <input className='btn btn-warning' type="submit" value={'Login'} />
        </div>
      </div>
<p className=' mx-1 text-center'><small>New Here <Link to={'/signup'} className='text-yellow-600 
        text-base
        '>SignUp</Link></small></p>
     
    </form>
<SocialLogin></SocialLogin>
    </div>
  </div>
</div>
    </div>
  );
};

export default Login;