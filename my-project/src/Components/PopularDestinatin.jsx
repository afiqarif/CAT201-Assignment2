import React from 'react'
import { useNavigate } from 'react-router-dom';

const destinations = [
    {
        image: '/Images/penang-hill.jpg',
        title: 'Penang Hill',
        description: 'Penang Hill, also known as Bukit Bendera, is a hill resort comprising a group of peaks near the center of Penang Island, Malaysia. Standing at 833 meters (2,733 feet) above sea level, it offers panoramic views of George Town and the surrounding area. The hill is accessible via the Penang Hill Railway, a funicular system that transports visitors to the summit. Attractions include nature trails, heritage bungalows, and diverse flora and fauna'
    },
    {
        image: '/Images/snake-temple.jpg',
        title: 'Snake Temple',
        description: 'The Snake Temple, or Temple of the Azure Cloud, is a Buddhist temple in Bayan Lepas, Penang, famous for its live pit vipers that are allowed to roam freely within the temple. Built in 1850, the temple is dedicated to the deity Chao Sua, who is believed to have healing powers. Visitors can witness the unique spectacle of snakes curled around the altars and other areas of the temple.'
    },
    {
        image: '/Images/escape-penang.jpg',
        title: 'ESCAPE Penang',
        description: 'Escape Penang is an exciting outdoor adventure park located in Teluk Bahang, Penang, offering a wide range of fun activities for all ages. The park features various thrilling attractions, including rope courses, water slides, zip lines, and an obstacle course. With a focus on eco-friendly adventure, Escape provides visitors with an immersive experience in nature, promoting both physical and mental challenges.'
    },
    {
        image: '/image/the-top.jpg',
        title: 'The Top Penang',
        description: 'The Top Penang is a modern entertainment complex located at the George Town heritage area. The tower offers spectacular views from its observation deck, and it features a wide variety of attractions, including a 3D art museum, digital wonderland, glass skywalk, and themed restaurants. Visitors can also enjoy an immersive experience at the Jurassic Research Center and other interactive exhibits.',
    },

];


const PopularDestinatin = () => {
    const navigate = useNavigate();
    
  return (
    <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {destinations.map((city, index) => (
                    <div key={index} 
                    className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group relative ${index % 3 === 1 ? 'col-span-1 mx-auto' : ''}`}
                      onClick={() => navigate(`/destination/${city.title.replace(/\s+/g, '-').toLowerCase()}`)}
                      >
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
