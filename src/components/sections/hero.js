import React from 'react';
import { Themed } from 'theme-ui';

function Hero() {
    return (
        <section id="hero">
            <Themed.p>Hi, I'm</Themed.p>
            <Themed.h2>Sylvie Donatien</Themed.h2>
            <Themed.p>I design and I code.</Themed.p>
            <br />
            <Themed.p>
                I'm a User eXperience Designer and a Front-End Developer.
            </Themed.p>
            <Themed.p>
                I'm passionate about bringing joy to
                people's lives through valuable, equitable and simple design. I then
                write reliable and extensible code to make the design come to life.
            </Themed.p>
            <Themed.p>
                Curiosity, a constant search for improvement and a passion for learning
                are my driving forces.
            </Themed.p>
        </section>
    );
}

export default Hero;
