import React from "react";
import { Link } from "react-router-dom";
import WomanImg from "/woman_hero.png";

const Hero = () => {
  return (
    <div
      className=" w-full h-[665px] bg-hero 
    bg-center py-16 bg-fixed"
    >
      <div className="mx-auto flex justify-around h-full">
        <div className="flex flex-col uppercase">
          <div className="w-full flex items-center font-semibold">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
          </div>
          <div className="text-[70px] font-light mb-4 ">
            <h1>
              Autumn sale stylish
              <br />
              <span className="font-semibold">woman</span>
            </h1>
          </div>
          <Link to={'/'} className='border-b-2 border-black self-start uppercase font-semibold'>Discover More</Link>
          
        </div>
        <div className="hidden lg:block  ">
          <img src={WomanImg} alt="" className="h-[600px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
