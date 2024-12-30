import React from 'react';

const Cards = (props) => {
  return (
    <div className='py-12 bg-gray-200'>
      <div className='container mx-auto px-28'>
        <h3 className='text-3xl font-bold text-center'>
          {props.title}
        </h3>
        <p className='text-center mb-8'>
          {props.desc}
        </p>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
          {props.arr.map((place, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group relative ${
                index % 3 === 1 ? 'col-span-1 mx-auto' : '' // Center the second card in each row
              }`}
            >
              <div className='relative'>
                <img
                  src={place.image}
                  alt={place.title}
                  className='w-full h-48 object-cover transform transition duration-300 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition duration-300'>
                  <div className='p-4 text-white'>
                    <h4 className='text-xl font-bold mb-2'>{place.title}</h4>
                    <p className='text-gray-200 text-sm line-clamp-3'>
                      {place.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className='p-4'>
                <h4 className='text-xl font-bold mb-2 text-center'>{place.title}</h4>
                <p className='text-gray-600 text-justify line-clamp-3'>{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;