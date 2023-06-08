import React from 'react';
import useClasses from '../Hooks/useClasses';
import SectionTitle from '../../Folder2/Shared/SectionTitle';
import PopularSectionCard from './PopularSectionCard';

const PopolarSection = () => {
  const [classes]=useClasses();
  return (
<div className='my-4'>
  <SectionTitle title={'Popular Classes'} > </SectionTitle>
<div className='grid lg:grid-cols-2 gap-3 my-3 '>
{
  classes?.map((cl)=>  <PopularSectionCard key={cl._id} cl={cl} ></PopularSectionCard> )
}
    </div>
</div>
  );
};

export default PopolarSection;