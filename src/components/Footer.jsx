import React from 'react';

const Footer = () => {
  return (
    <div className='bg-[#5b12c9] text-white text-center py-8'>
      <div className='max-w-[1240px] mx-auto px-4'>
        <div>
          <h3 className='font-bold text-xl border-b-4 border-[#6fffe9] inline-block mt-4'>
            Products
          </h3>
          <ul>
            <li>App</li>
            <li>Analytics</li>
            <li>Token List</li>
            <li>DEFI</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer
