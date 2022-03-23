import React from 'react';
import {
  RiBuilding3Fill,
  RiDatabase2Fill,
  RiRotateLockFill,
  RiSafeFill
} from 'react-icons/ri';
import Cards from './Cards';

const About = () => {
  return (
    <div className='w-full bg-black text-white text-center'>
      <div className='max-w-[1240px] mx-auto px-4 py-16'>
        <div>
          <h1 className='py-4'>A Growing Protocol Ecosystem</h1>
          <p className='p-4 text-xl'>
            The Defi protocol system empowers developers, liquidity providers,
            and traders to participate in a financial marketplace that is open
            and accessible to all.
          </p>

          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 tracking-wider py-4'>
            <Cards
              icon={<RiBuilding3Fill size={35} />}
              heading='Reliable, tamper-proof network'
              text='Use decentralization, trusted nodes, premium data, and
        cryptographic proofs to connect highly accurate and available
        data/APIs to any smart contract.'
            />

            <Cards
              icon={<RiDatabase2Fill size={35} />}
              heading='Seamless connection to any API'
              text='Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain.'
            />
            <Cards
              icon={<RiRotateLockFill size={35} />}
              heading='Proven, ready-made solutions'
              text='Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications.'
            />
            <Cards
              icon={<RiSafeFill size={35} />}
              heading='Secure off-chain computation'
              text='Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers.'
            />
          </div>
          <button className='m-8 w-40 text-xl'>Use Defi</button>
        </div>
      </div>
    </div>
  );
};

export default About;
