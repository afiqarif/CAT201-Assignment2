import React, { useState } from 'react';
import {
    SultanateHistory,
    BritishHistory,
    GoldenAgeHistory,
    WarHistory,
    RevivalHistory,
} from '../Components/History/history_info';

const History = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    // Combine all the history data into one array (ensure there are 5 events to display)
    const allHistory = [
        ...SultanateHistory,
        ...BritishHistory,
        ...GoldenAgeHistory,
        ...WarHistory,
        ...RevivalHistory,
    ];

    // Ensure we only take the first 5 items for the 3-2 design
    const firstRow = [allHistory[0], allHistory[1], allHistory[2]]; // 3 cards
    const secondRow = [allHistory[3], allHistory[4]]; // 2 cards

    const handleCardClick = (event) => {
        setSelectedEvent(event);
    };

    return (
        <>
            {/* Background Section */}
            <div
                className="relative h-96 bg-cover bg-center"
                style={{ backgroundImage: "url(/image/bg-history.jpg)" }}
            >
                <div className="absolute inset-0 bg-gray-600 bg-opacity-50 flex flex-col items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Penang History</h1>
                    <p className="text-lg md:text-2xl text-white mb-8">Discover the history of Penang</p>
                </div>
            </div>

            {/* Cards Section */}
            <div className="container mx-auto py-12 space-y-12">
                {/* First Row - 3 Cards in a row */}
                <div className="grid grid-cols-3 gap-12">
                    {firstRow.map((event, index) => (
                        <div
                            key={index}
                            className="w-full bg-gray-100 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition duration-500 hover:scale-105"
                            onClick={() => handleCardClick(event)}
                        >
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-56 object-cover"
                            />
                            <h3 className="text-xl font-bold mt-2 text-center text-gray-800">{event.title}</h3>
                        </div>
                    ))}
                </div>

                {/* Second Row - 2 Cards centered */}
                <div className="flex justify-center gap-12">
                    {secondRow.map((event, index) => (
                        <div
                            key={index}
                            className="w-80 bg-gray-100 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition duration-500 hover:scale-105"
                            onClick={() => handleCardClick(event)}
                        >
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-56 object-cover"
                            />
                            <h3 className="text-xl font-bold mt-2 text-center text-gray-800">{event.title}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Popup Section */}
            {selectedEvent && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="relative bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-3/5 lg:w-2/5 max-h-[90vh] overflow-y-auto">
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            onClick={() => setSelectedEvent(null)}
                        >
                            ✖
                        </button>
                        <h2 className="text-3xl font-bold mb-4 text-center">{selectedEvent.title}</h2>
                        <img
                            src={selectedEvent.image}
                            alt={selectedEvent.title}
                            className="rounded-lg mb-4 max-h-64 mx-auto"
                        />
                        <p className="text-gray-700 text-justify">{selectedEvent.description}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default History;
