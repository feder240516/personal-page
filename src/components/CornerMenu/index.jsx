import React, {useState} from 'react';
import './style.scss'

export default function CornerMenu(props) {
  const [openMenu, setOpenMenu] = useState(false);
  
  function getMenuClasses() {
    return `menu ${openMenu?'open':''}`;
  }

  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <div>
      <div className={getMenuClasses()}>
        <button className="circle" onClick={()=>toggleMenu()}>
          <span className="menu-text">Menú</span>
        </button>
        <div className="sub-menu sub-menu-1"></div>
        <div className="sub-menu sub-menu-2"></div>
        <div className="sub-menu sub-menu-3"></div>
        <div className="sub-menu sub-menu-4"></div>
      </div>
      <button>a</button>
    </div>
  )
}