import React, {useState} from "react";
import { Link } from "gatsby";
import { Themed } from 'theme-ui';
import { blurAfterClick } from "../utils/dom";
import { handleClick } from "../utils/dom";
import ColorMode from "./color-mode";
import Logo from "./logo";
import { Button } from "theme-ui";
import Pdf from "../../static/Sylvie_Donatien_Resume.pdf";

function Header({menuLinks}) {
  const [isMenuOpen, setMenuState] = useState(false);

  function handleClickedMenu(e) {
    blurAfterClick(e.currentTarget);
    setMenuState(!isMenuOpen);
  }

  return (
    <header>
      <Themed.a className="skip-to-content-link" href="#primary">
        Skip to content
      </Themed.a>
      <Link id="logo" to="/" onClick={handleClick} aria-label="Home">
        <Logo/>
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
              <a href={props.link} onClick={handleClickedMenu}>
                {props.name}
              </a>
            </li>
            ))}
            <li>
              <a href={Pdf} rel="noreferrer" target="_blank" className="link-button" onClick={handleClickedMenu}>
                Resume
              </a>
            </li>
          </ul>
        </aside>
        : null }
      <ul className="hide-on-mobile">
        {menuLinks && menuLinks.map(props => (
          <li key={props.name}>
            <a href={props.link}>
              {props.name}
            </a>
          </li>
        ))}
        <li>
          <a href={Pdf} rel="noreferrer" target="_blank" className="link-button" onClick={handleClick}>
            Resume
          </a>
        </li>
        <li>
          <ColorMode />
        </li>
      </ul>
    </header>
  );
}

export default Header;