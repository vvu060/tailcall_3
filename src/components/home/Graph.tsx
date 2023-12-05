import Button from '../shared/Button';
import ChooseTailcall from './ChooseTailcall';
import GraphContainer from './GraphContainer';

const Graph = () => {
  return (
    <section className='bg-tailCall-dark-700 h-full w-full text-tailCall-light-100'>
      <div className='max-w-7xl mx-auto py-20'>
        <div className='flex items-center justify-between'>
          <h5 className='text-display-medium max-w-lg'>
            Platform made for performance.
          </h5>
          <Button title='View on Github' onClick={() => {}} theme='gray' />
        </div>

        {/* Graphs */}
        <div className='flex gap-10 items-center w-full'>
          <GraphContainer
            metricData={2890.68}
            metricTitle='Requests/sec'
            metricDesc='(Higher is better)'
          />
          <GraphContainer
            metricData={34.69}
            metricTitle='Latency (ms)'
            metricDesc='(Lower is better)'
          />
        </div>

        <ChooseTailcall />
      </div>
    </section>
  );
};

export default Graph;
