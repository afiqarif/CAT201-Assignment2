import React from 'react'
import { 
  Outdoor_Arr, 
  Historical_Arr, 
  Amusement_Arr, 
  Outdoor_desc, 
  Historical_desc, 
  Amusement_desc 
} from '../Components/Destination/destination_info'
import Cards from '../Components/Destination/Destination_cards'

const Destination = () => {
  return (
    <>
    <div className='relative h-96 bg-cover bg-center'
    style={{backgroundImage: "url(/image/destination-bg.jpg)"}}>
      <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
        <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>
          Destination
        </h1>
        <p className='text-lg md:text-2xl text-white mb-8'>
          Check out these interesting destinations!
        </p>
      </div>
    </div>
    <Cards arr={Outdoor_Arr} title="Outdoor Attractions" desc={Outdoor_desc}/>
    <Cards arr={Historical_Arr} title="Historical Sites" desc={Historical_desc}/>
    <Cards arr={Amusement_Arr} title="Amusement Parks" desc={Amusement_desc}/>
    </>
  )
}

export default Destination
