import React from "react"
import terminal from '../assets/terminal.png'

const Devs = () => {
  return (
    <div className='w-full text-white bg-[#02010a]'>
      <div className='max-w-[1240px] mx-auto px-4 py-4 md:py-8 md:flex'>
        <div className='px-8'>
          <h1>Superpowers for DEFI developers.</h1>
          <p className='py-4'>
            Checkout the <span className='text-[#6fffe9]'>documentation</span>,
            the <span className='text-[#6fffe9]'>quick start</span> or a guide
            below to integrate your project with thousands of tokens and
            billions of liquidity.
          </p>
        </div>
        <div className='flex justify-center w-full py-4'>
          <img
            className='max-w-[300px] shadow-xl shadow-emerald-200/100'
            src={terminal}
            alt='/'
          />
        </div>
      </div>
    </div>
  );
}

export default Devs
