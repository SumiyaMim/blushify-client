/* eslint-disable no-unused-vars */
import React from 'react'
import logo from '../assets/logo.png';
import { FaFacebookF } from 'react-icons/fa';
import { FaPinterestP } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='bg-black'>
      <div className='max-w-7xl mx-auto py-12 px-6 md:px-8 lg:px-12 flex flex-col md:flex-row gap-6 md:gap-4 justify-between'>
        <div className='md:w-72 lg:w-96'>
            <div className='flex items-center text-white gap-2 mb-2'>
                <img src={logo} alt="" className='w-4 lg:w-5'/>
                <a className="normal-case text-base md:text-xl font-semibold">
                    Blushify
                </a>
            </div>
            <p className='text-xs text-zinc-300 mb-6'>Discover the Perfect Cosmetics and Beauty Products to Enhance Your Unique Style and Glow.</p>
            <h3 className='text-sm text-white font-semibold mb-3'>SHARE YOUR LOVE</h3>
            <div className='text-white text-base flex items-center gap-4'>
                <i className='border-[1.5px] rounded-full p-1'><FaFacebookF></FaFacebookF></i>
                <i className='border-[1.5px] rounded-full p-1'><FaPinterestP></FaPinterestP></i>
                <i className='border-[1.5px] rounded-full p-1'><AiOutlineTwitter></AiOutlineTwitter></i>
                <i className='border-[1.5px] rounded-full p-1'><FaInstagram></FaInstagram></i>
            </div>
        </div>
        <div>
            <h2 className='text-sm text-white font-semibold mb-3'>OUR COMPANY</h2>
            <p className='text-xs text-zinc-300 mb-1'>About Us</p>
            <p className='text-xs text-zinc-300 mb-1'>Contact Us</p>
            <p className='text-xs text-zinc-300 mb-1'>Terms & Conditions</p>
            <p className='text-xs text-zinc-300 mb-1'>Privacy Policy</p>
        </div>
        <div>
            <h2 className='text-sm text-white font-semibold mb-3'>QUICK LINK</h2>
            <p className='text-xs text-zinc-300 mb-1'>Blog: Tips & Tutorials</p>
            <p className='text-xs text-zinc-300 mb-1'>Shipping & Delivery</p>
            <p className='text-xs text-zinc-300 mb-1'>Return Policy</p>
            <p className='text-xs text-zinc-300 mb-1'>Payment Method</p>
        </div>
        <div>
            <h2 className='text-sm text-white font-semibold mb-3'>CONTACT US</h2>
            <p className='text-xs text-zinc-300 mb-1'>01054 694200</p>
            <p className='text-xs text-zinc-300 mb-1'>info@blushify.com.bd</p>
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-6 md:px-8 lg:px-12'>
        <hr className='border-zinc-500'/>
        <p className='text-xs text-zinc-400 py-8 text-center'>Copyright © {new Date().getFullYear()} Blushify. All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
