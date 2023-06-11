import React from 'react';
// import useClasses from '../../Folder1/Hooks/useClasses';

const ClassCard = ({cl}) => {
  const seat=parseInt(cl.seat);

  




  // console.log(seat);
  return (
    <div>
<div className="card w-80 h-96 glass">
  <figure><img src={cl.url}  alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{cl.name}</h2>
    <h2 className="badge badge-secondary">{cl.instructor_name}</h2>
    <div className='flex justify-between'>  <h2 className="font-medium">Available Seats - {seat}</h2><h2 className="font-medium">{cl.price} USD</h2> </div>
    <div className="card-actions justify-end">
      <button className={seat === 0 ? 'btn btn-warning disabled: opacity-60' : 'btn btn-warning'}>  Select now!</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default ClassCard;