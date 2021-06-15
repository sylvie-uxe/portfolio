import React from "react";
import {Link} from "gatsby";
import ColorMode from "./color-mode";

function Header({menuLinks}) {
  return (
    <header>
      <Link to="/">My Logo</Link>
      <ul>
        {menuLinks.map(props => (
          <li key={props.name}>
            <Link activeClassName="activeLink" to={props.link}>
              {props.name}
            </Link>
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