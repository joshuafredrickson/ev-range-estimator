import React from 'react';
import { useCalculations } from '../../context/Calculations';
import './CalculatorItem.scss';

export interface CalculatorItemProps {
  type: 'batteryCapacity' | 'batteryStart' | 'batteryEnd' | 'distanceDriven';
}

const CalculatorItem = ({ type }: CalculatorItemProps): JSX.Element => {
  const { calculations, setCalculations } = useCalculations();
  const itemType = calculations
    ? calculations[type]
    : { key: '', label: '', units: '', value: 0 };

  const handleChange = (event: React.ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    const newState = {
      ...calculations,
      [itemType.key]: {
        ...itemType,
        value: parseFloat(value),
      },
    };

    setCalculations(newState);
  };

  return (
    <>
      {itemType && (
        <p className="flex flex-wrap w-full mb-6 CalculatorItem">
          <span className="w-full">{itemType.label}</span>
          <span className="flex items-center w-full">
            <input
              type="number"
              className="w-full p-2 mr-2 text-lg bg-gray-700 border border-gray-900 rounded CalculatorItem__input"
              min={0}
              max={itemType.units === '%' ? 100 : undefined}
              value={itemType.value}
              onChange={handleChange}
              onKeyPress={(event) => {
                if (!/[0-9.]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
            <span className="CalculatorItem__unit">{itemType.units}</span>
          </span>
        </p>
      )}
    </>
  );
};

export default CalculatorItem;
