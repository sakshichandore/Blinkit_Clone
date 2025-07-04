import React from 'react';
import BannerImg from "../assets/banner.jpeg";

const Banner = () => {
  return (
    <div className="w-full my-6 px-4">
        <div className="relative rounded-xl overflow-hidden shadow-lg">
             <img src={BannerImg} alt="Banner Image" className="w-full h-60 md:h-80 object-cover" />
             <div className="absolute inset-0 bg-black opacity-35 flex flex-col justify-center items-start p-6">
                <h2 className="text-white text-3xl md:text-5xl font-bold mb-2">
                    Get Your Groceries <br/> delivered in 10 minutes
                </h2>
                <p className="text-white text-lg md:text-xl mb-4">Freash & Fast Delivery at doorstep ! </p>
                <button className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600">Shop Now</button>
             </div>
        </div> 
      
    </div>
  );
};

export default Banner;
