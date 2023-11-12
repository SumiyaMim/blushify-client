/* eslint-disable no-unused-vars */
import React from 'react'
import error from '../assets/error.jpg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Error = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className='py-10'>
            <img src={error} alt="" className='mx-auto'/>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Error
