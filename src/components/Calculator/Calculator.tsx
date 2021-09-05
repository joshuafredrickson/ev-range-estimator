import React, { useEffect } from 'react';
import { useCalculations } from '../../context/Calculations';
import { useResults } from '../../context/Results';
import CalculatorItem from '../CalculatorItem/CalculatorItem';
import './Calculator.scss';

const Calculator: React.FC = () => {
  const { calculations, setCalculations } = useCalculations();
  const { results, setResults } = useResults();

  useEffect(() => {
    // TODO: Store these values
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
        units: 'distance',
        value: 0,
      },
    });

    setResults({
      efficiency: {
        key: 'efficiency',
        label: 'Efficiency',
        units: 'distance/kwh',
        value: 0,
      },
      rangeRemaining: {
        key: 'rangeRemaining',
        label: 'Remaining',
        units: 'distance',
        value: 0,
      },
      totalRange: {
        key: 'totalRange',
        label: 'Total Range',
        units: 'distance',
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
    const capacityRemaining =
      (calculations.batteryCapacity.value * calculations.batteryEnd.value) /
      100;
    const distancePerKwh = calculations.distanceDriven.value / capacityUsed;
    const rangeRemaining = distancePerKwh * capacityRemaining;
    const totalRange = calculations.batteryCapacity.value * distancePerKwh;

    setResults({
      efficiency: { ...results.efficiency, value: distancePerKwh },
      rangeRemaining: { ...results.rangeRemaining, value: rangeRemaining },
      totalRange: { ...results.totalRange, value: totalRange },
    });
  }, [calculations]);

  return (
    <form className="flex flex-col justify-center px-8 py-1 text-white Calculator">
      <CalculatorItem type="batteryCapacity" />
      <div className="flex flex-row -mx-4">
        <CalculatorItem type="batteryStart" />
        <CalculatorItem type="batteryEnd" />
      </div>
      <CalculatorItem type="distanceDriven" />
    </form>
  );
};

export default Calculator;
