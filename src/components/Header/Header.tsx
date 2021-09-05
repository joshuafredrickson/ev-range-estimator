import React from 'react';
import './Header.scss';
import logo from '../../assets/images/logo.svg';
import github from '../../assets/images/github.svg';
import { useSettings } from '../../context/Settings';

const Header: React.FC = () => {
  const { settings, setSettings } = useSettings();

  const handleClick = (event: React.MouseEvent) => {
    const { value } = event.target as HTMLButtonElement;

    if (value === '') {
      return;
    }

    const newState = {
      ...settings,
      distanceUnits: value,
    };

    setSettings(newState);
  };

  return (
    <header className="flex items-center justify-between p-2 Header">
      <div className="flex items-center">
        <a href="/">
          <img src={logo} style={{ width: '3rem' }} alt="EV Range Estimator" />
        </a>

        <div className="inline-flex ml-4">
          <button
            className={`px-2 py-1 text-xs font-bold text-gray-300 transition-colors rounded-l ${
              settings.distanceUnits === 'mi'
                ? 'bg-gray-500'
                : 'bg-gray-900 hover:text-white'
            }`}
            onClick={handleClick}
            value="mi"
          >
            <span className="sr-only">Miles</span>
            <span aria-hidden="true" translate="no">
              MI
            </span>
          </button>
          <button
            className={`px-2 py-1 text-xs font-bold text-gray-300 transition-colors rounded-r ${
              settings.distanceUnits === 'km'
                ? 'bg-gray-500'
                : 'bg-gray-900 hover:text-white'
            }`}
            onClick={handleClick}
            value="km"
          >
            <span className="sr-only">Kilometers</span>
            <span aria-hidden="true" translate="no">
              KM
            </span>
          </button>
        </div>
      </div>

      <a
        href="https://github.com/joshuafredrickson/ev-range-estimator"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={github}
          alt="View project on GitHub"
          style={{ width: '1rem' }}
        />
      </a>
    </header>
  );
};

export default Header;
