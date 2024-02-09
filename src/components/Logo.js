import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <NavLink to="/">
      <span className="logo">FS</span>
    </NavLink>
  );
};

export default Logo;