import React from 'react';

const InstructorCard = ({instructor}) => {
  return (
    <div>
      <div className="card w-72 h-96 my-4 bg-blue-100 shadow-xl">
  <figure className="">
    <img src={instructor.image} alt="instructor" className="rounded-xl w-56 h-52  " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-mono">{instructor.name}</h2>
    <p className='text-lg'>{instructor.sport} Trainer</p>
    <div className="card-actions">
      <button className="btn bg-blue-200 hover:bg-blue-300">See Classes</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default InstructorCard;