import React from 'react';
// import useClasses from '../../Folder1/Hooks/useClasses';

const ClassCard = ({cl}) => {
 
  return (
    <div>
<div className="card w-80 glass">
  <figure><img src={cl.image}  alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{cl.name}</h2>
    <h2 className="badge badge-secondary">{'instructor'}</h2>
    <div className='flex justify-between'>  <h2 className="font-medium">{'available seats'}</h2><h2 className="font-medium">300$</h2> </div>
    <div className="card-actions justify-end">
      <button className="btn btn-warning">Select now!</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default ClassCard;