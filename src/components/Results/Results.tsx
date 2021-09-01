import React from 'react';
import Result from '../Result/Result';
import './Results.scss';

const Results: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap text-center bg-electric landscape:flex-col landscape:flex-nowrap Results">
      <Result type="rangeRemaining" />
      <Result type="totalRange" />
      <Result type="efficiency" />
    </div>
  );
};

export default Results;
