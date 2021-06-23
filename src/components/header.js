import React from "react";
import { Link } from "gatsby";
import setSiblingActive from "../utils/dom";
import ColorMode from "./color-mode";
import { StaticImage }  from "gatsby-plugin-image";

function Header({menuLinks}) {
  function handleClickedLogo(e) {
    window.location.reload();
  }

  function handleClickedLink(e) {
    const currentElement = e.currentTarget;
    const parentElement = currentElement.parentElement;
    if (parentElement) {
      setSiblingActive(parentElement, "active");
    }
  }

  return (
    <header>
      <Link id="logo" to="/" onClick={handleClickedLogo} aria-label="Home">
        <StaticImage
          src="../../static/logo.png"
          alt="Logo"
          placeholder="blurred"
          width={60}
          aria-hidden="true"/>
      </Link>
      <ul>
        {menuLinks.map(props => (
          <li key={props.name}>
            <a href={props.link} className="nav" onClick={handleClickedLink}>
              {props.name}
            </a>
          </li>
        ))}
        <li>
          <ColorMode />
        </li>
      </ul>
    </header>
  );
}

export default Header;