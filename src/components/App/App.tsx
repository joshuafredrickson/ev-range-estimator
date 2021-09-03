import React from 'react';
import Header from '../Header/Header';
import Calculator from '../Calculator/Calculator';
import Results from '../Results/Results';
import { SettingsProvider } from '../../context/Settings';
import { CalculationsProvider } from '../../context/Calculations';
import { ResultsProvider } from '../../context/Results';
import './App.scss';

const App: React.FC = () => {
  // Initial values
  const calculations = {};
  const results = {};
  const settings = {
    distanceUnits: 'mi',
  };

  return (
    <SettingsProvider values={settings}>
      <div className="w-full h-screen App">
        <Header />
        <CalculationsProvider values={calculations}>
          <ResultsProvider values={results}>
            <Calculator />
            <Results />
          </ResultsProvider>
        </CalculationsProvider>
      </div>
    </SettingsProvider>
  );
};

export default App;
