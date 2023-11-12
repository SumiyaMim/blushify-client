/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    const navigate = useNavigate();
  
    const handleSignOut = (e) => {
      e.preventDefault();
      signOutUser(); 
      navigate('/signin'); 
    };

    const handleToggle = (e) => {
      if(e.target.checked){
        setTheme("dark")
      }
      else {
        setTheme("light")
      }
    }

    useEffect(() => {
      localStorage.setItem("theme", theme);
      const localTheme = localStorage.getItem("theme");
      document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    const links = (
      <>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-xs md:text-sm font-medium text-[#F44545]"
                : "text-xs md:text-sm font-medium text-zinc-500"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add-product"
            className={({ isActive }) =>
              isActive
                ? "text-xs md:text-sm font-medium text-[#F44545]"
                : "text-xs md:text-sm font-medium text-zinc-500"
            }
          >
            Add Product
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-cart"
            className={({ isActive }) =>
              isActive
                ? "text-xs md:text-sm font-medium text-[#F44545]"
                : "text-xs md:text-sm font-medium text-zinc-500"
            }
          >
            My Cart
          </NavLink>
        </li>
      </>
    );
  
    return (
      <div className="shadow-md">
        <div className="navbar max-w-7xl mx-auto pl-2 md:pl-5 pr-6 md:pr-8 lg:px-12">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
              <ul className="menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52">
                {links}
              </ul>
            </div>
            <div className='hidden lg:block'>
              <div className='flex items-center justify-center gap-2'>
                <img src={logo} alt="" className='w-4 lg:w-5'/>
                <a className="normal-case text-base md:text-xl font-semibold">
                    Blushify
                </a>
              </div>
            </div>
          </div>
          <div className='navbar-center lg:hidden flex items-center justify-center gap-2'>
                <img src={logo} alt="" className='w-4 lg:w-5'/>
                <a className="normal-case text-base md:text-xl font-semibold">
                    Blushify
                </a>
          </div>
          <div className="navbar-end flex gap-8 items-center">
             <div className="hidden lg:flex">
               <ul className="flex items-center justify-center gap-8 font-medium text-sm menu-horizontal px-1">
                  {links}
               </ul>
              </div>
              <div className='flex items-center gap-4'>
                  {user?.email ? (
                    <div className="dropdown dropdown-end">
                      <label tabIndex={0} className="avatar">
                        <div className="w-9 rounded-full mt-1.5">
                          <img src={user.photoURL} alt={user.displayName} />
                        </div>
                      </label>
                      <ul
                        tabIndex={0}
                        className="menu-sm dropdown-content mt-3 z-[1] p-4 shadow text-center bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <button className="text-xs lg:text-sm font-medium text-zinc-500 hover:text-[#F44545]">
                            {user.displayName}
                          </button>
                        </li>
                        <li>
                          <button onClick={handleSignOut} className="text-xs lg:text-sm font-medium text-zinc-500 hover:text-[#F44545]">Sign Out</button>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <Link to="/signin">
                        <button className="bg-black border-2 hover:border-2 border-black text-white hover:bg-white hover:text-black px-4 py-1 rounded-md font-semibold text-xs md:text-sm">Sign in</button>
                    </Link>
                  )}

                  {/* light/dark toggle */}
                  <label className="swap swap-rotate">
                    <input type="checkbox" onChange={handleToggle} checked={theme === "light" ? false : true}/>
                    <svg className="swap-on fill-current w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                    <svg className="swap-off fill-current w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                  </label>
              </div>
          </div>
        </div>
      </div>
    );
  };
  
export default Navbar;
