import React, {useState} from "react";
import { Link } from "gatsby";
import { setSiblingActive, blurAfterClick } from "../utils/dom";
// import reload from "../utils/nav";
import ColorMode from "./color-mode";
import { StaticImage }  from "gatsby-plugin-image";
import { Button } from "theme-ui";

function Header({menuLinks}) {
  const [isMenuOpen, setMenuState] = useState(false);

  function handleClickedLink(e) {
    const currentElement = e.currentTarget;
    const parentElement = currentElement.parentElement;
    if (parentElement) {
      setSiblingActive(parentElement, "active");
    }
    setMenuState(!isMenuOpen);
  }

  function handleClickedMenu(e) {
    blurAfterClick(e.currentTarget);
    setMenuState(!isMenuOpen);
  }

  function handleClick(e) {
    blurAfterClick(e.currentTarget);
  }

  return (
    <header>
      <Link id="logo" to="/" onClick={handleClick} aria-label="Home">
        <StaticImage
          src="../../static/logo.png"
          alt="Logo"
          placeholder="blurred"
          width={60}
          aria-hidden="true"/>
      </Link>
      <div className="show-on-mobile">
        <ColorMode />
        { isMenuOpen ?
        <Button style={{visibility: "hidden"}} id="menuToggle" className="icon-button" variant="clickme" onClick={handleClickedMenu}>
          <span className="material-icons-round large">menu</span>
        </Button> :
        <Button id="menuToggle" className="icon-button" variant="clickme" onClick={handleClickedMenu}>
          <span className="material-icons-round large">menu</span>
        </Button>}
      </div>
        { isMenuOpen ?
        <aside id="mobile-menu" className="show-on-mobile">
          <Button id="menuToggle" className="icon-button" variant="clickme" onClick={handleClickedMenu}>
            <span className="material-icons-round large">close</span>
          </Button>
          <ul>
            {menuLinks && menuLinks.map(props => (
            <li key={props.name}>
              <a href={props.link} className="nav" onClick={handleClickedLink}>
                {props.name}
              </a>
            </li>
            ))}
          </ul>
        </aside>
        : null }
      <ul className="hide-on-mobile">
        {menuLinks && menuLinks.map(props => (
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