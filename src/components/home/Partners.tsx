import Marquee from 'react-fast-marquee';
import GtU from '@site/static/icons/basic/gt-undescore-gray.svg';

const partnerImages = [
  {
    id: 1,
    name: 'Digital Ocean',
    Svg: require('@site/static/icons/companies/digital-ocean.svg').default,
  },
  {
    id: 2,
    name: 'Vercel',
    Svg: require('@site/static/icons/companies/vercel.svg').default,
  },
  {
    id: 3,
    name: 'Fastly',
    Svg: require('@site/static/icons/companies/fastly.svg').default,
  },
  {
    id: 4,
    name: 'Cloud Flare',
    Svg: require('@site/static/icons/companies/cloudflare.svg').default,
  },
  {
    id: 5,
    name: 'AWS',
    Svg: require('@site/static/icons/companies/aws.svg').default,
  },
  {
    id: 6,
    name: 'Google Cloud',
    Svg: require('@site/static/icons/companies/google-cloud.svg').default,
  },
  {
    id: 7,
    name: 'Fly',
    Svg: require('@site/static/icons/companies/fly-io.svg').default,
  },
];

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
