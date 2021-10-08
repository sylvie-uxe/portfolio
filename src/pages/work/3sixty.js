import React, { useState } from "react";
import { StaticImage } from 'gatsby-plugin-image';
import { Seo, Footer } from "../../components";
import { Link } from "gatsby";
import { handleClick } from "../../utils/dom";
import ColorMode from "../../components/color-mode";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from "theme-ui";

export default function ThreeSixty() {
    const [copied, setCopyStatus] = useState(false);

    function openDialog(e) {
      handleClick(e);
      alert("Thank you for your interest!\nMy email address has just been copied to your clipboard.\nSend me an email and I'll happily share my work and process with you.\nTalk to you soon!");
    }

    function copyEmailAddress(e) {
      setCopyStatus(true);
      setTimeout(() => {
          setCopyStatus(false)
      }, 1000);
  }

    return (
      <>
        <Seo/>
        <header>
          <Link to="/#work" onClick={handleClick} aria-label="Go back to work">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="2x"/>
          </Link>
          <ColorMode />
        </header>
        <main>
          <StaticImage
            src="../../../static/3sixty_hero.png"
            alt="Smartphone mockups of the app"
            placeholder="blurred"
            width={1360}
            aria-hidden="true"/>
          <h1>3sixty</h1>
          <section id="project-intro">
            <div className="flex-container">
              <div className="flex-box margin">
                <p className="border"><strong>Role:</strong><br/>UX Designer</p>
              </div>
              <div className="flex-box margin">
                <p className="border"><strong>Duration:</strong><br/>May 2021 - August 2021</p>
              </div>
              <div className="flex-box margin">
                <p className="border"><strong>Tools:</strong><br/>Figma, Google Docs/Slides/Sheets/Forms, Adobe Photoshop/Illustrator</p>
              </div>
              <div className="flex-box margin">
                <Button className="outlined primary"
                  aria-label="Case study deck"
                  onClick={openDialog}>
                  Case Study Deck<FontAwesomeIcon icon={faLock} className="margin-left"/>
                </Button>
              </div>
            </div>
          </section>
          <section id="project-content">
            <div className="spacer small"></div>
            <h2>A few words about this project</h2>
            <p>I designed this mobile app in the scope of the <a href="https://www.coursera.org/professional-certificates/google-ux-design?utm_source=google&utm_medium=institutions&utm_campaign=gwgsite&_ga=2.116649280.716155318.1630610849-91001625.1630610849" target="_blank" rel="noreferrer">Google UX Design Certificate Program</a>. This is a fantastic and very hands-on program where students learn and follow a design process to create an app from scratch while applying fundamental concepts such as user-centered design, equity-focused design and accessibility.</p>
            <p>Google also provides great templates throughout the program, further readings and links to lots of helpful resources. My bookmark manager burned out! I highly recommend this program to whoever wants to become a UX Designer or just get a refresher on the UX Design best practices.</p>
            <div className="spacer small"></div>
            <h2>The app</h2>
            <p>3sixty is a mobile app that enhances the user experience of streaming content at home by offering a customizable immersion.</p>
            <p>This app is currently being developed and will hopefully be released in 2022. While I cannot share the specifics publicly, I'll happily share them over an email so please reach out to know more: <CopyToClipboard text="sylvie.uxe@gmail.com"
                        onCopy={copyEmailAddress}>
                        <Button className="icon-button"
                            variant="clickme"
                            aria-label="Copy email address"
                            onClick={handleClick}
                            title="Copy my email address!">
                            <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                        </Button>
                    </CopyToClipboard> {copied ? <span className="tooltip">Email address copied!</span> : null}</p>
            <div className="spacer large"></div>
          </section>
        </main>
        <Footer/>
      </>
    );
  }