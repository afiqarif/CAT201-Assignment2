import React from 'react';
import {
  LuxuryHotels,
  BoutiqueHotels,
  BudgetHotels,
  LuxuryDesc,
  BoutiqueDesc,
  BudgetDesc,
} from '../Components/Hotel/hotel_info'; // Updated path
import Cards from '../Components/Hotel/Hotel_cards'; // Updated path

const hotel = () => {
  return (
    <>
      <div
        className='relative h-96 bg-cover bg-center'
        style={{ backgroundImage: "url(/image/bg-hotel.jpg)" }}
      >
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Hotels in Penang</h1>
          <p className='text-lg md:text-2xl text-white mb-8'>
            Discover the best places to stay in Penang, from luxury resorts to budget-friendly options.
          </p>
        </div>
      </div>
      <Cards arr={LuxuryHotels} title="Luxury Hotels" desc={LuxuryDesc} />
      <Cards arr={BoutiqueHotels} title="Boutique Hotels" desc={BoutiqueDesc} />
      <Cards arr={BudgetHotels} title="Budget Hotels" desc={BudgetDesc} />
    </>
  );
};

export default hotel;
