import React from 'react'
import SectionTitle from './Shared/SectionTitle'

const AboutUs = () => {
  return (
    <div>
         <SectionTitle title={'Discover Us -'}></SectionTitle>
      <div className=" text-black max-w-5xl mx-auto my-3">

    <div className="max-w-3xl mx-auto text-center grid grid-cols-1  gap-10">


    <div className="rounded-lg shadow-xl flex lg:flex-row flex-col justify-between   lg:h-80 lg:w-[800px]">
<div className='lg:w-[500px] '> 
<img src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQlj3rCfLHry58AtJ8ZyBEAFPtChMddDSUSjt7C7nV3Nhsni9RIx5b0-n7LxfgerrPS6b-P-u3BOM3abuY" alt="Founder" className='rounded-l-lg lg:h-80'  />
</div>
 
  <div className="my-12 lg:w-[280px]  text-center ">
        <h3 className="text-2xl font-semibold mb-4 text-center">Founder's Quote:</h3>
        <blockquote className="text-lg italic ">"Success is not final, failure is not fatal: It is the courage to continue that counts."</blockquote>
      </div>

</div>
      
<div className=''>
<h1 className="text-5xl font-extrabold mb-8">Welcome to <span className='bg-gradient-to-br from-orange-500 to-purple-500 bg-clip-text text-transparent'>Champions Sport</span></h1>
      <h2 className="text-3xl font-semibold mb-4">Where Champions are Made</h2>
</div>
     <div>
     <p className="text-lg mb-8">
    <span className='font-bold'>Since 2012</span>, <span className="bg-gradient-to-br from-orange-500 to-purple-500 bg-clip-text text-transparent text-2xl font-bold">Champions Sport </span>
 has been dedicated to serving and advancing sports and technology. We are committed to nurturing the next generation of athletic superstars. Our state-of-the-art facilities and expert coaching staff provide a comprehensive training environment tailored to help athletes of all ages and skill levels reach their full potential.
  </p>
  <p className="text-lg">
    Whether you're just starting out or striving for the next level, our academy offers a wide range of programs designed to enhance your physical abilities, mental toughness, and overall love for the game. Join us and discover what it truly means to be a champion.
  </p>
     </div>
  
  </div>
</div>

    </div>
  )
}

export default AboutUs