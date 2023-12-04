import Button from '../shared/Button';
import ChooseTailcall from './ChooseTailcall';

const Graph = () => {
  return (
    <section className='bg-tailCall-dark-700 h-full w-full text-tailCall-light-100'>
      <div className='max-w-7xl mx-auto py-20'>
        <div className='flex items-center justify-between'>
          <h5 className='text-display-medium max-w-lg'>
            Platform made for performance.
          </h5>
          <Button title='View on Github' onClick={() => {}} theme='dark' />
        </div>

        {/* Graphs */}

        <ChooseTailcall />
      </div>
    </section>
  );
};

export default Graph;
