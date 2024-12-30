import React from 'react';
import {
  FoodBeverage,
  FoodDesc, 
} from '../Components/FoodBeverage/Food_info'; // Updated path
import Cards from '../Components/FoodBeverage/Food_cards'; // Updated path

const food = () => {
  return (
    <>
      <div
        className='relative h-96 bg-cover bg-center'
        style={{ backgroundImage: "url(/image/wallpaperfood.jpg)" }}
      >
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Food and Beverages in Penang</h1>
          <p className='text-lg md:text-2xl text-white mb-8'>
            Discover the best food and beverage to enjoy in Penang.
          </p>
        </div>
      </div>
      <Cards arr={FoodBeverage} title="Food and Beverages" desc={FoodDesc} />
    </>
  );
};

export default food;