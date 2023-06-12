import React from 'react';
import useClasses from '../Folder1/Hooks/useClasses';
import ClassCard from './ClassCard';
import SectionTitle from './Shared/SectionTitle';
import usePayments from '../Folder1/Hooks/usePayments';

const Class = () => {
  const [classes]=useClasses();
  const [paydata]=usePayments();


  
  return (
    <div >
      <SectionTitle title={'What we Teach -'} > </SectionTitle>
      <div className='max-w-5xl mx-auto my-3'>
      <div className='grid grid-cols-3 gap-3'>
        {
          classes?.map(cl=> <ClassCard key={cl._id} cl={cl} ></ClassCard> )
        }
      </div>
    </div>
    </div>
  );
};

export default Class;