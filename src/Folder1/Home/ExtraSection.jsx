import React, { useEffect } from 'react';
import SectionTitle from '../../Folder2/Shared/SectionTitle';
import useClasses from '../Hooks/useClasses';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const ExtraSection = () => {
  const [classes]=useClasses();
  useEffect(() => {
    AOS.init({
      duration: 800, 
      easing: 'ease-in-out', 
      delay: 200, 
    });
  }, []);
  const localTheme=localStorage.getItem('theme');
  return (
    <div >
      <SectionTitle title={"Academy's Captivating Gallery"}></SectionTitle>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 3, 900: 3 }}>
        <Masonry>
          {classes?.map((cl, index) => (
            <div key={index} className="relative ">
              <img
                src={cl.url}
                alt=""
                className={index % 2 === 0 ? 'aos-animate p-2' : 'aos-animate p-2'}
                data-aos={index % 2 === 0 ? 'flip-left' : 'flip-down'}
              />
              <div className="absolute inset-0 flex items-center justify-center ">
                <p  className={`text-gray-700 lg:ml-14 opacity-70   text-3xl font-bold ${localTheme === 'dark' ? 'text-white' : ''}`}>{(cl.name.split(' ')[1])||(cl.name) }</p>
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default ExtraSection;