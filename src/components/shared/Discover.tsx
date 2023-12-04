import BgTailcall from '@site/static/icons/basic/bg-tailcall.svg';
import Button from './Button';

const Discover = () => {
  return (
    <section>
      <div className='bg-tailCall-yellow relative flex items-center justify-center'>
        <div className='h-full'>
          <BgTailcall className='w-[90%]' />
        </div>

        <div className='flex flex-col items-center absolute max-w-2xl space-y-6'>
          <h5 className='text-display-medium text-center'>
            Discover the power of enterprise solution.
          </h5>

          <div className='flex space-x-6'>
            <Button theme='dark' title='Get in touch' onClick={() => {}} />
            <Button theme='light' title='Know More' onClick={() => {}} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
