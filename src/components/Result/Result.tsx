import React from 'react';

export interface ResultProps {
  type: 'remaining' | 'total';
  value?: number;
}

const Results: React.FC<ResultProps> = (props) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-8 text-gray-800">
      <span className="block text-3xl whitespace-nowrap">
        {props.value ?? <>&ndash;</>} mi
      </span>
      {props.type === 'remaining' && (
        <>
          Est. Range
          <br />
          Remaining
        </>
      )}
      {props.type === 'total' && (
        <>
          Est. Total
          <br />
          Range
        </>
      )}
    </div>
  );
};

export default Results;
