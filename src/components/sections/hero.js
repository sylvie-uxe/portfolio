import React from 'react';
import { Themed } from 'theme-ui';
import { StaticImage } from 'gatsby-plugin-image';

function Hero() {
    return (
        <section id="hero">
            <div className="flex-container">
                <div className="flex-box">
                    <Themed.p>Hi, I'm</Themed.p>
                    <Themed.p><em>Sylvie Donatien   </em>
                        <sub>(seel-vee doh-nah-see-yehn)</sub>
                        {/*
                        <span class="material-icons-round">play_arrow</span>
                        <audio controls>
                            <source src="../../../static/spelling.m4a" type="audio/x-m4a"/>
                            <p>Your browser does not support HTML5 audio.</p>
                        </audio> */}
                    </Themed.p>
                    <Themed.p>I design and I code.</Themed.p>
                </div>
                <div className="flex-box">
                    <a href="#about">
                        <StaticImage
                            id="heroPicture"
                            src="../../../static/hero.png"
                            alt="Profile picture of Sylvie Donatien"
                            placeholder="blurred"
                            width={400}
                            aria-hidden="true"/>
                    </a>
                </div>
            </div>
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
