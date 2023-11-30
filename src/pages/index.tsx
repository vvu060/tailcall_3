import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import '../css/custom.css';

import Banner from '../components/home/Banner';
import Partners from '../components/home/Partners';
import LegacyGateway from '../components/home/LegacyGateway';
import Features from '../components/home/Features';
import MoreFeatures from '../components/home/MoreFeatures';
import Graph from '../components/home/Graph';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <div className='font-space-grotesk'>
        <Banner />
        <Partners />
        <LegacyGateway />
        <Features />
        <MoreFeatures />
        <Graph />
      </div>
    </Layout>
  );
}
