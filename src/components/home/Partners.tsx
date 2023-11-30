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
    <div className='flex space-x-16 mt-10 overflow-hidden'>
      {partnerImages.map((partner) => (
        <div key={partner.id} className='h-20'>
          <partner.Svg role='img' />
        </div>
      ))}
    </div>
  );
};

export default Partners;
