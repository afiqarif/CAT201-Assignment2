import React from 'react';
import { useParams } from 'react-router-dom';
import { FoodBeverage } from './Food_info'; // Ensure this path is correct

const Food_details = () => {
  const { id } = useParams();

  // Find food item by matching slugified title
  const food = FoodBeverage.find(
    (food) => food.title.replace(/\s+/g, '-').toLowerCase() === id.toLowerCase()
  );

  if (!food) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-semibold text-gray-800">Food not found!</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full h-96">
          <img
            src={food.image } // Default fallback image
            alt={food.title}
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>

        {/* Food Details Section */}
        <div className="p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{food.title}</h1>
          <p className="text-lg text-gray-700 mb-6">{food.description}</p>

          {/* Rating Section */}
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-2xl mr-2">
              {"⭐".repeat(Math.floor(food.rating))}
            </span>
            <p className="text-lg font-semibold text-gray-800">
              {food.rating} / 5
            </p>
          </div>

          {/* Rating Source */}
          <p className="text-sm text-gray-600 mb-6">
            Rating source: <span className="italic">{food.ratingSource}</span>
          </p>

          {/* Additional Information */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Additional Information
          </h2>
          <p className="text-gray-700">
            Experience the culinary delights of {food.title}, one of the finest offerings from Penang. Whether you are a local or a visitor, this dish promises an unforgettable taste experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Food_details;
