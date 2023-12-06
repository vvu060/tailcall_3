import { features } from '@site/src/constants';
import GtU from '@site/static/icons/basic/gt-underscore.svg';

const Feature = ({ feature }) => {
  return (
    <div
      key={feature.id}
      className='text-tailCall-dark-500 sm:max-w-6xl mx-7 sm:mx-auto my-0 sm:my-20'
    >
      <div className='flex items-center sm:space-x-2 sm:-ml-10 mb-6'>
        <GtU className='h-5 sm:h-7' />
        <h5 className='text-title-semi-large sm:text-display-small mb-0'>
          {feature.title}
        </h5>
      </div>

      <div
        className='flex flex-col sm:flex-row p-4 sm:p-10 justify-between shadow-xl rounded-[20px] relative ml-10 sm:ml-0'
        style={{
          backgroundImage: `url(${
            require('@site/static/images/home/grid.jpg').default
          })`,
          boxShadow: '0px 0px 0px 3px #F3F4F7',
        }}
      >
        <div className='bg-gradient-to-b from-tailCall-light-100 from-3% via-[#E4E5E9] via-67% to-tailCall-light-100 absolute -left-4 sm:-left-6 w-[2px] h-full' />
        <p className='text-content-tiny sm:text-content-medium max-w-md'>
          <span>{feature.description1}</span>
          <span className='text-content-tiny font-bold sm:text-title-small bg-tailCall-yellow rounded-[4px] sm:rounded-md px-1'>
            {feature.highlightedText}
          </span>
          <span>{feature.description2}</span>
        </p>
        <div className='sm:mt-32'>
          <img src={feature.Svg} alt={feature.title} />
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className='space-y-12 sm:space-y-24 mb-24'>
      {features.map((feature) => (
        <Feature feature={feature} key={feature.id} />
      ))}
    </section>
  );
};

export default Features;
