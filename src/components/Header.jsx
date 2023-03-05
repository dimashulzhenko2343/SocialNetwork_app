import React from "react";
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img
        className={s.header_logo}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/SVG_Logo.svg/2048px-SVG_Logo.svg.png"
        alt=""
      />
      <div className={s.header_mein}>sdjskdfjkdj</div>
    </header>
  );
};

export default Header;