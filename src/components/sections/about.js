import React from 'react';
import { Themed } from 'theme-ui';
import { StaticImage } from 'gatsby-plugin-image';

function About() {
    return (
        <section id="about">
            <div className="spacer large"></div>
            <Themed.h2>About</Themed.h2>
            <Themed.p>I started as a software engineer at a big travel technology company in France, my native country.</Themed.p>
            <Themed.p>Software engineer? Well it's not that simple of course.</Themed.p>
            <Themed.p>Depending on teams and projects, I wore many hats. See, I just love learning new things. I love it!</Themed.p>
            <Themed.p>And then I reached a point where I needed something else. Something very different.</Themed.p>
            <Themed.p>The pandemic hit and I jumped on the opportunity to go on the leave of absence program offered by my company. I was lucky to have some time to reflect.</Themed.p>
            <Themed.p>What could be at the intersection of my skills, strengths and interests?</Themed.p>
            <Themed.p>UX design, where have you been my whole life?</Themed.p>
            <div className="illustration">
                <StaticImage
                    src="../../../static/my_path.png"
                    alt="Graph summarizing my path to UX"
                    placeholder="blurred"
                    width={800}
                    layout="fixed"
                    aria-hidden="true"/>
            </div>
            <div className="spacer large"></div>
        </section>
    );
}

export default About;
