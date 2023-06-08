import React from 'react';
import Slider from './Slider';
import PopolarSection from './PopolarSection';
import ExtraSection from './ExtraSection';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <h1 className='text-4xl text-yellow-500 font-mono font-semibold text-center'>Champions Sport Academy</h1>
  <ExtraSection></ExtraSection>
  <PopolarSection></PopolarSection>
    </div>
  );
};

export default Home;