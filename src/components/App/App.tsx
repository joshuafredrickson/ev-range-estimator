import React from 'react';
import Calculator from '../Calculator/Calculator';
import Results from '../Results/Results';
import './App.scss';

function App() {
  return (
    <div className="w-full h-full App">
      <Calculator/>
      <Results/>
    </div>
  );
}

export default App;
