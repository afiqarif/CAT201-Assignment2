import React from 'react'
import { useLocation } from 'react-router-dom'

const Detail_page = () => {
  const Location = useLocation();
  const { image, title, description } = Location.state || {};

  return (
    <>
      <div className='bg-gray-200'>
        <div className='py-20 mx-28'>
          <div className='flex justify-center items-center'>
            <img src={image} alt={title} className='rounded-lg mb-14 max-h-96'/>
          </div>
          <h1 className='text-center mb-4 font-bold text-4xl'>{title}</h1>
          <p className='text-center text-gray-700'>{description}</p>
        </div>
      </div>
    </>
  )
}

export default Detail_page