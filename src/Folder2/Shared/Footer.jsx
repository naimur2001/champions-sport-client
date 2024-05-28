import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const localTheme=localStorage.getItem('theme');

  return (
    <div>
      <footer className={`footer p-10 bg-slate-900 rounded-lg text-white  ${localTheme === 'dark' ? 'text-black' : ''} `}>
  <div>
  <img src="./cs-logo.png"  className="w-[80px] h-[80px]" alt="" />
    <p> <Link to={"/"} className="bg-gradient-to-br from-orange-500 to-purple-500 bg-clip-text text-transparent font-semibold  text-xl ">Champions Sport</Link><br/>Providing Best Instruction  since 2012</p>
  </div> 
  <div>
  <span className="footer-title">Services</span> 
    <a className="link link-hover">Athlete Training</a> 
    <a className="link link-hover">Skill Development</a> 
    <a className="link link-hover">Fitness Programs</a> 
    <a className="link link-hover">Nutritional Guidance</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <Link to={"/aboutus"} className="link link-hover">About Us</Link> 
    <Link to={"/contactus"} className="link link-hover">Contact Us</Link> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
    </div>
  );
};

export default Footer;