import React from 'react'
import { useNavigate } from 'react-router-dom';

const hotels = [
    {
        image: '/Images/eastern-oriental-hotel.jpg',
        title: 'Eastern & Oriental Hotel',
        description: 'A timeless luxury hotel in George Town, Penang, offering colonial charm, elegant suites, and exceptional dining experiences with stunning waterfront views.'
    },
    {
        image: '/image/the-blue-mansion.jpg',
        title: 'The Blue Mansion',
        description: 'Step into history at The Blue Mansion, a UNESCO Heritage site offering exquisite boutique accommodations with timeless charm and culture.',
    },
    {
        image: '/image/roomies-penang.jpg',
        title: 'Roomies Penang',
        description: 'A cozy budget-friendly hotel located in Batu Ferringhi, offering comfortable rooms, free Wi-Fi, and easy access to the beach.',
    },
    {
        image: '/image/tune-hotel.jpg',
        title: 'Tune Hotel Georgetown',
        description: 'An affordable and convenient option in George Town, providing clean and comfortable rooms with a strategic location for exploring Penang.',
    },

];


const Hotels = () => {
    const navigate = useNavigate();
  return (
    <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Place to Stay</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {hotels.map((hotel, index) => (
                    <div 
                    key={index} 
                    className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group relative ${index % 3 === 1 ? 'col-span-1 mx-auto' : ''}`}
              onClick={() => navigate(`/hotel/${hotel.title.replace(/\s+/g, '-').toLowerCase()}`)} // Navigate using title
                    >
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
