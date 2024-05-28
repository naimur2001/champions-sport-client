import React from 'react';
// import SectionTitle from '../Shared/SectionTitle';
// import useInstructors from '../../Folder1/Hooks/useInstructors';
import InstructorCard from '../Folder1/Home/InstructorCard';
import SectionTitle from './Shared/SectionTitle';
import useInstructors from '../Folder1/Hooks/useInstructors';
// import InstructorCard from '../../Folder1/Home/InstructorCard';


const Instructor = () => {
const [instructors]=useInstructors();

  return (
    <div>
      <SectionTitle title={'Our Talented Instructors - '}></SectionTitle>
<div className='max-w-5xl mx-auto my-10'>
<div className='mx-8  grid lg:grid-cols-3 grid-cols-1 lg:mx-0  gap-3'>
{
  instructors?.map(instructor=> <InstructorCard key={instructor._id} instructor={instructor} ></InstructorCard> )
}

      </div>

</div>
    </div>
  );
};

export default Instructor;