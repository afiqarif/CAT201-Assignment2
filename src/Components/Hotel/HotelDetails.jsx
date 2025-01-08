import React from 'react';
import { useParams } from 'react-router-dom';
import { LuxuryHotels, BoutiqueHotels, BudgetHotels } from './hotel_info'; // Updated path

const HotelDetails = () => {
  const { id } = useParams();

  // Combine all hotel arrays for lookup
  const allHotels = [...LuxuryHotels, ...BoutiqueHotels, ...BudgetHotels];
  const hotel = allHotels.find((hotel) => hotel.title.replace(/\s+/g, '-').toLowerCase() === id); // Match slugified title

  if (!hotel) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-semibold text-gray-800">Hotel not found!</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Full-screen image */}
        <div className="relative w-full h-96">
          <img
            src={hotel.image}
            alt={hotel.title}
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>

        {/* Hotel Details Section */}
        <div className="p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{hotel.title}</h1>
          <p className="text-lg text-gray-700 mb-6">{hotel.description}</p>
          
          {/* Rating Section */}
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-2xl mr-2">{"⭐".repeat(Math.floor(hotel.rating))}</span>
            <p className="text-lg font-semibold text-gray-800">
              {hotel.rating} / 5
            </p>
          </div>
          
          {/* Location Section */}
          <p className="text-lg font-semibold text-gray-800 mb-6">
            <strong>Location:</strong> {hotel.location}
          </p>

          <p className="text-sm text-gray-600 mb-6">
            Rating source: <span className="italic">{hotel.ratingSource}</span>
          </p>

          {/* Facilities Section */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Facilities</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            {hotel.facilities.map((facility, index) => (
              <li key={index}>{facility}</li>
            ))}
          </ul>

          {/* Dining Options */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dining Options</h2>
          <table className="w-full table-auto text-left mb-6">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-gray-800 font-medium">Type</th>
                <th className="px-4 py-2 text-gray-800 font-medium">Availability</th>
              </tr>
            </thead>
            <tbody>
              {hotel.diningOptions.map((option, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{option.name}</td>
                  <td className="px-4 py-2">{option.available}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Additional Information Section */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Additional Information
          </h2>
          <p className="text-gray-700 mb-6">
            Whether you are traveling for business or leisure, {hotel.title} provides an exceptional experience tailored to your needs. Enjoy premium amenities, personalized services, and an unforgettable stay in Penang.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
