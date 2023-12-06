import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import '../css/custom.css';

import Banner from '../components/home/Banner';
import Partners from '../components/home/Partners';
import LegacyGateway from '../components/home/LegacyGateway';
import Features from '../components/home/Features';
import MoreFeatures from '../components/home/MoreFeatures';
import Graph from '../components/home/Graph';
import Discover from '../components/shared/Discover';
import Footer from '../components/shared/Footer';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title='Tailcall'
      description='A cloud native solution to streamline API management across edge, middle, and service layers.'
    >
      <div className='font-space-grotesk'>
        <Banner />
        <Partners />
        <LegacyGateway />
        <Features />
        <MoreFeatures />
        <Graph />
        <Discover />
        <Footer />
      </div>
    </Layout>
  );
}
