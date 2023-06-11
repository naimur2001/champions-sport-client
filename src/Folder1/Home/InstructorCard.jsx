import React, { useContext } from 'react';
import { AuthContext } from '../../Folder2/Authentication/AuthProvider';

const InstructorCard = ({instructor}) => {
  const {user}=useContext(AuthContext);

  const localTheme=localStorage.getItem('theme');
  return (
    <div>
      <div className={`card w-72 h-96 my-4 bg-blue-100 shadow-xl  ${localTheme === 'dark' ? 'text-black' : ''} `}>
  <figure className="">
    <img src={(instructor.url)  } alt="instructor" className="rounded-xl w-56 h-52  " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-mono">{instructor.name}</h2>
    <p className='text-lg'>{instructor.email}</p>
    <div className="card-actions">
      <button className={`btn bg-blue-200 hover:bg-blue-300  ${localTheme === 'dark' ? 'text-black' : ''}  `}>See Classes</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default InstructorCard;