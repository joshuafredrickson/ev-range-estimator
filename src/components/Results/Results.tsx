import React from 'react';
import Result from '../Result/Result';
import './Results.scss';

const Results: React.FC = () => {
  return (
    <div className="flex flex-row text-center bg-electric landscape:flex-col Results">
      <Result type="remaining" value={30} />
      <Result type="total" value={124} />
    </div>
  );
};

export default Results;
