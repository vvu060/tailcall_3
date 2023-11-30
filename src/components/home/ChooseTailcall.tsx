const chooseTailcall = [
  {
    id: 1,
    title: 'Top developer experience',
    description:
      'Design your APIs, with syntax highlighting and lint checks within your favourite IDE.',
    Image: require('@site/static/icons/basic/experience.svg').default,
  },
  {
    id: 2,
    title: 'Performance',
    description:
      'Get performance that’s higher than your hand optimized implementation',
    Image: require('@site/static/icons/basic/performance.svg').default,
  },
  {
    id: 3,
    title: 'Scale Fearlessly',
    description:
      'Leverage built-in best practices that guarantee robustness at any scale.',
    Image: require('@site/static/icons/basic/scale.svg').default,
  },
];

const ChooseTailcall = () => {
  return (
    <>
      <p className='text-display-medium text-center my-10'>
        More reasons to chose tailcall.
      </p>
      <div className='flex items-center justify-between space-x-6'>
        {chooseTailcall.map((item) => (
          <div
            className='max-w-md rounded-3xl p-4'
            // TODO: Tailwind border not getting applied
            style={{
              border: '1px solid #2C2C2C',
            }}
          >
            <div className='w-full h-full'>
              <item.Image />
            </div>
            <p className='text-title-large mt-10'>{item.title}</p>
            <p className='text-content-small text-tailCall-light-600'>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChooseTailcall;
