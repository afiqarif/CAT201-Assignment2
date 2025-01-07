import React from 'react'
import { FaInstagram, FaTiktok } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='bg-gray-800 p-4 text-white py-8'>
      <div className='container mx-auto px-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
            <h2 className="text-2xl font-bold mb-4">Visit penang</h2>
            <p className="mb-4">Penang, often referred to as the "Pearl of the Orient," is a vibrant state in Malaysia known for its rich history, 
                                cultural diversity, and culinary excellence. Located on the northwest coast of Peninsular Malaysia, it comprises 
                                Penang Island, where the capital city George Town is located, and a portion of the mainland known as Seberang Perai.
                                Thankyou for visit.
            </p>
        </div>
        <div>
            <h2 className="text-xl font-bold mb-4">Follow us</h2>
            <div className='flex space-x-4 mb-4'>
               <a
                href="https://www.instagram.com/travelpenang?igsh=MXd0bXcxbDBzYm5nZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600"
                aria-label="Instagram"
              >
                <FaInstagram size={24} className="text-pink-500 hover:text-pink-600"/>
              </a>
              <a
                href="https://www.tiktok.com/@visitpenang?_t=ZS-8sn7Sgibz0x&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
                aria-label="TikTok"
              >
                <FaTiktok size={24} className="text-white-500 hover:text-white-600"/>
              </a>
            </div>
            <form className="flex items-center justify-center mt-8">
                <input 
                type="text" 
                placeholder='Write your review' 
                className="w-full p-2 rounded-1-lg bg-gray-800 border border-gray-600"
                />
                <button
                    type="sumbit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-r-lg border border-blue-600"
                >Send</button>
            </form>
        </div>
      </div>
      </div>  
    </div>
  )
}

export default Footer