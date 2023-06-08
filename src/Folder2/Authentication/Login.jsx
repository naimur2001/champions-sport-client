import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import SocialLogin from './SocialLogin';
import { AuthContext } from './AuthProvider';


const Login = () => {
  const { signIn } = useContext(AuthContext)
  
  const location=useLocation();
  const navigate=useNavigate();
  const from=location?.state?.from?.pathname || '/'
  
  const [error,SetError]=useState('')
  const handleLogin = event => {

    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
    .then(result=>{
      const loggedUser =result.user;
        Swal.fire({
          position:'center',
          icon:"success",
          title: 'Login successful',
          timer: 1000
        })
    
      console.log(loggedUser);
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
     <img src="/src/assets/loginsignup poster.png" className='w-3/5 h-1/3 rounded-2xl' alt="" />
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
          <input type="password" placeholder="password" name='password' className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
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