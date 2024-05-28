

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import '/public/Slider.css'

import { FreeMode, Pagination } from "swiper";
import useInstructors from '../Hooks/useInstructors';
import InstructorCard from './InstructorCard';
import SectionTitle from "../../Folder2/Shared/SectionTitle";

const InstructorSection = () => {
  const [instructors]=useInstructors()
  return (
    <div className="mt-8  ">
      <SectionTitle  title={'Popular Instructors'}  ></SectionTitle>
      <div className="my-4">
      <Swiper
        
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          620: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
          
        }}
        modules={[FreeMode,Pagination]}
        className="mySwiper "
      >
     
      
        {
instructors?.map(instructor=>   <SwiperSlide key={instructor._id}>    <InstructorCard key={instructor._id} instructor={instructor} ></InstructorCard>  </SwiperSlide>  )
        }
      </Swiper>
      </div>
    </div>
  );
};

export default InstructorSection;