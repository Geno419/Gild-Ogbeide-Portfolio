import React from "react";

function Header() {
  return (
    <header>
      <h1>Gild.Jnr Software Developer</h1>
      <nav className="navContainer">
        <ul id="navList">
          <li className="navText">
            <a href="#home">Home</a>
          </li>
          <li className="navText">
            <a href="#about">About</a>
          </li>
          <li className="navText">
            <a href="#projects">Projects</a>
          </li>
          <li className="navText">
            <a href="#contacts">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
