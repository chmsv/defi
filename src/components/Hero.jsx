import React from 'react';

import video from '../assets/video.mp4';

const Hero = () => {
  return (
    <div className='w-full h-[90vh] top-28'>
      <video
        className='object-cover h-full w-full absolute -z-10'
        src={video}
        autoPlay
        loop
        muted
      />
      <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
        <h1 className='text-3xl md:text-6xl tracking-wider'>Decentralized</h1>
        <h1 className='text-2xl md:text-4xl tracking-wider py-2 md:py-3 text-[#6fffe9]'>
          <a id='about'>Trading Protocol</a>
        </h1>
        <p className='text-xl py-4 px-4'>
          Guaranteed liquidity trading for millions of users and top Ethereum
          applications.
        </p>
        <div className='flex justify-center'>
          <button className='m-8 w-32'>Use Defi</button>
          <button className='m-8 w-32'>FAQ</button>
        </div>
      </div>
      <div>
        <p className='text-center text-white text-2xl font-bold'>
          Total Volume Secured: $42,104,783,662.47
        </p>
      </div>
    </div>
  );
};

export default Hero;
