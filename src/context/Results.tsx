import { createContext, useContext, useState } from 'react';

export interface ResultsProps {
  [index: string]:
    | {
        key: string;
        label: string;
        units: string;
        value: number;
      }
    | undefined;
}

export interface ResultsProviderProps {
  values: ResultsProps;
  children?: React.ReactNode;
}

export const ResultsContext = createContext<any>({});

export const ResultsProvider = ({
  values,
  children,
}: ResultsProviderProps): JSX.Element => {
  const [results, setResults] = useState<ResultsProps>(values);

  const providerValue = {
    results,
    setResults,
  };

  return (
    <ResultsContext.Provider value={providerValue}>
      {children}
    </ResultsContext.Provider>
  );
};

// eslint-disable-next-line
export const useResults = () => useContext(ResultsContext);
