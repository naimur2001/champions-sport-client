import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {
  const {googleSignIn,updateUserProfile}=useContext(AuthContext);
  const location=useLocation();
  const navigate=useNavigate();
  const from=location?.state?.from?.pathname || '/'
  const handlegoogleSignIn=()=>{
    googleSignIn()
    .then(res=>{
      const loggedUser=res.user;
      console.log(loggedUser);
      const savedUser={name: loggedUser.displayName,email:loggedUser.email,url:loggedUser.photoURL}
        fetch('http://localhost:5000/users',{
          method:"POST",
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(savedUser)
        })
        .then(res=>res.json())
        .then(data=>{
          navigate(from,{replace: true})
        })
            
    })

  }
  return (
 <div className=''>
      <div className="divider"></div>
      <div className='w-full text-center mb-2'>
      <button onClick={handlegoogleSignIn} className="btn btn-circle btn-outline">
<FaGoogle></FaGoogle>
</button>
      </div>
    </div>
  );
};

export default SocialLogin;