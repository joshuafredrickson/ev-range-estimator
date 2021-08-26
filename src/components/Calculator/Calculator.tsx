import React from 'react';
import CalculatorItem from '../CalculatorItem/CalculatorItem';
import './Calculator.scss';

const Calculator: React.FC = () => {
  return (
    <section className="flex flex-col justify-center p-2 text-white Calculator">
      <CalculatorItem type="batteryCapacity" />
      <div className="landscape:flex landscape:flex-row">
        <CalculatorItem type="batteryStart" />
        <CalculatorItem type="batteryEnd" />
      </div>
      <CalculatorItem type="distanceDriven" />
    </section>
  );
};

export default Calculator;
