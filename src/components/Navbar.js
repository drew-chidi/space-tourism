import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);

  const navMenuHandler = () => {
    setNavMenu(!navMenu);
  };
  return (
    <div>
      <div className='p-6 md:px-10'>
        <div className='flex justify-between items-center'>
          <div className='w-10 h-10'>
            <img src={logo} alt='logo' className='max-w-full h-auto' />
          </div>
          <div className='md:hidden z-10'>
            {navMenu === false ? (
              <div className='z-50 my-auto'>
                <button onClick={navMenuHandler} className='w-6'>
                  <img
                    src={menu}
                    alt='hamburger menu'
                    className='max-w-full h-auto'
                  />
                </button>
              </div>
            ) : (
              <div>
                <button onClick={navMenuHandler} className='w-6'>
                  <img
                    src={close}
                    alt='hamburger menu'
                    className='max-w-full h-auto'
                  />
                </button>
              </div>
            )}
          </div>

          <ul
            className={`${
              !navMenu && "hidden md:flex"
            } z-[1] gradient-sm items-center h-screen w-[68.5%] pt-40 absolute top-0 right-0 text-white px-4 md:flex md:pt-0  md:h-24 md:w-auto md:gradient-md md:bg-gray-900`}
          >
            <li className='uppercase px-6 flex pb-5 md:py-0'>
              <Link to='/' className='flex'>
                <p className='font-bold mr-3 md:hidden '>00</p>Home
              </Link>
            </li>

            <li className='uppercase px-6 flex py-5 md:py-0'>
              <Link to='/Destination' className='flex'>
                <p className='font-bold mr-3 md:hidden '>01</p>Destination{" "}
              </Link>
            </li>
            <li className='uppercase px-6 flex py-5 md:py-0'>
              <Link to='/Crew' className='flex'>
                <p className='font-bold mr-3 md:hidden '>02</p>crew{" "}
              </Link>
            </li>
            <li className='uppercase px-6 flex py-5 md:py-0'>
              <Link to='/Technology' className='flex'>
                <p className='font-bold mr-3 md:hidden '>03</p>technology{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
