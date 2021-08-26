import React from 'react';
import Header from '../Header/Header';
import Calculator from '../Calculator/Calculator';
import Results from '../Results/Results';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="w-full h-full App">
      <Header />
      <Calculator />
      <Results />
    </div>
  );
};

export default App;
