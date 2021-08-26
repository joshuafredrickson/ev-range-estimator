import React from 'react';
import './CalculatorItem.scss';

export interface CalculatorItemProps {
  type: 'batteryCapacity' | 'batteryStart' | 'batteryEnd' | 'distanceDriven';
}

const CalculatorItem: React.FC<CalculatorItemProps> = (props) => {
  const types = {
    batteryCapacity: {
      label: 'Total Battery Capacity',
      units: 'kwh',
    },
    batteryStart: {
      label: 'Battery at Beginning of Trip',
      units: '%',
    },
    batteryEnd: {
      label: 'Battery Remaining',
      units: '%',
    },
    distanceDriven: {
      label: 'Distance Driven',
      units: 'mi',
    },
  };

  return (
    <p className="flex flex-wrap mb-6 CalculatorItem">
      <span className="w-full">{types[props.type].label}</span>
      <span className="flex items-center w-full">
        <input
          type="number"
          className="w-full p-2 mr-2 text-lg bg-gray-700 border border-gray-900 rounded CalculatorItem__input"
        />
        <span className="CalculatorItem__unit">{types[props.type].units}</span>
      </span>
    </p>
  );
};

export default CalculatorItem;
