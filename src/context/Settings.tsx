import { createContext, useContext, useState } from 'react';

interface Settings {
  [index: string]: string;
}

interface SettingsContextProps {
  settings: Settings;
  setSettings: (settings: Settings) => void;
}

interface SettingsProviderProps {
  values: Settings;
  children?: React.ReactNode;
}

const SettingsContext = createContext<SettingsContextProps>(
  {} as SettingsContextProps
);

export const SettingsProvider = ({
  values,
  children,
}: SettingsProviderProps): JSX.Element => {
  const [settings, setSettings] = useState<Settings>(values);

  const providerValue = {
    settings,
    setSettings,
  };

  return (
    <SettingsContext.Provider value={providerValue}>
      {children}
    </SettingsContext.Provider>
  );
};

// eslint-disable-next-line
export const useSettings = () => useContext(SettingsContext);
