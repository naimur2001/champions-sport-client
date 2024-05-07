import React from 'react';
import Slider from './Slider';
import PopolarSection from './PopolarSection';
import ExtraSection from './ExtraSection';
import InstructorSection from './InstructorSection';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <h1 className='text-4xl text-yellow-500 font-mono font-semibold text-center my-5'>Champions Sport Academy</h1>
  <ExtraSection></ExtraSection>
  <PopolarSection></PopolarSection>
  <InstructorSection></InstructorSection>
    </div>
  );
};

export default Home;