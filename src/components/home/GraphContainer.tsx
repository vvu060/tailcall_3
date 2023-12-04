import CountUp from 'react-countup';

type GraphContainerProps = {
  metricTitle: string;
  metricData: number;
  metricDesc: string;
};

const GraphContainer = ({
  metricTitle,
  metricData,
  metricDesc,
}: GraphContainerProps) => {
  return (
    <div
      style={{
        border: '1px solid #2C2C2C',
      }}
      className='border border-red-500 h-[400px] max-w-2xl rounded-[32px]'
    >
      <div className='flex flex-col px-12 py-8'>
        <span className='text-content-medium text-tailCall-light-100'>
          {metricTitle}
        </span>
        <span className='text-title-large text-tailCall-light-100'>
          <CountUp
            start={2000}
            end={+metricData}
            decimals={2}
            duration={0.75}
          />
        </span>
        <span className='text-content-small text-tailCall-light-400'>
          {metricDesc}
        </span>
      </div>
    </div>
  );
};

export default GraphContainer;
