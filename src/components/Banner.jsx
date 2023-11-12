/* eslint-disable no-unused-vars */
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const Banner = () => {
  return (
    <div className="relative bg-cover bg-[url('https://i.ibb.co/dKvsWPb/beauty-banner.jpg')] bg-no-repeat">
     <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative flex flex-col justify-center items-center h-[350px] md:h-[400px] lg:h-[495px] gap-6">
         <p className='text-[#F44545] text-xs uppercase'>F o r &nbsp; a  &nbsp; G l o w i n g &nbsp; S k i n</p>
          <h1 className="w-4/5 lg:w-1/2 leading-snug md:leading-snug lg:leading-snug text-2xl font-title md:text-4xl lg:text-5xl text-white text-center font-normal max-w-xs md:max-w-6xl mb-2 md:mb-4">
          Unleash Your Inner Beauty with Our Cosmetics Selection      
          </h1>
          <div className='text-white text-sm md:text-base font-medium flex items-center gap-3 lg:gap-4'>
              <button>S H O P &nbsp; N O W</button>
              <i><BsArrowRight className='text-xl md:text-2xl'></BsArrowRight></i>
          </div>
      </div>
    </div>
  );
};

export default Banner;
