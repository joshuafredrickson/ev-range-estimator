import React from 'react';
import Header from '../Header/Header';
import Calculator from '../Calculator/Calculator';
import Results from '../Results/Results';
import { CalculationsProvider } from '../../context/Calculations';
import { ResultsProvider } from '../../context/Results';
import './App.scss';

const App: React.FC = () => {
  // Initial values
  const calculations = {};
  const results = {};

  return (
    <CalculationsProvider values={calculations}>
      <ResultsProvider values={results}>
        <div className="w-full h-full App">
          <Header />
          <Calculator />
          <Results />
        </div>
      </ResultsProvider>
    </CalculationsProvider>
  );
};

export default App;
