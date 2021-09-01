import React, { useEffect } from 'react';
import { useCalculations } from '../../context/Calculations';
import CalculatorItem from '../CalculatorItem/CalculatorItem';
import './Calculator.scss';

const Calculator: React.FC = () => {
  const { calculations, setCalculations } = useCalculations();

  useEffect(() => {
    setCalculations({
      batteryCapacity: {
        key: 'batteryCapacity',
        label: 'Total Battery Capacity',
        units: 'kwh',
        value: 28.9, // Mini Cooper SE effective capacity
      },
      batteryStart: {
        key: 'batteryStart',
        label: 'Battery at Beginning of Trip',
        units: '%',
        value: 100,
      },
      batteryEnd: {
        key: 'batteryEnd',
        label: 'Battery Remaining',
        units: '%',
        value: 0,
      },
      distanceDriven: {
        key: 'distanceDriven',
        label: 'Distance Driven',
        units: 'mi',
        value: 0,
      },
    });
  }, []);

  useEffect(() => {
    if (!Object.keys(calculations).length) {
      return;
    }

    const batteryPercentage =
      (calculations.batteryStart.value - calculations.batteryEnd.value) / 100;
    const capacityUsed = batteryPercentage * calculations.batteryCapacity.value;
    const capacityRemaining = calculations.batteryCapacity.value - capacityUsed;
    const milesPerKwh = calculations.distanceDriven.value / capacityUsed;
    const milesRemaining = milesPerKwh * capacityRemaining;
    const totalRange = milesRemaining + calculations.distanceDriven.value;

    console.log(
      batteryPercentage,
      capacityUsed,
      capacityRemaining,
      milesPerKwh,
      milesRemaining,
      totalRange
    );
  }, [calculations]);

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
