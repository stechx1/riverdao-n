/* eslint-disable @next/next/no-img-element */
import React from 'react';

const paguPage = () => {
  return (
    <div className='container mx-auto my-16'>
      <div className='text-center'>
        <h2 className='text-2xl md:text-4xl font-bold max-w-[1000px] mx-auto'>
          Our mission is to make NFTs more accessible. Developed under the
          umbrella of River Dao, Pagu allows organizations to create web3-based
          marketing campaigns and distribute NFTs for free. We aim for
          simplicity. Using Pagu is as easy as connecting your wallet and
          entering your code.
        </h2>
        <img src='/images/nft-art-blockchain.png' alt='nft art' />
        <h2 className='text-2xl md:text-4xl font-bold max-w-[1000px] mx-auto'>
          To learn more about how to distribute your own NFTs, please contact
          us.
        </h2>
      </div>
    </div>
  );
};

export default paguPage;
