import React, { useState } from 'react';

import { RiMenuLine, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='w-full h-28 bg-[#02010a]'>
      <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
        <div>
          <h1 className='text-[#6fffe9] px-6'>DEFI</h1>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex items-center text-white'>
            <li>
              <a href='#footer'>About</a>
            </li>
            <li>
              <a href='#platform'>Platform</a>
            </li>
            <li>
              <a href='#devs'>Developers</a>
            </li>
            <li>
              <a href='#join'>Community</a>
            </li>
            <button className='ml-4'>Use DEFI</button>
          </ul>
        </div>
        <div onClick={handleNav} className='block md:hidden px-6'>
          {nav ? (
            <RiCloseLine size={30} className='text-white' />
          ) : (
            <RiMenuLine size={30} className='text-white' />
          )}
        </div>
        <div
          className={
            nav
              ? 'w-full bg-[#02010a] text-white text-2xl absolute top-28 left-0 flex justify-center text-center h-full'
              : 'absolute left-[-100%]'
          }
        >
          <ul>
            <li>Platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
            <button className='m-8 text-xl'>Use DEFI</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
