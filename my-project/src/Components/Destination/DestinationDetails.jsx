import React from 'react';
import { useParams } from 'react-router-dom';
import { Amusement_Arr, Historical_Arr, Outdoor_Arr } from './destination_info';

const DestinationDetail = () => {
  const { id } = useParams();

  // Combine all place arrays for lookup
  const allPlaces = [...Outdoor_Arr, ...Historical_Arr, ...Amusement_Arr];
  const place = allPlaces.find((place) => place.title.replace(/\s+/g, '-').toLowerCase() === id); // Match slugified title

  if (!place) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-semibold text-gray-800">Place not found!</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Full-screen image */}
        <div className="relative w-full h-96">
          <img
            src={place.image}
            alt={place.title}
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>

        {/* Place Details Section */}
        <div className="p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{place.title}</h1>
          <p className="text-lg text-gray-700 mb-6">{place.description}</p>
          
          {/* Rating Section */}
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-2xl mr-2">{"⭐".repeat(Math.floor(place.rating))}</span>
            <p className="text-lg font-semibold text-gray-800">
              {place.rating} / 5
            </p>
          </div>
          
          {/* Location Section */}
          <p className="text-lg font-semibold text-gray-800 mb-6">
            <strong>Location:</strong> {place.location}
          </p>

          <p className="text-sm text-gray-600 mb-6">
            Rating source: <span className="italic">{place.ratingSource}</span>
          </p>

          {/* Facilities Section */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Facilities</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            {place.facilities.map((facility, index) => (
              <li key={index}>{facility}</li>
            ))}
          </ul>
          
          {/* Additional Information Section */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Additional Information
          </h2>
          <p className="text-gray-700 mb-6">
            Whether you are traveling for business or leisure, {place.title} provides an exceptional experience tailored to your needs. Enjoy premium amenities, personalized services, and an unforgettable stay in Penang.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
