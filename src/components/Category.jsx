/* eslint-disable no-unused-vars */
import React from 'react'
import makeup from '../assets/makeup.jpg'
import skincare from '../assets/skincare.jpg'
import haircare from '../assets/haircare.jpg'
import bodycare from '../assets/bodycare.jpg'
import nailcare from '../assets/nailcare.jpg'
import fragrances from '../assets/fragrances.jpg'

const Category = () => {
  return (
    <div className='py-20 bg-[#ffefef]'>
        <h1 className='text-center text-[#F44545] font-semibold text-lg mb-2'>OUR CATEGORY</h1>
        <hr className='w-16 border-[1.5px] border-zinc-300 mb-14 mx-auto'/>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10'>
          <div>
            <img src={makeup} alt="" className='w-32 h-32 rounded-full mx-auto mb-3'/>
            <h2 className='text-center font-medium text-zinc-500 text-base'>Makeup</h2>
          </div>
          <div>
            <img src={skincare} alt="" className='w-32 h-32 rounded-full mx-auto mb-3'/>
            <h2 className='text-center font-medium text-zinc-500 text-base'>Skin Care</h2>
          </div>
          <div>
            <img src={haircare} alt="" className='w-32 h-32 rounded-full mx-auto mb-3'/>
            <h2 className='text-center font-medium text-zinc-500 text-base'>Hair Care</h2>
          </div>
          <div>
            <img src={bodycare} alt="" className='w-32 h-32 rounded-full mx-auto mb-3'/>
            <h2 className='text-center font-medium text-zinc-500 text-base'>Body Care</h2>
          </div>
          <div>
            <img src={nailcare} alt="" className='w-32 h-32 rounded-full mx-auto mb-3'/>
            <h2 className='text-center font-medium text-zinc-500 text-base'>Nail Care</h2>
          </div>
          <div>
            <img src={fragrances} alt="" className='w-32 h-32 rounded-full mx-auto mb-3'/>
            <h2 className='text-center font-medium text-zinc-500 text-base'>Fragrance</h2>
          </div>
        </div>
    </div>
  )
}

export default Category
