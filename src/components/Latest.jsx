/* eslint-disable no-unused-vars */
import React from 'react'
import latest1 from '../assets/latest1.jpg'
import latest2 from '../assets/latest2.jpg'
import latest3 from '../assets/latest3.jpg'

const Latest = () => {
  return (
    <div className='py-20 px-6 md:px-8 lg:px-12'>
        <h1 className='text-center text-[#F44545] font-semibold text-lg mb-2'>LATEST NEWS</h1>
        <hr className='w-16 border-[1.5px] border-zinc-300 mb-14 mx-auto'/>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5 lg:gap-8'>
            <div>
                <div className='relative mb-3'>
                    <img src={latest1} alt="" className='w-96 h-56 md:h-48 lg:h-72 rounded-lg'/>
                    <div className="absolute left-0 bottom-0 w-40 h-11 bg-[#1e1e1e] bg-opacity-80 rounded-t-lg rounded-b-lg rounded-ee-none rounded-ss-none">
                        <h2 className='absolute left-5 bottom-3 font-medium text-sm text-white'>16 October, 2023</h2>
                    </div>
                </div>
                <h2 className='font-semibold text-base md:text-sm lg:text-base mb-1'>New Fall Makeup Collection</h2>
                <p className='text-xs font-normal text-zinc-400 text-justify'>Introducing our stunning Fall makeup collection: Embrace the beauty of Autumn with warm and inspiring shades.</p>
            </div>
            <div>
               <div className='relative mb-3'>
                    <img src={latest2} alt="" className='w-96 h-56 md:h-48 lg:h-72 rounded-lg'/>
                    <div className="absolute left-0 bottom-0 w-40 h-11 bg-[#1e1e1e] bg-opacity-80 rounded-t-lg rounded-b-lg rounded-ee-none rounded-ss-none">
                        <h2 className='absolute left-5 bottom-3 font-medium text-sm text-white'>19 October, 2023</h2>
                    </div>
                </div>
                <h2 className='font-semibold text-base md:text-sm lg:text-base mb-1'>Celebrating a Decade of Beauty</h2>
                <p className='text-xs font-normal text-zinc-400 text-justify'>Celebrate a decade of partnership with us. Enjoy special promotions and giveaways in honor of our beauty journey.</p>
            </div>
            <div>
                <div className='relative mb-3'>
                    <img src={latest3} alt="" className='w-96 h-56 md:h-48 lg:h-72 rounded-lg'/>
                    <div className="absolute left-0 bottom-0 w-40 h-11 bg-[#1e1e1e] bg-opacity-80 rounded-t-lg rounded-b-lg rounded-ee-none rounded-ss-none">
                        <h2 className='absolute left-5 bottom-3 font-medium text-sm text-white'>19 October, 2023</h2>
                    </div>
                </div>
                <h2 className='font-semibold text-base md:text-sm lg:text-base mb-1'>Beauty Influencer Collaboration</h2>
                <p className='text-xs font-normal text-zinc-400 text-justify'>Discover exclusive looks by partnering with top beauty influencers for a limited edition collection.</p>
            </div>
        </div>
    </div>
  )
}

export default Latest
