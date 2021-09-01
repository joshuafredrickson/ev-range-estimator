import { createContext, useContext, useState } from 'react';

export interface CalculationsProps {
  [index: string]:
    | {
        key: string;
        label: string;
        units: string;
        value: number;
      }
    | undefined;
}

export interface CalculationsProviderProps {
  values: CalculationsProps;
  children?: React.ReactNode;
}

export const CalculationsContext = createContext<any>({});

export const CalculationsProvider = ({
  values,
  children,
}: CalculationsProviderProps): JSX.Element => {
  const [calculations, setCalculations] = useState<CalculationsProps>(values);

  const providerValue = {
    calculations,
    setCalculations,
  };

  return (
    <CalculationsContext.Provider value={providerValue}>
      {children}
    </CalculationsContext.Provider>
  );
};

// eslint-disable-next-line
export const useCalculations = () => useContext(CalculationsContext);
