import React, { useState, useEffect } from 'react';
import useClasses from '../Folder1/Hooks/useClasses';
import ClassCard from './ClassCard';
import SectionTitle from './Shared/SectionTitle';
import usePayments from '../Folder1/Hooks/usePayments';

const Class = () => {
  const [classes] = useClasses();
  const [paydata] = usePayments();
  const [approvedClasses, setApprovedClasses] = useState([]);

  // useEffect(() => {
  //   const filteredClasses = classes.filter(cl => cl.status === 'approved');
  //   setApprovedClasses(filteredClasses);
  // }, [classes]);

  useEffect(() => {
    if (classes) {
      const filteredClasses = classes.filter(cl => cl.status === 'approved');
      setApprovedClasses(filteredClasses);
    }
  }, [classes]);
  

  return (
    <div>
      <SectionTitle title={'What we Teach -'}></SectionTitle>
      <div className='max-w-5xl mx-auto my-3'>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-3'>
          {approvedClasses?.map(cl => (
            <ClassCard key={cl._id} cl={cl}></ClassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Class;
