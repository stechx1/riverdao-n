import React from 'react';
import { Steps } from '../collections';

const StartCampaignPage = () => {
  return (
    <div className='container mx-auto'>
      <div className='text-center'>
        <h1 className='text-5xl font-bold my-16'>How to Start Your Own Campaign?</h1>
      </div>

      <section className='my-16'>
        <Steps />
      </section>
    </div>
  );
};

export default StartCampaignPage;
