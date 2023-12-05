import { features } from '@site/src/constants';
import GtU from '@site/static/icons/basic/gt-underscore.svg';

const Feature = ({ feature }) => {
  return (
    <div
      key={feature.id}
      className='text-tailCall-dark-500 max-w-6xl mx-auto my-20'
    >
      <div className='flex space-x-2 -ml-10'>
        <GtU />
        <h5 className='text-display-small '>{feature.title}</h5>
      </div>

      <div
        className='flex p-10 justify-between shadow-xl rounded-[20px] relative'
        style={{
          backgroundImage: `url(${
            require('@site/static/images/home/grid.jpg').default
          })`,
          boxShadow: '0px 0px 0px 3px #F3F4F7',
        }}
      >
        <div className='bg-gradient-to-b from-tailCall-light-100 from-3% via-[#E4E5E9] via-67% to-tailCall-light-100 absolute -left-6 w-[2px] h-full' />
        <p className='text-content-medium max-w-md'>
          <span>{feature.description1}</span>
          <span className='text-title-small bg-tailCall-yellow rounded-md px-1'>
            {feature.highlightedText}
          </span>
          <span>{feature.description2}</span>
        </p>
        <div className='mt-32'>
          <img src={feature.Svg} alt={feature.title} />
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className='space-y-24 mb-24'>
      {features.map((feature) => (
        <Feature feature={feature} key={feature.id} />
      ))}
    </section>
  );
};

export default Features;
