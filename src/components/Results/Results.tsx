import React from 'react';
import Result from '../Result/Result';
import './Results.scss';

const Results: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap text-center bg-electric landscape:flex-col landscape:flex-nowrap Results">
      <Result type="remaining" value={30} />
      <Result type="total" value={124} />
      <Result type="efficiency" value={4.8} />
    </div>
  );
};

export default Results;
