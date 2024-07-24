import React from 'react';
import { green, ipad, laptop, headset } from '../../assets/index';
import '../../App.css';
function Home() {
  
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex items-center gap-1 justify-evenly mb-12">
        <div className='flex flex-col gap-4'>
          <img src={headset} alt="Headphones" className="w-16 h-16 sm:w-[200px] sm:h-[200px] shadow-lg transform -rotate-12 object-cover" />
          <img src={laptop} alt="Laptop" className="w-16 h-16 sm:w-[200px] sm:h-[150px] shadow-lg transform -rotate-12 object-cover" />
        </div>
        <div className="flex flex-col gap-4">
          <div>

          <h1 className="text-4xl font-bold subtext-with-image mb-2">Making a Difference Together!</h1>
          <p className="text-lg subtext-with-image">We are not just a business, we are a movement to protect our planet.</p>
          </div>
      <div className="flex justify-center space-x-16 mb-12">
        <div className="text-center">
          <p className="text-3xl font-bold subtext-with-image">66,253,200</p>
          <p className='subtext-with-image'>Liters water saved</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold subtext-with-image">36,770,526</p>
          <p className='subtext-with-image'>KG's of CO₂ saved</p>
        </div>
      </div>
        </div>
        <div className='flex flex-col gap-4'>
          <img src={laptop} alt="Tablet" className="w-16 h-16 sm:w-[200px] sm:h-[200px] shadow-lg transform rotate-12 object-cover" />
          <img src={ipad} alt="Green Logo" className="w-16 h-16 sm:w-[200px] sm:h-[150px] shadow-lg transform -rotate-14 object-cover" />
        </div>
      </header>


      <div className="bg-green-image p-6 rounded-lg text-white shadow-md mx-auto md:max-w-[60%]">
        <div className="flex items-center">
          <h2 className="text-4xl font-bold mr-6">10,000+</h2>
          <div className="h-16 border-l-2 border-white mx-6"></div>
          <p className="flex-1">
            We're proud to share that we've renewed 10,000+ products so far with the collective 
            efforts with our customers around world, and the sustainability impact has been remarkable. 
            We thank everyone for being a part of this mission.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;