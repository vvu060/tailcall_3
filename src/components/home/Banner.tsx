import React from 'react';
import Button from '../shared/Button';

const Banner = () => {
  return (
    <main>
      <div className='flex flex-col items-center text-center w-full mt-20'>
        <h1 className='text-display-large max-w-5xl'>
          API platform engineered for{' '}
          <span className='bg-tailCall-yellow rounded-2xl px-2'>scale</span>
        </h1>
        <p className='max-w-2xl text-content-large font-normal mt-4'>
          A cloud native solution to streamline API management across{' '}
          <span className='text-title-medium'>edge,&nbsp;</span>
          <span className='text-title-medium'>middle,&nbsp;</span>and{' '}
          <span className='text-title-medium'>service</span> layers.
        </p>
        <div className='mt-10 space-x-6'>
          <Button title='Get Started' onClick={() => {}} theme='dark' />
          <Button title='Learn More' onClick={() => {}} theme='light' />
        </div>
      </div>
    </main>
  );
};

export default Banner;
