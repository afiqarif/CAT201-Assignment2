import React from 'react'

const historical = [
    {
        image: '/image/sultanate.jpg',
        title: 'The Sultanate’s Quiet Beginnings',
        description: 'Before the 18th century, Penang Island thrived under the Sultanate of Kedah as a peaceful trading hub. Occasionally visited by Portuguese, Chinese, and British expeditions, its strategic location and natural harbor hinted at its untapped potential. However, rising tensions with Siam and Burma in the 1770s pushed the Sultan to seek foreign military support.',
    },
    {
        image: '/image/british-take-charge.jpg',
        title: 'The British Take Charge',
        description:
            'In 1786, Francis Light, a British explorer, secured Penang Island for the British East India Company as a strategic settlement. Renamed "Prince of Wales Island," Penang became the first British foothold in Southeast Asia. The bustling port town of George Town was established, laying the foundation for its growth as a major trading center.',
    },
    {
        image: '/image/modern-revival.jpg',
        title: 'Rebirth and Modern Revival',
        description: 'The 1970s marked Penang’s comeback with the creation of the Free Industrial Zone, enticing global corporations to set up operations. The 2008 UNESCO designation for George Town further cemented Penang’s role as a heritage and innovation hub, blending its rich past with a forward-looking vision.',
    },

];


const Historical = () => {
  return (
    <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Historical</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {historical.map((history, index) => (
                    <div 
                    key={index} 
                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
                        <img src={history.image} alt={history.title} className="w-full h-48 object-cover transform transition duration-300 hover:scale-110" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">{history.title}</h3>
                            <p className="text-gray-600">{history.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Historical
