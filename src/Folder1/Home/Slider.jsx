
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "/public/Slider.css";



import { Pagination } from "swiper";
const Slider = () => {
  const imgs=[
    {img_url:"https://images.pexels.com/photos/9828008/pexels-photo-9828008.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {img_url:"https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {img_url:"https://images.pexels.com/photos/260606/pexels-photo-260606.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {img_url:"https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {img_url:"https://images.pexels.com/photos/6307230/pexels-photo-6307230.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {img_url:"https://images.pexels.com/photos/2600493/pexels-photo-2600493.jpeg?auto=compress&cs=tinysrgb&w=600"},
  ]
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  
  return (
    <div className="my-4 ">
          <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper rounded-lg "
      >
      {
  imgs.map((img, i) => (
    <SwiperSlide  key={i}>
      <img src={img.img_url} className="w-full lg:h-[400px]  bg-contain lg:px-0 px-2" alt="image" />
    </SwiperSlide>
  )) 
}
    
       
      </Swiper>
    </div>
  );
};

export default Slider;