import React from 'react'

const Join = () => {
  return (
    <div className='bg-[#02010a] text-white w-full px-4 py-16 text-center tracking-wider'>
      <div className='m-2'>
        <h1>Join Our DEFI Community</h1>
        <div className='py-4'>
          <input
            className='p-3 rounded-xl mr-4'
            type='email'
            placeholder='Enter your email'
          />
          <button>Sign Up</button>
        </div>
        <div className='md:flex md:items-center justify-center py-2'>
          <input className='mr-2' type='checkbox' />
          <p className='px-2'>Yes, I agree to receive email communications from DEFI.</p>
        </div>
      </div>
    </div>
  );
}

export default Join