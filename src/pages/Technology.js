import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import GetData from "../apiService/GetData";

import vehicleP from "../assets/technology/image-launch-vehicle-portrait.jpg";
import vehicleL from "../assets/technology/image-launch-vehicle-landscape.jpg";
import capsuleL from "../assets/technology/image-space-capsule-landscape.jpg";
import capsuleP from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceportL from "../assets/technology/image-spaceport-landscape.jpg";
import spaceportP from "../assets/technology/image-spaceport-portrait.jpg";

const Technology = () => {
  // data state
  const [data, setData] = useState([]);
  //   Formatted data state
  const [info, setInfo] = useState([]);
  //   stores button clicks
  const [id, setId] = useState(0);

  let linkId = 3;
  // Image array for small and larger displays
  let imagesPortrait = [vehicleP, capsuleP, spaceportP];
  let imagesLandscape = [vehicleL, capsuleL, spaceportL];

  // Registers button click and format data state
  const techHandler = (e) => {
    if (e === undefined) {
      setInfo(data[id]);
      // return 0;
    } else {
      setId(parseInt(e.target.id));
      setInfo(data[parseInt(e.target.id)]);
    }
  };

  // Checks if incoming data mounts and stops rerendering at unmount
  useEffect(() => {
    let mounted = true;
    GetData().then((items) => {
      if (mounted) {
        setData(items.technology);
      }
    });
    return () => (mounted = false);
  }, []);

  // Runs the function to set initial info
  useEffect(() => {
    techHandler();
  });

  return (
    <div className='bgTMobile md:bgTTablet lg:bgTDesktop min-h-screen text-center'>
      <nav className='mb-6 md:mb-10 xl:mb-[26px]'>
        <Navbar id='3' />
      </nav>
      <div className='mb-8 md:mb-14'>
        <h5 className='text-white tracking-[2.7px] text-lg flex justify-center md:justify-start md:pl-10'>
          <p className='mr-4 text-gray-500'>03</p> SPACE LAUNCH 101
        </h5>
      </div>
      <div className='xl:flex flex-row-reverse'>
        {/* Image Element for Small and Medium Sizes Screen */}
        <div className=' mb-[26px] h-[170px] md:h-[310px] flex justify-center border-b border-gray-600 md:mb-14 xl:hidden'>
          {data.length === 0 || info === undefined ? (
            <p> Image Loading... </p>
          ) : (
            <img
              src={imagesLandscape[id]}
              alt='Crew Image'
              className='h-full max-w-full'
            />
          )}
        </div>

        {/* Image Element Large Sizes Screen */}
        <div className='hidden mb-[26px] h-[170px] md:h-[310px] xl:flex justify-center border-b border-gray-600 md:mb-14 xl:w-[515px] xxl:h-[527px]'>
          {data.length === 0 || info === undefined ? (
            <p> Image Loading... </p>
          ) : (
            <img
              src={imagesPortrait[id]}
              alt='Crew Image'
              className='h-full max-w-full md:w-full xl:max-w-full xl:h-auto xxl:h-full'
            />
          )}
        </div>
        <div className='xl:flex items-center'>
          <ul className='flex justify-center mb-5 md:mb-11 xl:flex-col'>
            <li className='px-2'>
              <button
                id='0'
                onClick={techHandler}
                className={`${
                  id === 0
                    ? "bg-white text-black border-0"
                    : "bg-transparent text-white"
                } text-2xl h-10 w-10 color-black rounded-full hover:border-gray-400 border-gray-700 border-solid border`}
              >
                1
              </button>
            </li>
            <li className='px-2'>
              <button
                id='1'
                onClick={techHandler}
                className={`${
                  id === 1
                    ? "bg-white text-black border-0"
                    : "bg-transparent text-white "
                } text-2xl h-10 w-10 color-black rounded-full hover:border-gray-400 border-gray-700 border-solid border`}
              >
                2
              </button>
            </li>
            <li className='px-2'>
              <button
                id='2'
                onClick={techHandler}
                className={`${
                  id === 2
                    ? "bg-white text-black border-0"
                    : "bg-transparent text-white "
                } text-2xl h-10 w-10 color-black rounded-full hover:border-gray-400 border-gray-700 border-solid border`}
              >
                3
              </button>
            </li>
          </ul>
          {data.length === 0 || info === undefined ? (
            <p> Fetching Data... </p>
          ) : (
            <div className='px-6 md:px-[155px] xl:pr-32 xl:pl-20 xl:text-left'>
              <p className='uppercase subheading2 mb-3 text-sm md:mb-6 md:text-lg'>
                the technology...
              </p>
              <h5 className='uppercase text-white subheading1 tracking-[-2px] mb-3 md:mb-6 md:text-4xl md:tracking-wider'>
                {info.name}
              </h5>
              <p className='md:text-[17px] md:leading-8 '>{info.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Technology;
