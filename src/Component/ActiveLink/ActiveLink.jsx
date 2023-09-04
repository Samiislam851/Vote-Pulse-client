import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
  return (
    <>
      <NavLink
        to={to}
        className={({ isActive, isPending }) =>
          isActive ? "text-orange-500 active font-semibold text-xl" : "font-semibold text-xl text-gray-500"
        }
      >
        {children}
      </NavLink>
    </>
  );
}

export default ActiveLink;
