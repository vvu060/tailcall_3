import GtU from '@site/static/icons/basic/gt-underscore.svg';

const features = [
  {
    id: 1,
    Svg: require('@site/static/images/home/orchestration.jpg').default,
    title: 'Orchestration',
    description1:
      "Harness the power of Tailcall's advanced orchestration primitives, designed for large-scale API management. Effortlessly interface with  ",
    highlightedText: 'gRPC, REST, GraphQL,',
    description2:
      ' and more, ensuring seamless communication and complex data transformations for enterprise operations.',
  },
  {
    id: 2,
    Svg: require('@site/static/images/home/orchestration.jpg').default,
    title: 'Governance',
    description1:
      'Implement robust governance and security across your API landscape using our ',
    highlightedText: 'code-based governance',
    description2:
      ' and comprehensive security framework. Enjoy precise control mechanisms that ensure compliance, standardization, operational consistency, and safeguard against evolving digital threats.',
  },
  {
    id: 3,
    Svg: require('@site/static/images/home/efficiency.jpg').default,
    title: 'Efficiency',
    description1:
      'Tailcall brings breakthrough performance optimizations, integrating ',
    highlightedText: 'enterprise-specific tuning ',
    description2:
      ' for high-speed and low-latency. Expect unmatched response times, lower resource utilization, and adaptability to your unique operational needs and workload demands.',
  },
  {
    id: 4,
    Svg: require('@site/static/images/home/resiliency.jpg').default,
    title: 'Resiliency',
    description1:
      'Engineered for enterprise resilience, Tailcall guarantees robust performance under any conditions. Our platform is designed for ',
    highlightedText: 'high availability and fault tolerance,',
    description2: ' ensuring uninterrupted service and reliability at scale.',
  },
  {
    id: 5,
    Svg: require('@site/static/images/home/extendability.jpg').default,
    title: 'Extendability',
    description1: "Tailcall's ",
    highlightedText: 'plugin-centric',
    description2:
      " extendability empowers enterprises to craft custom solutions. Design and integrate bespoke plugins that precisely fit your unique requirements, enhancing the platform's functionality to align with your specific business objectives.",
  },
];

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
