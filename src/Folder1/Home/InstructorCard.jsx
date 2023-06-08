import React from 'react';

const InstructorCard = ({instructor}) => {
  return (
    <div>
      <div className="card w-72 h-90 my-4 bg-blue-100 shadow-xl">
  <figure className="">
    <img src={instructor.image} alt="instructor" className="rounded-xl w-56 h-56 object-cover " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{instructor.name}</h2>
    <p>{instructor.sport} Trainer</p>
    <div className="card-actions">
      <button className="btn btn-primary">More</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default InstructorCard;