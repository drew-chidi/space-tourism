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
    <div className='bgDMobile md:bgDTablet lg:bgDDesktop h-screen text-center'>
      <nav className='mb-6'>
        <Navbar />
      </nav>
      <div className='mb-8'>
        <h5 className='text-white tracking-[2.7px] text-lg flex justify-center'>
          <p className='mr-4 text-gray-500'>01</p> PICK YOUR DESTINATION
        </h5>
      </div>
      <div className='w-[170px] h-[170px] mx-auto mb-[26px]'>
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
      <div>
        <ul className='flex justify-center mb-5'>
          <li className='px-2'>
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
        <div>
          <div className='text-center px-6 mb-8'>
            <h3 className='text-white uppercase'>{details.name}</h3>
            <p className='border-b border-gray-400 pb-6'>
              {details.description}
            </p>
          </div>
          <div className='mb-8'>
            <p className='subheading2 mb-3'>AVG. DISTANCE</p>
            <p className='subheading1'>{details.distance}</p>
          </div>
          <div>
            <p className='subheading2 mb-3'>EST. TRAVEL TIME</p>
            <p className='subheading1'>{details.travel}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Destination;
