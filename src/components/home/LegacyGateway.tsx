import GtU from '@site/static/icons/basic/gt-undescore-gray.svg';
import ApiImage from '@site/static/images/home/work-with-api.jpg';

const LegacyGateway = () => {
  return (
    <section className='w-full my-12'>
      <div className='max-w-7xl mx-auto my-20'>
        <div className='text-title-tiny text-tailCall-light-500 space-x-1'>
          <GtU className='h-4 w-6' />
          <span>The Problem</span>
        </div>
        <div className='flex items-center space-x-20'>
          <h3 className='text-display-small text-tailCall-dark-500 min-w-fit'>
            Where legacy
            <br />
            <span className='bg-tailCall-yellow px-2 rounded-2xl'>
              gateways fail?
            </span>
          </h3>

          <p className='text-content-medium text-tailCall-dark-500'>
            A legacy gateway limits operations to the API's route, method, or
            headers, leaving request and response bodies unaffected. Even on an
            enterprise plan, people are forced to write their own BFF solution
            or an API Orchestration Layer.
          </p>
        </div>
      </div>

      {/* TODO: image to be rendered here  */}
      <div className='w-full flex items-center justify-center'>
        <img
          src={ApiImage}
          alt='work with api'
          className='object-contain rounded-[40px]'
        />
      </div>
    </section>
  );
};

export default LegacyGateway;
