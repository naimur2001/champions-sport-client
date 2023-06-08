import React from 'react';
import useClasses from '../Hooks/useClasses';
import SectionTitle from '../../Folder2/Shared/SectionTitle';

const PopolarSection = () => {
  const [classes]=useClasses();
  
  return (
<div className='mt-8 mb-6 '>
  <SectionTitle title={'Popular Classes'} > </SectionTitle>
<div className='grid lg:grid-cols-2 gap-3 my-3 '>
{
  classes?.map((cl)=>  <div key={cl._id}>
  <div  className="card lg:card-side w-90 h-[220px] bg-base-200 shadow-xl">
<figure><img src={cl.image} className='w-[250px] h-[220px] rounded-xl' alt="Album"/></figure>
<div className="card-body">
<h2 className="card-title font-mono">{cl.name}</h2>
<p className='text-sm'>{cl.description}</p>
<div className="card-actions justify-end">
<button className="btn btn-neutral">More</button>
</div>
</div>
</div>
</div> )
}
    </div>
</div>
  );
};

export default PopolarSection;