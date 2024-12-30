import React from 'react'

const hotels = [
    {
        image: '/Images/eastern-oriental-hotel.jpg',
        title: 'Eastern & Oriental Hotel',
        description: 'The city of light draws thousand of visitors every year with its unforgettable'
    },
    {
        image: '/Images/eighty-eight-hotel.jpg',
        title: '88 Hotel',
        description: 'The city of light draws thousand of visitors every year with its unforgettable'
    },
    {
        image: '/Images/tune-hotel.jpg',
        title: 'Tune Hotel',
        description: 'The city of light draws thousand of visitors every year with its unforgettable'
    },
    {
        image: '/Images/roomies-penang.jpg',
        title: 'Roomies Hotel',
        description: 'The city of light draws thousand of visitors every year with its unforgettable'
    },

];


const Hotels = () => {
  return (
    <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Place to Stay</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {hotels.map((hotel, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
                        <img src={hotel.image} alt={hotel.title} className="w-full h-48 object-cover transform transition duration-300 hover:scale-110" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">{hotel.title}</h3>
                            <p className="text-gray-600">{hotel.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Hotels
