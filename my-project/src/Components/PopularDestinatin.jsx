import React from 'react'

const destinations = [
    {
        image: '/Images/penang-hill.jpg',
        title: 'Penang Hill',
        description: 'The city of light draws thousand of visitors every year with its unforgettable'
    },
    {
        image: '/Images/snake-temple.jpg',
        title: 'Snake Temple',
        description: 'The city of light draws thousand of visitors every year with its unforgettable'
    },
    {
        image: '/Images/escape-penang.jpg',
        title: 'ESCAPE Penang',
        description: 'The city of light draws thousand of visitors every year with its unforgettable'
    },
    {
        image: '/Images/jerejak-island.jpg',
        title: 'Jerejak Island',
        description: 'The city of light draws thousand of visitors every year with its unforgettable'
    },

];


const PopularDestinatin = () => {
  return (
    <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Popular Destinattion</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {destinations.map((city, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
                        <img src={city.image} alt={city.title} className="w-full h-48 object-cover transform transition duration-300 hover:scale-110" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">{city.title}</h3>
                            <p className="text-gray-600">{city.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default PopularDestinatin
