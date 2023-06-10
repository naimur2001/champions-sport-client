import React from 'react';
// import useClasses from '../../Folder1/Hooks/useClasses';

const ClassCard = ({cl}) => {
  // const {
  //   name,url,seat,price,status,instructor_name,instructor_email,
  // }=cl;
  // console.log(cl);
  return (
    <div>
<div className="card w-80 h-96 glass">
  <figure><img src={cl.url}  alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{cl.name}</h2>
    <h2 className="badge badge-secondary">{cl.instructor_name}</h2>
    <div className='flex justify-between'>  <h2 className="font-medium">Available Seats - {cl.seat}</h2><h2 className="font-medium">{cl.price} USD</h2> </div>
    <div className="card-actions justify-end">
      <button className="btn btn-warning">Select now!</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default ClassCard;