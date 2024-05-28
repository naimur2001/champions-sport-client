
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const ContactPage = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div className="main-div">
 

      <div className="part-1-2 my-10 ">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
          {/* part one div form section basically */}

          <div className="  part1    text-2xl basis-2/3  p-8 rounded-xl shadow-md bg-gray-50">
            <h1 className="  lg:text-4xl md:text-3xl text-2xl font-semibold my-10 text-center">
              Interact With Us
            </h1>
            <p className=" text-sm    pr-4 text-gray ">
            Champion Sports Company is your reliable partner for all your sporting needs. Since 2012, we've provided a comprehensive suite of services designed to enhance your performance and efficiency, no matter where you are in the world.

Champion Sports Company will lead the way in all sports and related activities.
            </p>

            <div className="flex flex-col gap-5 mt-8">
              <div className="flex items-center gap-4">
                <span>
                  {/* map icon */}
                  <FaSearchLocation className="text-3xl text-orange-500" />
                  {/* map icon */}
                </span>
                <span className="text-slate-800 text-xl">
                P9XC+GGH Abahoni club, Dhaka 1205 
                </span>
              </div>
              <div className="flex items-center gap-4 ">
                <span>
                  {/* mail icon */}
                  <FaMailBulk className="text-3xl text-orange-500" />

                  {/* mail icon */}
                </span>
                <a href="mailto:.....">
                  {" "}
                  <span className=" lg:font-normal  text-slate-800 text-xl">
                    info@champsport.com
                  </span>
                </a>
              </div>
              <div className="flex lg:flex-row flex-col  gap-4 mb-5  ">

               <span className="flex gap-2">
               <FaWhatsapp className="text-3xl text-orange-500" />
               <a href="https://wa.me/8801682036423" target="_blank">
                  <span className="text-slate-800 text-xl">+8801921201138,</span>
                </a>
               </span>
               <span className="flex gap-2">
                  {/* call icon  */}
                  <IoMdCall className="text-3xl text-orange-500" />

                  <a href="tel:+88031717297"><span className="text-slate-800 text-xl"> +8801921201138</span></a>
                  {/* call icon */}
                </span>
                
              </div>
            </div>

            <div className="grid grid-cols-1 items-center gap-4 mb-5">
              <span className="text-3xl font-semibold mt-7 mb-10 text-center">
                Follow us
              </span>

              <span className="flex gap-10 justify-center items-center">
                <span className="hover:translate-y-1 ease duration-500 text-3xl text-orange-500">
                  <a href="https://www.facebook.com" target="_blank">
                    {" "}
                    {/* fb icon */}
                    <FaFacebook />
                    {/* fb icon */}
                  </a>
                </span>
                <span className="hover:translate-y-1 ease duration-500 text-3xl text-orange-500">
                  <a href="https://www.instagram.com" target="_blank">
                    {" "}
                    {/* insta icon */}
                    <FaInstagram />
                    {/* insta icon */}
                  </a>
                </span>
                <span className="hover:translate-y-1 ease duration-500 text-3xl text-orange-500">
                  <a href="https://www.linkedin.com" target="_blank">
                    {" "}
                    {/* insta icon */}
                    <FaLinkedin />
                    {/* insta icon */}
                  </a>
                </span>

                <span className="hover:translate-y-1 ease duration-500 text-3xl text-orange-500">
                  {" "}
                  <a href="https://twitter.com" target="_blank">
                    {" "}
                    {/* twit icon */}
                    <FaXTwitter />
                    {/* twit icon */}
                  </a>{" "}
                </span>
              </span>
            </div>
          </div>
          {/* form div */}
          <div className="part2 bg-gray-50 basis-1/2 flex flex-col items-center  p-8 rounded-xl shadow-md">
            <h1 className="  lg:text-4xl md:text-3xl text-2xl font-semibold my-10 text-center">
              Let's Hear From You
            </h1>
            <form action="" method="POST" className="w-full max-w-lg ">
              <div className="flex flex-wrap  -mx-3 mb-6">
                <div className="w-full md:w-1/2  px-3 mb-6 md:mb-0">
                  <input
                    className="appearance-none block w-full text-gray-700 border-b-2 border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent "
                    id="grid-first-name"
                    type="text"
                    placeholder="Name"
                    name="name"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <input
                    className="appearance-none block w-full text-gray-700 border-b-2 border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent "
                    id="grid-last-name"
                    type="email"
                    placeholder="E-Mail"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6 md:mb-0">
                <div className="w-full px-3 md:w-1/2 mb-6 md:mb-0">
                  <input
                    className="appearance-none block w-full text-gray-700 border-b-2 border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent "
                    id="grid-password"
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    required
                  />
                </div>
                <div className="w-full px-3 md:w-1/2 mb-6 md:mb-0">
                  <input
                    className="appearance-none block w-full text-gray-700 border-b-2 border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent "
                    id="grid-password"
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </div>
                <div className="w-full px-3">
                  <textarea
                    className="appearance-none block w-full text-gray-700 border-b-2 border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent "
                    rows={5}
                    id="grid-password"
                    type="text"
                    placeholder="Message"
                    name="message"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className={`w-full mt-3 px-6 md:px-8 lg:px-8 py-2 md:py-3 lg:py-3 bg-slate-50    font-semibold text-orange-500 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center justify-center gap-3 text-xl group`}
              >
                Send{" "}
                <FaPaperPlane className="group-hover:rotate-45 transition-transform ease-linear delay-300" />
              </button>
            </form>
          </div>

          {/* part two div information section basically */}
        </div>
      </div>

      {/* map */}
      {/* part three div map section basically */}
      <div className="part3 my-16 ">
        <div className="">
          <h1 className="   lg:text-4xl md:text-3xl text-2xl font-semibold my-10 text-center">
            Discover Our Location on Google Maps
          </h1>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29215.678356611043!2d90.33531571083982!3d23.7488131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf7201b55bb9%3A0xc9d1b33c66372335!2sAbahani%20Club%20Field!5e0!3m2!1sen!2sbd!4v1716893374202!5m2!1sen!2sbd"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"  className="rounded-lg px-4 w-[100%] h-[450px]   "></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
