import { createContext, useContext, useState } from 'react';

interface Result {
  key: string;
  label: string;
  units: string;
  value: number;
}

interface Results {
  [index: string]: Result;
}

interface ResultsContextProps {
  results: Results;
  setResults: (results: Results) => void;
}

interface ResultsProviderProps {
  values: Results;
  children?: React.ReactNode;
}

const ResultsContext = createContext<ResultsContextProps>(
  {} as ResultsContextProps
);

export const ResultsProvider = ({
  values,
  children,
}: ResultsProviderProps): JSX.Element => {
  const [results, setResults] = useState<Results>(values);

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
