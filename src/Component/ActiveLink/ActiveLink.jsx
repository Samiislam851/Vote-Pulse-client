import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
  return (
    <>
      <NavLink
        to={to}
        className={({ isActive, isPending }) =>
          isActive ? "text-[#E7CEA6] active font-semibold text-xl" : "font-semibold text-xl text-white"
        }
      >
        {children}
      </NavLink>
    </>
  );
}

export default ActiveLink;
