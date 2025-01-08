import React from 'react';

const HistoryCard = ({ event, onClick }) => {
    return (
        <div
            className="w-full bg-gray-100 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition duration-500 hover:scale-105"
            onClick={() => onClick(event)}
        >
            <img
                src={event.image}
                alt={event.title}
                className="w-full h-56 object-cover"
            />
            <h3 className="text-xl font-bold mt-2 text-center text-gray-800">{event.title}</h3>
        </div>
    );
};

export default HistoryCard;
