import Button from '../shared/Button';

const moreFeatures = [
  {
    id: 1,
    title: 'Powerful Batching Primitive',
    logo: require('@site/static/icons/basic/clock.svg').default,
  },
  {
    id: 2,
    title: 'Extensions with plugins and JS support',
    logo: require('@site/static/icons/basic/clock.svg').default,
  },
  {
    id: 3,
    title: 'Field based Authentication & Authorisation',
    logo: require('@site/static/icons/basic/clock.svg').default,
  },
  {
    id: 4,
    title: 'Protocol agnostic',
    logo: require('@site/static/icons/basic/clock.svg').default,
  },
  {
    id: 5,
    title: 'Performance',
    logo: require('@site/static/icons/basic/clock.svg').default,
  },
  {
    id: 6,
    title: 'Security',
    logo: require('@site/static/icons/basic/lock.svg').default,
  },
  {
    id: 7,
    title: 'Edge Compatible',
    logo: require('@site/static/icons/basic/puzzle.svg').default,
  },
  {
    id: 8,
    title: 'Compile time tracks',
    logo: require('@site/static/icons/basic/clock.svg').default,
  },
];

const FeatureBox = ({ feature }) => {
  return (
    <div className='flex items-center space-x-4 text-title-medium text-tailCall-dark-500 h-32 w-full border border-tailCall-dark-300'>
      <feature.logo className='w-8 h-8' />
      <span>{feature.title}</span>
    </div>
  );
};

const MoreFeatures = () => {
  return (
    <section className='w-full mb-20'>
      <div className='max-w-7xl mx-auto text-center'>
        <h5 className='text-display-small text-tailCall-dark-500'>
          There’s so much more.
        </h5>
        <div className='grid grid-cols-2 my-16 gap-1'>
          {moreFeatures.map((feature) => (
            <FeatureBox feature={feature} key={feature.id} />
          ))}
        </div>
        <Button title='View More' onClick={() => {}} theme='light' />
      </div>
    </section>
  );
};

export default MoreFeatures;
