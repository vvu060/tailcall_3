import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Banner from '../components/home/Banner';

import '../css/custom.css';
import Partners from '../components/home/Partners';

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
      </div>
    </Layout>
  );
}
