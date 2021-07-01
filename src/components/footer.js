import React, { useState } from "react";
import { Button } from "theme-ui";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { blurAfterClick } from "../utils/dom";

function Footer() {
    const [hidden, setVisibility] = useState(true);
    const [copied, setCopyStatus] = useState(false);

    function toggleMenu(e) {
        setVisibility(!hidden);
        handleClick(e);
    }

    function copyEmailAddress(e) {
        setCopyStatus(true);
        setTimeout(() => {
            setCopyStatus(false)
        }, 1000);
    }

    function handleClick(e) {
        blurAfterClick(e.currentTarget);
    }

    return(
    <footer>
        <div className="footer-menu hide-on-mobile">
            <p className={hidden ? "hidden" : null}>
                <span className="material-icons-round small">copyright</span> {new Date().getFullYear()} &#8212; Designed and built by me, with love and <a href="https://www.gatsbyjs.com/" rel="noreferrer" target="_blank">Gatsby</a>
            </p>
            <ul>
                <li className={hidden ? "hidden" : null}>
                    <a href="https://www.linkedin.com/in/sylvie-donatien/"
                        rel="noreferrer"
                        target="_blank"
                        aria-label="My LinkedIn page"
                        title="Say hi on LinkedIn!"
                        onClick={handleClick}>
                        <FontAwesomeIcon icon={faLinkedin} size="lg"/>
                    </a>
                </li>
                <li className={hidden ? "hidden" : null}>
                    <a href="https://github.com/sylvie-uxe"
                        rel="noreferrer"
                        target="_blank"
                        aria-label="My Github repositories"
                        title="My lines of code"
                        onClick={handleClick}>
                        <FontAwesomeIcon icon={faGithub} size="lg"/>
                    </a>
                </li>
                <li className={hidden ? "hidden" : null}>
                    {copied ? <span className="tooltip">Address copied!</span> : null}
                    <CopyToClipboard text="sylvie.uxe@gmail.com"
                        onCopy={copyEmailAddress}>
                        <Button className="icon-button"
                            variant="clickme"
                            aria-label="Copy email address"
                            onClick={handleClick}
                            title="Copy my email address!">
                            <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                        </Button>
                    </CopyToClipboard>
                </li>
                <li>
                    <Button id="info" className="icon-button" variant="clickme" aria-label={hidden ? "More info" : "Close footer"} onClick={toggleMenu}
                        title="Hide the footer">
                        <span className="material-icons-round">{hidden ? "info" : "close"}</span>
                    </Button>
                </li>
            </ul>
        </div>
        <div className="footer-menu show-on-mobile">
            <p className={hidden ? "hidden" : null}>
                <span className="material-icons-round small">copyright</span> {new Date().getFullYear()} &#8212; Designed and built by me, with love and <a href="https://www.gatsbyjs.com/" rel="noreferrer" target="_blank">Gatsby</a>
            </p>
            <ul>
                <li className={hidden ? "hidden" : null}>
                    <a href="https://www.linkedin.com/in/sylvie-donatien/"
                        rel="noreferrer"
                        target="_blank"
                        aria-label="My LinkedIn page"
                        title="Say hi on LinkedIn!"
                        onClick={handleClick}>
                        <FontAwesomeIcon icon={faLinkedin} size="lg"/>
                    </a>
                </li>
                <li className={hidden ? "hidden" : null}>
                    <a href="https://github.com/sylvie-uxe"
                        rel="noreferrer"
                        target="_blank"
                        aria-label="My Github repositories"
                        title="My lines of code"
                        onClick={handleClick}>
                        <FontAwesomeIcon icon={faGithub} size="lg"/>
                    </a>
                </li>
                <li className={hidden ? "hidden" : null}>
                    {copied ? <span className="tooltip">Address copied!</span> : null}
                    <CopyToClipboard text="sylvie.uxe@gmail.com"
                        onCopy={copyEmailAddress}>
                        <Button className="icon-button"
                            variant="clickme"
                            aria-label="Copy email address"
                            onClick={handleClick}
                            title="Copy my email address!">
                            <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                        </Button>
                    </CopyToClipboard>
                </li>
                <li>
                    <Button id="info" className="icon-button" variant="clickme" aria-label={hidden ? "More info" : "Close footer"} onClick={toggleMenu}
                        title={hidden ? "Open footer menu" : "Close footer menu"}>
                        <span className="material-icons-round">{hidden ? "info" : "close"}</span>
                    </Button>
                </li>
            </ul>
        </div>
        <div className={hidden ? "hidden" : "footer-bg"}></div>
    </footer>
    );
}

export default Footer;
