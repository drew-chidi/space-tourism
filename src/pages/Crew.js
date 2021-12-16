import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import GetData from "../apiService/GetData";

import crew1 from "../assets/crew/image-douglas-hurley.png";
import crew2 from "../assets/crew/image-mark-shuttleworth.png";
import crew3 from "../assets/crew/image-victor-glover.png";
import crew4 from "../assets/crew/image-anousheh-ansari.png";

const Crew = () => {
  //api data state
  const [data, setData] = useState([]);
  // processed data state
  const [info, setInfo] = useState([]);
  // stores onClick id
  const [id, setId] = useState(0);

  // Image array
  let images = [crew1, crew2, crew3, crew4];

  // Registers button click and process data state
  const crewHandler = (e) => {
    if (e === undefined) {
      setInfo(data[id]);
      return 0;
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
        setData(items.crew);
      }
    });

    return () => (mounted = false);
  }, []);

  // Runs the function to set initial info
  useEffect(() => {
    crewHandler();
  });

  return (
    <div className='bgCMobile md:bgCTablet lg:bgCDesktop min-h-screen text-center pb-14 md:pb-0'>
      <nav className='mb-6 md:mb-10 xl:mb-[76px]'>
        <Navbar id='2' />
      </nav>
      <div className='mb-8 md:mb-14 xl:mb-16'>
        <h5 className='text-white tracking-[2.7px] text-lg flex justify-center md:justify-start md:pl-10 xl:pl-40'>
          <p className='mr-4 text-gray-500'>02</p> MEET YOUR CREW
        </h5>
      </div>
      <div className='md:flex md:flex-col-reverse xl:pl-40 xl:pr-36 xl:flex-row-reverse xl:justify-center xl:gap-8'>
        <div className='w-[327px] h-[223px] mx-auto mb-[26px] md:mb-0 flex justify-center border-b border-gray-600 md:border-0 md:w-[456px] md:h-[572px] xl:w-[568px] xxl:h-[712px] xl:mx-0 '>
          {data.length === 0 || info === undefined ? (
            <p> Image Loading... </p>
          ) : (
            <img
              src={images[id]}
              alt='Crew Image'
              className='max-w-full h-full'
            />
          )}
        </div>
        <div className='md:flex md:flex-col-reverse xl:justify-center '>
          <ul className='flex justify-center mb-5 xl:justify-start'>
            <li className='px-2'>
              <button
                id='0'
                onClick={crewHandler}
                className={`${
                  id === 0 ? "bg-white" : "hover:bg-gray-500 bg-gray-600"
                }  w-3 h-3 rounded-full `}
              ></button>
            </li>
            <li className='px-2'>
              <button
                id='1'
                onClick={crewHandler}
                className={`${
                  id === 1 ? "bg-white" : "hover:bg-gray-500 bg-gray-600"
                }  w-3 h-3  rounded-full `}
              ></button>
            </li>
            <li className='px-2'>
              <button
                id='2'
                onClick={crewHandler}
                className={`${
                  id === 2 ? "bg-white" : "hover:bg-gray-500 bg-gray-600"
                }  w-3 h-3  rounded-full `}
              ></button>
            </li>
            <li className='px-2'>
              <button
                id='3'
                onClick={crewHandler}
                className={`${
                  id === 3 ? "bg-white" : "hover:bg-gray-500 bg-gray-600"
                }  w-3 h-3 rounded-full`}
              ></button>
            </li>
          </ul>
          {data.length === 0 || info === undefined ? (
            <p> Fetching Data </p>
          ) : (
            <div className='px-6 md:px-[155px] xl:px-0 xl:text-left'>
              <p className='uppercase subheading1 text-gray-400 text-xl xmb-2 xl:mb-4 xl:text-3xl'>
                {info.role}
              </p>
              <h5 className='uppercase text-white subheading1 tracking-[-2px] mb-3 md:tracking-wider xl:text-[2.8rem] '>
                {info.name}
              </h5>
              <p className='md:mb-6 xl:w-[444px] xl:text-lg'>{info.bio}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Crew;
