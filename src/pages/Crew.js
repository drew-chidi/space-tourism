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
    <div className='bgCMobile md:bgCTablet lg:bgCDesktop h-screen text-center'>
      <nav className='mb-6'>
        <Navbar />
      </nav>
      <div className='mb-8'>
        <h5 className='text-white tracking-[2.7px] text-lg flex justify-center'>
          <p className='mr-4 text-gray-500'>02</p> MEET YOUR CREW
        </h5>
      </div>
      <div className='w-[327px] h-[223px] mx-auto mb-[26px] flex justify-center border-b border-gray-600'>
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
      <div>
        <ul className='flex justify-center mb-5'>
          <li className='px-2'>
            <button
              id='0'
              onClick={crewHandler}
              className={`${
                id === 0 ? "bg-white" : "hover:bg-gray-500 bg-gray-800"
              }  w-3 h-3 rounded-full `}
            ></button>
          </li>
          <li className='px-2'>
            <button
              id='1'
              onClick={crewHandler}
              className={`${
                id === 1 ? "bg-white" : "hover:bg-gray-500 bg-gray-800"
              }  w-3 h-3  rounded-full `}
            ></button>
          </li>
          <li className='px-2'>
            <button
              id='2'
              onClick={crewHandler}
              className={`${
                id === 2 ? "bg-white" : "hover:bg-gray-500 bg-gray-800"
              }  w-3 h-3  rounded-full `}
            ></button>
          </li>
          <li className='px-2'>
            <button
              id='3'
              onClick={crewHandler}
              className={`${
                id === 3 ? "bg-white" : "hover:bg-gray-500 bg-gray-800"
              }  w-3 h-3 rounded-full`}
            ></button>
          </li>
        </ul>
        {data.length === 0 || info === undefined ? (
          <p> Fetching Data </p>
        ) : (
          <div className='px-6'>
            <p className='uppercase subheading1 text-gray-500 text-xl mb-2'>
              {info.role}
            </p>
            <h5 className='uppercase text-white subheading1 tracking-[-2px] mb-3 '>
              {info.name}
            </h5>
            <p>{info.bio}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Crew;
