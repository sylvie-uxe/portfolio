import React from 'react';
import { Themed } from 'theme-ui';
import { handleClick } from '../../utils/dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <section id="contact">
            <div className="spacer large"></div>
            <Themed.h2>Contact</Themed.h2>
            <Themed.p>Hey friend!<br/><br/>
            <a href="mailto:sylvie.uxe@gmail.com" rel="noreferrer"
                        target="_blank" className="outlined primary" aria-label="Send message" onClick={handleClick}>
                        Say hello
                        <FontAwesomeIcon icon={faPaperPlane} size="lg" className="margin-left"/>
            </a>
            <br/>
            <br/>
            I'll be in touch!
            <br/><br/><br/>
                You can also say hi on LinkedIn <a href="https://www.linkedin.com/in/sylvie-donatien/"
                        rel="noreferrer"
                        target="_blank"
                        aria-label="My LinkedIn page"
                        title="Say hi on LinkedIn!"
                        onClick={handleClick}>
                        <FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
            </Themed.p>
            <div className="spacer large"></div>
        </section>
    );
}

export default Contact;
