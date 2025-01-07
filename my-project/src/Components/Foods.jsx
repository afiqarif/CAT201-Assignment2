import React from 'react'
import { useNavigate } from 'react-router-dom';

const meals = [
    {
        image: '/image/nasikandarr.jpg',
        title: 'Nasi Kandar',
    description: 'A traditional Penang dish consisting of steamed rice served with a variety of flavorful curries and side dishes, originating from Indian Muslim cuisine.',

    },
    {
        image: '/image/charkoayteow.jpg',
        title: 'Char Koay Teow',
        description: 'A popular street food featuring stir-fried flat rice noodles cooked over high heat with prawns, Chinese sausage, eggs, and bean sprouts. It’s known for its smoky flavor called "wok hei".',
    },
    {
        image: '/image/pasembur.jpg',
        title: 'Pasembur',
        description: 'A Malaysian Indian salad consisting of shredded vegetables, fried tofu, prawn fritters, boiled eggs, and a spicy-sweet peanut sauce. This dish is a flavorful and satisfying street food favorite in Penang.',
    },
    {
        image: '/image/tehtarik.jpg',
        title: 'Teh Tarik',
        description: 'Malaysia’s national drink, this "pulled tea" is a frothy milk tea prepared by pouring the mixture between two containers for a creamy texture.',
    },

];


const Foods = () => {
    const navigate = useNavigate();

  return (
    <>
    <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Delicious Foods</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {meals.map((meal, index) => (
                    <div key={index} className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer
                    ${index % 3 === 1 ? 'col-span-1 mx-auto' : ''}`}
                    onClick={() => navigate(`/food/${meal.title.replace(/\s+/g, '-').toLowerCase()}`)}>
                        <img src={meal.image} alt={meal.title} className="w-full h-48 object-cover transform transition duration-300 hover:scale-110" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">{meal.title}</h3>
                            <p className="text-gray-600">{meal.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default Foods
