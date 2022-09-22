import React, { useState } from 'react';
import './style.scss';

export default function CornerMenu() {
  const [openMenu, setOpenMenu] = useState(false);

  function getMenuClasses() {
    return `menu ${openMenu ? 'open' : ''}`;
  }

  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <div>
      <div className={getMenuClasses()}>
        <button className="circle" type="button" onClick={() => toggleMenu()}>
          <span className="menu-text">Menu</span>
        </button>
        <div id="sub-menu-1" className="sub-menu">
          <button type="button"><i className="material-icons">account_circle</i></button>
          <span>About me</span>
        </div>
        <div id="sub-menu-2" className="sub-menu">
          <button type="button"><i className="material-icons">code</i></button>
          <span>Tech stack</span>
        </div>
        <div id="sub-menu-3" className="sub-menu">
          <button type="button"><i className="material-icons">work</i></button>
          <span>My projects</span>
        </div>
        <div id="sub-menu-4" className="sub-menu">
          <button type="button"><i className="material-icons">info</i></button>
          <span>Contact me</span>
        </div>
      </div>
      <div className="bg-overlay" onClick={() => toggleMenu()} role="presentation" />
    </div>
  );
}
