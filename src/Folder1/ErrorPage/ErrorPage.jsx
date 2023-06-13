import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className=' py-24'>
    <Link className='btn btn-outline' to={'/'}>{`<`} Back To Home</Link>
    <div className='flex justify-center items-center'>
       <img src="./error.gif "
       className='w-1/3 h-1/3  rounded-full animate-pulse'
       alt="" />
        </div>
       </div> 
  );
};

export default ErrorPage;