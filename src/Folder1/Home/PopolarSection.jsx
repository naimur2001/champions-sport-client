import React from 'react';
import useClasses from '../Hooks/useClasses';
import SectionTitle from '../../Folder2/Shared/SectionTitle';

import ClassCard from './ClassCard';

const PopolarSection = () => {
  const [classes]=useClasses();
  return (
<div className='mt-8 mb-6 '>
  <SectionTitle title={'Popular Classes'} > </SectionTitle>
<div className='grid lg:grid-cols-2 gap-3 my-3 '>
{
  classes?.map((cl)=>  <ClassCard key={cl._id} cl={cl} ></ClassCard> )
}
    </div>
</div>
  );
};

export default PopolarSection;