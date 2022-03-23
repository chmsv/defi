import React from 'react';

const Cards = ({ icon, heading, text }) => {
  return (
    <div className='flex flex-col border text-left rounded-2xl mx-8 md:mx-1 py-12 px-8 hover:bg-[#5b12c9] hover:scale-105'>
      <div>
        <div className='bg-[#5b12c9] inline-flex p-2 rounded-full'>
          {icon}
        </div>
        <h3 className='text-xl font-bold py-4'>{heading}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Cards;
