import { createContext, useContext, useState } from 'react';

interface Calculation {
  key: string;
  label: string;
  units: string;
  value: number;
}

interface Calculations {
  [index: string]: Calculation;
}

interface CalculationsContextProps {
  calculations: Calculations;
  setCalculations: (calculations: Calculations) => void;
}

interface CalculationsProviderProps {
  values: Calculations;
  children?: React.ReactNode;
}

const CalculationsContext = createContext<CalculationsContextProps>(
  {} as CalculationsContextProps
);

export const CalculationsProvider = ({
  values,
  children,
}: CalculationsProviderProps): JSX.Element => {
  const [calculations, setCalculations] = useState<Calculations>(values);

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
