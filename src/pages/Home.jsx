/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from '../components/Banner'
import Brand from '../components/Brand'
import { useLoaderData } from 'react-router-dom';
import Category from '../components/Category';
import Latest from '../components/Latest';

const Home = () => {

  const brands = useLoaderData();

  return (
    <div>
        <Banner></Banner>
        <Category></Category>
        <div className='py-20'>
          <h1 className='text-center text-[#F44545] font-semibold text-lg mb-2'>OUR BRAND</h1>
          <hr className='w-16 border-[1.5px] border-zinc-300 mb-14 mx-auto'/>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 lg:px-12 mx-auto gap-14'>
              {brands.map((brand) => (
                <Brand key={brand.id} brands={brand}></Brand>
              ))}
          </div>
        </div>
        <Latest></Latest>
    </div>
  )
}

export default Home
