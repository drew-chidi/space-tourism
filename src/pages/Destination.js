import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";

const Destination = () => {
  // api data state
  const [data, setData] = useState([]);
  // stores onClick button id
  const [id, setId] = useState(0);
  // processed data state for this page
  const [details, setDetails] = useState([]);

  // Image array
  let images = [moon, mars, europa, titan];

  // set the processed data and stores button click id
  const destinationHandler = (e) => {
    if (e === undefined) {
      setDetails(data[id]);
    } else {
      setId(parseInt(e.target.id));
      setDetails(data[parseInt(e.target.id)]);
      return id;
    }
  };

  const getData = (id) => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson.destinations);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    destinationHandler();
  });

  return (
    <div className='pb-14 bgDMobile md:bgDTablet lg:bgDDesktop w-screen min-h-screen text-center md:pb-16'>
      <nav className='mb-6 md:mb-10 xl:mb-[76px]'>
        <Navbar id='1' />
      </nav>
      <div className='mb-8 md:mb-14 xl:mb-16'>
        <h5 className='text-white tracking-[2.7px] text-lg flex justify-center md:justify-start md:pl-10 xl:pl-40'>
          <p className='mr-4 text-gray-500'>01</p> PICK YOUR DESTINATION
        </h5>
      </div>
      <div className='xl:flex xl:pl-56 xl:pr-40'>
        <div className='w-[170px] h-[170px] mx-auto mb-[26px] md:mb-14 xl:w-[445px] xl:h-[445px] xl:mr-[157px] xxl:pt-8 '>
          {data.length === 0 || details === undefined ? (
            <p> Image Loading... </p>
          ) : (
            <img
              src={images[id]}
              alt='Destination Image'
              className='max-w-full h-auto'
            />
          )}
        </div>
        <div className='text-left'>
          <div>
            <ul className='flex justify-center mb-5 md:mb-8 xl:justify-start'>
              <li className='px-2 xl:pl-0'>
                <button
                  id='0'
                  onClick={destinationHandler}
                  className={`${
                    id === 0
                      ? "border-b-2 border-white"
                      : "hover:border-b-2 hover:border-gray-500 border-transparent"
                  } border-b-2 `}
                >
                  MOON
                </button>
              </li>
              <li className='px-2'>
                <button
                  id='1'
                  onClick={destinationHandler}
                  className={`${
                    id === 1
                      ? "border-b-2 border-white"
                      : "hover:border-b-2 hover:border-gray-500 border-transparent"
                  } border-b-2 `}
                >
                  MARS
                </button>
              </li>
              <li className='px-2'>
                <button
                  id='2'
                  onClick={destinationHandler}
                  className={`${
                    id === 2
                      ? "border-b-2 border-white"
                      : "hover:border-b-2 hover:border-gray-500 border-transparent"
                  } border-b-2 `}
                >
                  EUROPA
                </button>
              </li>
              <li className='px-2'>
                <button
                  id='3'
                  onClick={destinationHandler}
                  className={`${
                    id === 3
                      ? "border-b-2 border-white"
                      : "hover:border-b-2 hover:border-gray-500 border-transparent"
                  } border-b-2 `}
                >
                  TITAN
                </button>
              </li>
            </ul>
          </div>
          {data.length === 0 || details === undefined ? (
            <p> Fetching Data </p>
          ) : (
            <div className='md:px-24 xl:px-0'>
              <div className='text-center px-6 mb-8 xl:text-left xl:p-0'>
                <h3 className='text-white uppercase xl:text-[6rem]'>
                  {details.name}
                </h3>
                <p className='pb-6 font-light border-b border-gray-600 md:tracking-tighter xl:text-[19.5px] xl:leading-10 xl:w-[445px]'>
                  {details.description}
                </p>
              </div>
              <div className='text-center md:flex justify-center xl:justify-start'>
                <div className='mb-8  md:px-10 xl:mr-10 xl:p-0'>
                  <p className='subheading2 mb-3'>AVG. DISTANCE</p>
                  <p className='subheading1 uppercase'>{details.distance}</p>
                </div>
                <div className='md:px-10 xl:p-0'>
                  <p className='subheading2 mb-3'>EST. TRAVEL TIME</p>
                  <p className='subheading1 uppercase'>{details.travel}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Destination;
