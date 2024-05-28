import { useState } from "react";

//A Tech Pic
const FirstSection = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const sliders = [{img: "https://images.pexels.com/photos/1657328/pexels-photo-1657328.jpeg?auto=compress&cs=tinysrgb&w=600", tags: "football",}, {img: "https://images.pexels.com/photos/13509630/pexels-photo-13509630.jpeg?auto=compress&cs=tinysrgb&w=600", tags: "cricket",}, {img: "https://images.pexels.com/photos/159548/football-american-football-ball-carrier-runner-159548.jpeg?auto=compress&cs=tinysrgb&w=600", tags: "rugby",}, {img: "https://images.pexels.com/photos/598682/pexels-photo-598682.jpeg?auto=compress&cs=tinysrgb&w=600", tags: "boxing",}, {img: "https://images.pexels.com/photos/4966372/pexels-photo-4966372.jpeg?auto=compress&cs=tinysrgb&w=600", tags: "badminton",},{img: "https://images.pexels.com/photos/5069143/pexels-photo-5069143.jpeg?auto=compress&cs=tinysrgb&w=600", tags: "tennis",},];
  const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === sliders.length - 1 ? 0 : currentSlider + 1));
  return (
    <div>
      <div className='max-w-5xl mx-auto mb-5'>
<div className="main flex lg:flex-row flex-col justify-between gap-10 w-full shadow-2xl shadow-slate-300 lg:p-4 p-2 rounded-lg">
<div className='textContent flex flex-col justify-center lg:w-1/2 ' >
<div>
  <h1 className='font-extrabold text-2xl my-2'>
    Building the Future <br /> (Aspiring Athlete) <br />
    & <br />
    Exploring the World By <br />(Sports, Tallent)
  </h1>
  <p className='font-medium text-xl text-gray-500 my-2'>
    Sports enthusiast, driven by how athleticism and innovation push boundaries and create a brighter future. From intense training sessions to thrilling competitions, I'm passionate about it all!
  </p>
</div>

</div>

<div className='slider  lg:w-1/2'>

<div className="sm:w-full h-[540px] md:h-[670px] flex items-center relative overflow-hidden">
            {/* arrow */}
            <button onClick={nextSlider} className="absolute flex justify-center items-center right-2 top-1/2 bg-white rounded-full z-50 w-6 h-6 md:w-8 md:h-8 bgWhite ">
                <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
            </button>
            {/* slider container */}
            <div className="ease-linear duration-300 flex gap-[2%]" style={{ transform: `translateX(-${currentSlider * 52}%)` }}>
                {/* sliders */}
                {sliders.map((slide, inx) => (
                    <div key={inx}
                        className={`${currentSlider === inx ? 'h-[310px] md:h-[310px] lg:h-[580px] ' : 'h-[260px] md:h-[280px] lg:h-[480px]'} min-w-[75%] bg-black/30 relative duration-200 rounded-md`}
                    >
                        <img src={slide.img} className="w-full h-full rounded-md" alt={slide.tags} />
                    </div>
                ))}
            </div>
        </div>
</div>
</div>
      </div>
    </div>
  )
}

export default FirstSection