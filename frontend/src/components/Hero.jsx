import React from 'react';
import hero_image from '../assets/hero-phone.png';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className="flex h-[95vh] pt-24 pb-8 flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 sm:px-10 lg:px-16 px-8  lg:py-32">
      {/* Text Section */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-mainColor font-bold text-3xl sm:text-4xl lg:text-5xl leading-snug lg:leading-tight">
          Buy and Sell Phones <br /> With Ease!
        </h1>
        <p className="text-secondaryColor mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl w-full sm:w-[90%] lg:w-[80%] mx-auto lg:mx-0">
          Ajji-Lk connects you with a trusted community of buyers and sellers. Start browsing, or sell your phone in just a few clicks.
        </p>
        <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-6">
          <Link to={'/phones'}>
          <button className="bg-mainColor text-lightColor px-4 sm:px-6 py-2 rounded-md hover:opacity-85">
            Explore Phones
          </button>
          </Link>
          <Link to={'/sell-a-phone'}>
          <button className="bg-transparent border-2 border-mainColor text-mainColor px-4 sm:px-6 py-2 rounded-md hover:bg-mainColor hover:text-lightColor">
            Sell your phone
          </button>
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1">
        <img
          src={hero_image}
          alt="Hero Phone"
          className="w-full h-auto max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] mx-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
