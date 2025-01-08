import React, { useRef } from 'react';
import PopularDestinatin from '../Components/PopularDestinatin';
import Foods from '../Components/Foods';
import Hotels from '../Components/Hotels';
import Historical from '../Components/Historical';

const Home = () => {
  const foodsRef = useRef(null);

  const handleScrollToFoods = () => {
    foodsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Video Background Section */}
      <div className="relative h-screen">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/CAT201-Assignment2/Images/video1.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Explore Penang with us
          </h1>
          <p className="text-lg md:text-2xl text-white mb-8">
            Discover amazing places around Penang
          </p>
          <button
            className="border text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-blue-500 transform transition duration-300 hover:scale-105"
            onClick={handleScrollToFoods}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Delicious Food Section */}
      <div ref={foodsRef}>
        <Foods />
      </div>

      {/* Other Sections */}
      <PopularDestinatin />
      <Hotels />
      <Historical />
    </>
  );
};

export default Home;
