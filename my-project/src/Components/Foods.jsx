import React from 'react'

const meals = [
    {
        image: '/Images/Nasi Kandar.jpg',
        title: 'goergetown',
        description: 'The city of light draws thousand of visitors every year with its unforgettable'
    },
    {
        image: '/Images/Nasi kerabu.jpg',
        title: 'butterworth',
        description: 'The city of light draws thousand of visitors every year with its unforgettable'
    },
    {
        image: '/Images/Rojak.jpg',
        title: 'bukit mertajam',
        description: 'The city of light draws thousand of visitors every year with its unforgettable'
    },
    {
        image: '/Images/Laksa.jpg',
        title: 'bukit mertajam',
        description: 'The city of light draws thousand of visitors every year with its unforgettable'
    },

];


const Foods = () => {
  return (
    <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Delicious Foods</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {meals.map((meal, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
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
  )
}

export default Foods
