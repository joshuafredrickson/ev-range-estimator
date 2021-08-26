import React from 'react';
import './Header.scss';
import logo from '../../assets/images/logo.svg';

const Header: React.FC = () => {
  return (
    <div className="p-2 Header">
      <a href="/">
        <img src={logo} className="w-12" alt="EV Range Estimator" />
      </a>
    </div>
  );
};

export default Header;
