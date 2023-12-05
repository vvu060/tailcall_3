import { moreFeatures } from '@site/src/constants';
import Button from '../shared/Button';

const FeatureBox = ({ feature }) => {
  return (
    <div
      style={{
        borderBottom: '1px solid #E4E4E4',
      }}
      className='flex items-center space-x-4 text-title-medium text-tailCall-dark-500 h-32 w-full border border-tailCall-dark-300'
    >
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
        <div className='grid grid-cols-2 my-16 gap-x-10'>
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
