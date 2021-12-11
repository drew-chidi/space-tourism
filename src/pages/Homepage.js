import React from "react";
import Navbar from "../components/Navbar";

const Homepage = () => {
  return (
    <div className='bgHomeMobile xs:h-screen md:bgHomeTablet xl:bgHomeDesktop'>
      <nav className='mb-16 md:mb-28 xl:mb-[251px]'>
        <Navbar />
      </nav>
      <div className='xl:flex justify-start'>
        <div className='px-6 mt-16 mb-16 text-white text-center md:px-40 md:mb-[156px] xl:ml-[165px] xl:px-0 xl:w-[450px] '>
          <h5 className='mb-5 text-base tracking-[0.2em] md:tracking-[0.05em] md:text-lg xl:text-left'>
            SO, YOU WANT TO TRAVEL TO
          </h5>
          <h2 className='mb-8 text-[5rem] tracking-[0.07em] md:text-[8.6rem]'>
            SPACE
          </h2>

          <p className='text-center text-[#d0d6f9] text-[15px] md:text-[17px] md:leading-8 xl:text-left'>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of an edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className='text-center w-[150px] h-[150px] md:w-[242px] md:h-[242px] m-auto xxl:ml-96 '>
          <button className='w-full text-xl subtitle1 text-black rounded-full h-[150px] bg-white text-center md:h-[242px] hover:border-[20px] border-gray-600'>
            EXPLORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
