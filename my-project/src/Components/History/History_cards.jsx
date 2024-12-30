import React from 'react';

const HistoryCards = ({ arr, title }) => {
    return (
        <div className="py-8">
            <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {arr.map((event, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
                    >
                        <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">
                                {event.title}
                            </h3>
                            <p className="text-gray-600 text-sm text-justify line-clamp-3">
                                {event.description.slice(0, 100)}...
                            </p>
                            <button
                                className="block mx-auto mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                onClick={() => alert(event.description)}
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HistoryCards;