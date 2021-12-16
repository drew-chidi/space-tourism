import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";

const Navbar = (props) => {
  const [navMenu, setNavMenu] = useState(false);
  const [id, setId] = useState(props.id);

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
            } z-[1] gradient-sm items-center h-screen w-[68.5%] pt-40 absolute top-0 right-0 text-white px-4 md:flex md:pt-0 md:h-24 md:w-auto md:gradient-md md:bg-gray-900 xl:px-36`}
          >
            <li className='uppercase pr-6 flex pb-5 md:py-0 md:h-full'>
              <Link
                to='/'
                className={`${
                  props.id === "0" && "md:border-solid md:border-white"
                } flex items-center border-b-4 border-transparent xl:font-light`}
              >
                <p className='font-bold mr-3 md:hidden xl:block'>00</p>Home
              </Link>
            </li>

            <li className='uppercase px-6 flex py-5 md:py-0 md:h-full'>
              <Link
                to='/Destination'
                className={`${
                  props.id === "1" && "md:border-solid md:border-white"
                } flex items-center border-b-4 border-transparent xl:font-light`}
              >
                <p className='font-bold mr-3 md:hidden xl:block '>01</p>
                Destination{" "}
              </Link>
            </li>
            <li className='uppercase px-6 flex py-5 md:py-0 md:h-full'>
              <Link
                to='/Crew'
                className={`${
                  props.id === "2" && "md:border-solid md:border-white"
                } flex items-center border-b-4 border-transparent xl:font-light`}
              >
                <p className='font-bold mr-3 md:hidden xl:block'>02</p>crew{" "}
              </Link>
            </li>
            <li className='uppercase pl-6 flex py-5 md:py-0 md:h-full'>
              <Link
                to='/Technology'
                className={`${
                  id === "3" && "md:border-solid md:border-white"
                } flex items-center border-b-4 border-transparent xl:font-light`}
              >
                <p className='font-bold mr-3 md:hidden xl:block'>03</p>
                technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
