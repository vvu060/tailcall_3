import Marquee from 'react-fast-marquee';
import GtU from '@site/static/icons/basic/gt-undescore-gray.svg';
import { partnerImages } from '@site/src/constants';

const Partners = () => {
  return (
    <section className='mt-8'>
      <div className='text-title-small text-tailCall-light-500 text-center space-x-1'>
        <GtU className='h-4 w-6' />
        <span>Our Cloud Partners</span>
      </div>
      <Marquee>
        <div className='flex space-x-16 mt-10 overflow-hidden'>
          {partnerImages.map((partner) => (
            <div key={partner.id} className='h-20'>
              <partner.Svg role='img' />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default Partners;
