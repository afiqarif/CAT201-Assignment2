import React from 'react'
import { Outdoors, Historicals } from '../Components/Destination/Outdoors'

const Destination = () => {
  return (
    <>
    <div className='relative h-96 bg-cover bg-center'
    style={{backgroundImage: "url(/image/destination-bg.jpg)"}}>
      <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
        <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Destination</h1>
        <p className='text-lg nd:text-2xl text-white mb-8'>Check out these interesting destinations!</p>
        <button className='border text-white px-6 py-2 rounded-full text-lg md:text-xl 
       hover:bg-blue-500 transform transition duration-300 hover:scale-105'>Get Started</button>
      </div>
    </div>
    <Outdoors/>
    <Historicals/>
    </>
  )
}

export default Destination