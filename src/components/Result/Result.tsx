import React from 'react';
import { useResults } from '../../context/Results';

export interface ResultProps {
  type: 'rangeRemaining' | 'totalRange' | 'efficiency';
  value?: number;
}

const Result = ({ type }: ResultProps): JSX.Element => {
  const { results } = useResults();
  const result = results ? results[type] : null;

  if (!result) {
    return <></>;
  }

  return (
    <div
      className={`flex flex-col items-center justify-center landscape:w-full ${
        result.key === 'efficiency'
          ? 'bg-green-700 text-white h-auto w-full p-3'
          : 'text-gray-800 landscape:h-full w-1/2 p-6'
      }`}
    >
      <span
        className={`block whitespace-nowrap ${
          result.key === 'efficiency' ? 'text-xl' : 'text-3xl'
        }`}
      >
        {result.key === 'efficiency' ? (
          <>{Math.round((result.value + Number.EPSILON) * 100) / 100}</>
        ) : (
          <>{Math.round(result.value)}</>
        )}{' '}
        {result.units}
      </span>
      {result.label}
    </div>
  );
};

export default Result;
