/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Brand = ({brands}) => {

    const { id, brand_image, brand_name } = brands

  return (
    <div className='rounded-xl shadow hover:shadow-lg'>
        <Link to={`/brand/${brand_name.toLowerCase()}`}>
            <div className='relative'>
                <img src={brand_image} alt="" className='h-80 w-full rounded-xl'/>
                <div className="absolute left-0 bottom-0 w-full h-14 bg-white bg-opacity-80 rounded-b-md">
                    <h2 className='absolute left-6 bottom-4 font-semibold text-base'>{brand_name}</h2>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Brand
