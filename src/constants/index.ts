import MoreFeatures from '../components/home/MoreFeatures';

export const partnerImages: PartnerImage[] = [
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

export const features: Feature[] = [
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

export const moreFeatures: MoreFeatures[] = [
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

export const socials: Social[] = [
  {
    id: 1,
    name: 'github',
    image: require('@site/static/icons/companies/github-gray.svg').default,
    href: '/',
  },
  {
    id: 2,
    name: 'discord',
    image: require('@site/static/icons/companies/discord-gray.svg').default,
    href: '/',
  },
  {
    id: 3,
    name: 'linkedin',
    image: require('@site/static/icons/companies/linkedin-gray.svg').default,
    href: '/',
  },

  {
    id: 4,
    name: 'twitter',
    image: require('@site/static/icons/companies/twitter-gray.svg').default,
    href: '/',
  },
];
