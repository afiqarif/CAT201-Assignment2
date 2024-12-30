import React from 'react'
import { Outdoor_Arr, Historical_Arr } from './destination_info'

export const Outdoors = () => {
  return (
    <div className='py-12 bg-gray-100'>
      <div className='container mx-auto px-28'>
          <h3 className='text-3xl font-bold mb-8 text-center'>Outdoor Attractions</h3>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {Outdoor_Arr.map((place, index) => (
                <div key={index} className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer'>
                  <img src={place.image} alt={place.title} className='w-full h-48 object-cover
                  transform transition duration-300 hover:scale-110'/>
                  <div className='p-4'>
                    <h4 className='text-xl font-bold mb-2 text-center'>{place.title}</h4>
                    <p className='text-gray-600 text-justify'>{place.description}</p>
                  </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export const Historicals = () => {
  return (
    <div className='py-12 bg-gray-100'>
      <div className='container mx-auto px-28'>
          <h3 className='text-3xl font-bold mb-8 text-center'>Outdoor Attractions</h3>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {Historical_Arr.map((place, index) => (
                <div key={index} className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer'>
                  <img src={place.image} alt={place.title} className='w-full h-48 object-cover
                  transform transition duration-300 hover:scale-110'/>
                  <div className='p-4'>
                    <h4 className='text-xl font-bold mb-2 text-center'>{place.title}</h4>
                    <p className='text-gray-600 text-justify'>{place.description}</p>
                  </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}
  