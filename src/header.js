import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <NavLink to="/" className={"btnt"}><button className='tbtn'>Table</button></NavLink>
      <NavLink to="/addinput" className={"btna"}><button className='abtn'>Add Data</button></NavLink>
    </div>
  )
}

export default Header;