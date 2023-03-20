import React, { useEffect } from 'react';
import './Menu.css';

function Menu(props) {
  const { isOpen, handleNav, closeMenu } = props;

  useEffect(() => {
    if (isOpen) {
      document.body.className = "no-scroll";
    } else {
      document.body.className = "";
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="nav-menu">
      <button className="close-btn" onClick={closeMenu} />
      <button className="nav-menu-link" onClick={() => handleNav(1)}>DETAILS</button>
      <button className="nav-menu-link" onClick={() => handleNav(2)}>TRAVEL</button>
      <button className="nav-menu-link" onClick={() => handleNav(3)}>REGISTRY</button>
      <button className="nav-menu-link" onClick={() => handleNav(4)}>FAQ</button>
    </div>
  );
}

export default Menu;
