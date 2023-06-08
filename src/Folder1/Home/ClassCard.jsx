import React from 'react';

const ClassCard = ({cl}) => {
  return (
    <div>
    <div  className="card lg:card-side w-90 bg-base-200 shadow-xl">
<figure><img src={cl.image} className='w-64 h-52' alt="Album"/></figure>
<div className="card-body">
<h2 className="card-title">{cl.name}!</h2>
<p>Click the button to listen on Spotiwhy app.</p>
<div className="card-actions justify-end">
  <button className="btn btn-error">More</button>
</div>
</div>
</div>
</div>

  );
};

export default ClassCard;