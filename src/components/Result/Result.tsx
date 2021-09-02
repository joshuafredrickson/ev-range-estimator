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
    <section
      aria-label="Results"
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
          <>
            {result.value > 0 ? (
              Math.round((result.value + Number.EPSILON) * 100) / 100
            ) : (
              <>&ndash;</>
            )}
          </>
        ) : (
          <>{result.value > 0 ? Math.round(result.value) : <>&ndash;</>}</>
        )}{' '}
        {result.units}
      </span>
      {result.label}
    </section>
  );
};

export default Result;
