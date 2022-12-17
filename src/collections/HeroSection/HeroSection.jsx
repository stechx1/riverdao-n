/* eslint-disable @next/next/no-img-element */
export const HeroSection = () => {
  return (
    // <div className='relative'>
    //   <h1 className='text-6xl font-bold text-center'>
    //     The World&apos;s #1 NFT <br /> Sharing Platform
    //   </h1>
    //   <img src='/images/pagu.png' alt='pagu' width={250} className="rotate-[-45deg] absolute top-0" />
    //   <img src='/images/crypto-blockchain.png' alt='pagu' width={300} className="absolute top-[-30px] right-0" />
    // </div>
    <div className='grid md:grid-cols-4 grid-cols-1'>
      <img
        src='/images/pagu.png'
        alt='pagu'
        width={250}
        className='rotate-[-45deg] hidden md:block'
      />
      <h1 className='text-6xl font-bold text-center col-span-2'>
        The World&apos;s #1 NFT <br /> Sharing Platform
      </h1>
      <div className="text-center">
        <img
          src='/images/crypto-blockchain.png'
          alt='pagu'
          width={300}
          className=''
        />
      </div>
    </div>
  );
};
