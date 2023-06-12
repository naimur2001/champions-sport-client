import React from 'react';
import useClasses from '../Hooks/useClasses';
import SectionTitle from '../../Folder2/Shared/SectionTitle';

const PopolarSection = () => {
  const [classes]=useClasses();
  
  const localTheme=localStorage.getItem('theme');
  const sortedClasses = classes?.sort((a, b) => parseInt(a.seat) - parseInt(b.seat));
  const displayClasses = sortedClasses?.slice(0, 6);


  return (
<div className='mt-8 mb-6 '>
  <SectionTitle title={'Popular Classes'} > </SectionTitle>
<div className='grid lg:grid-cols-2 gap-3 my-3 '>
{
  displayClasses?.map((cl)=>  <div key={cl._id}>
  <div  className={`card lg:card-side w-90 lg:h-[220px] bg-base-200 shadow-xl  ${localTheme === 'dark' ? 'text-white ' : ''} `}>
<figure><img src={cl.url} className='w-[250px] h-[220px] rounded-xl' alt="Album"/></figure>
<div className='card-body   '>
<h2 className="card-title font-mono">{cl.name}</h2>
<p className='text-sm'>Available Seats '{cl.seat}'</p>
<div className="card-actions justify-end">
<button className='btn btn-neutral' >More</button>
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