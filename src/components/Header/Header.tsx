import React from 'react';
import './Header.scss';
import logo from '../../assets/images/logo.svg';
import github from '../../assets/images/github.svg';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-2 Header">
      <a href="/">
        <img src={logo} style={{ width: '3rem' }} alt="EV Range Estimator" />
      </a>

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
