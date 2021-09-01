import React from 'react';
import Header from '../Header/Header';
import Calculator from '../Calculator/Calculator';
import Results from '../Results/Results';
import { CalculationsProvider } from '../../context/Calculations';
import './App.scss';

const App: React.FC = () => {
  // Initial values
  const calculations = {};

  return (
    <CalculationsProvider values={calculations}>
      <div className="w-full h-full App">
        <Header />
        <Calculator />
        <Results />
      </div>
    </CalculationsProvider>
  );
};

export default App;
