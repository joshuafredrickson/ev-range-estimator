import React from 'react';
import { useSettings } from '../../context/Settings';
import { useCalculations } from '../../context/Calculations';
// import { hideOnscreenKeyboard } from 'oaf-side-effects';
import './CalculatorItem.scss';

export interface CalculatorItemProps {
  type: 'batteryCapacity' | 'batteryStart' | 'batteryEnd' | 'distanceDriven';
}

const CalculatorItem = ({ type }: CalculatorItemProps): JSX.Element => {
  const { settings } = useSettings();
  const { calculations, setCalculations } = useCalculations();

  const itemType = calculations
    ? calculations[type]
    : { key: '', label: '', units: '', value: 0 };

  const handleChange = (event: React.ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;

    if (value === '') {
      return;
    }

    const newState = {
      ...calculations,
      [itemType.key]: {
        ...itemType,
        value: parseFloat(value),
      },
    };

    setCalculations(newState);
  };

  /**
   * Modified to not restore focus after hiding keyboard.
   *
   * {@link https://github.com/oaf-project/oaf-side-effects/blob/master/src/index.ts#L592:L686}
   */
  const hideOnscreenKeyboard = (): Promise<void> => {
    // TODO: use inputmode="none"?

    // eslint-disable-next-line no-restricted-globals
    const activeElement = document.activeElement;
    const inputType =
      activeElement instanceof HTMLInputElement
        ? activeElement.getAttribute('type')
        : undefined;

    if (
      activeElement !== null &&
      activeElement instanceof HTMLElement &&
      // Don't bother with input types that we know don't trigger an OSK.
      inputType !== 'checkbox' &&
      inputType !== 'radio' &&
      inputType !== 'submit' &&
      inputType !== 'reset' &&
      inputType !== 'button'
    ) {
      // Blur the active element to dismiss the on-screen keyboard.
      activeElement.blur();

      // Set an attribute that allows users to override readonly/disabled styles via CSS.
      // This input will be readonly/disabled for only a fraction of a second and we
      // want to avoid the flash of readonly/disabled styles.
      activeElement.setAttribute('data-oaf-keyboard-hack', 'true');

      // Some older Android browsers need extra encouragement.
      // See https://stackoverflow.com/a/11160055/2476884
      const originalReadonly = activeElement.getAttribute('readonly');
      const originalDisabled = activeElement.getAttribute('disabled');

      activeElement.setAttribute('readonly', 'true');
      if (activeElement instanceof HTMLTextAreaElement) {
        activeElement.setAttribute('disabled', 'true');
      }

      return new Promise((resolve) => {
        setTimeout(() => {
          // Put things back the way we found them.
          originalReadonly !== null
            ? activeElement.setAttribute('readonly', originalReadonly)
            : activeElement.removeAttribute('readonly');

          if (activeElement instanceof HTMLTextAreaElement) {
            originalDisabled !== null
              ? activeElement.setAttribute('disabled', originalDisabled)
              : activeElement.removeAttribute('disabled');
          }

          activeElement.removeAttribute('data-oaf-keyboard-hack');

          // Restore focus back to where it was. Lots of people forget to do this.
          // Note that programmatically calling focus() will not trigger the
          // on-screen keyboard to reemerge.
          // JF -- But actually, it does. :/
          // activeElement.focus();

          resolve();
        });
      });
    } else {
      return Promise.resolve();
    }
  };

  return (
    <>
      {itemType && (
        <p
          className={`flex flex-col mb-6 CalculatorItem ${
            itemType.key === 'batteryStart' || itemType.key === 'batteryEnd'
              ? 'px-4'
              : ''
          }`}
        >
          <label className="w-full" htmlFor={itemType.key}>
            {itemType.label}
          </label>
          <span className="flex items-center w-full mt-auto">
            <input
              type="number"
              className="py-1 mr-2 text-3xl bg-gray-800 border-b border-gray-500 CalculatorItem__input"
              min={0}
              max={itemType.units === '%' ? 100 : undefined}
              step={itemType.key === 'batteryCapacity' ? 0.1 : 1}
              value={itemType.value}
              id={itemType.key}
              name={itemType.key}
              onChange={handleChange}
              onFocus={(event: React.FocusEvent) => {
                const target = event.target as HTMLInputElement;
                target.select();
              }}
              onKeyPress={(event: React.KeyboardEvent) => {
                if (event.key === 'Enter') {
                  hideOnscreenKeyboard();
                  return;
                }

                if (!/[0-9.]/.test(event.key)) {
                  event.nativeEvent.preventDefault();
                }
              }}
            />
            <span className="CalculatorItem__unit" translate="no">
              {itemType.units === 'distance'
                ? settings.distanceUnits
                : itemType.units}
            </span>
          </span>
        </p>
      )}
    </>
  );
};

export default CalculatorItem;
