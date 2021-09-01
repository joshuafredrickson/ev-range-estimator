import React from 'react';

export interface ResultProps {
  type: 'remaining' | 'total' | 'efficiency';
  value?: number;
}

const Results: React.FC<ResultProps> = (props) => {
  return (
    <div
      className={`flex flex-col items-center justify-center landscape:w-full ${
        props.type === 'efficiency'
          ? 'bg-green-700 text-white h-auto w-full p-3'
          : 'text-gray-800 landscape:h-full w-1/2 p-6'
      }`}
    >
      <span
        className={`block whitespace-nowrap ${
          props.type === 'efficiency' ? 'text-xl' : 'text-3xl'
        }`}
      >
        {props.value ?? <>&ndash;</>} mi
        {props.type === 'efficiency' ? '/kwh' : ''}
      </span>
      {props.type === 'remaining' && <>Remaining</>}
      {props.type === 'total' && <>Total Range</>}
    </div>
  );
};

export default Results;
