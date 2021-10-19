import React, { useRef } from 'react';
import { Button, Themed } from 'theme-ui';
import { StaticImage } from 'gatsby-plugin-image';
import { handleClick } from '../../utils/dom';
import pathToAudio from '../../../static/thatsmyname.mp3';
import pathToCaptions from 'file-loader!../../../static/thatsmyname.vtt';

function Hero() {
    const audioEl = useRef( { current: null });

    function play(e) {
        audioEl.current.src = pathToAudio;
        audioEl.current.play().catch(error => console.log(error));
        handleClick(e);
    }

    return (
        <section id="hero">
            <div className="hide-on-mobile spacer large"></div>
            <div className="flex-container">
                <div className="flex-box">
                    <Themed.p>Hi, I'm</Themed.p>
                    <Themed.p><em>Sylvie Donatien</em><br/>Seel-vee Doh-nah-see-yehn
                    <Button className="icon-button"
                        variant="clickme"
                        aria-label="Here's how to pronunce my name"
                        onClick={play}>
                        <span className="material-icons-round">volume_up</span>
                    </Button>
                    <audio ref={audioEl}>
                        <track default kind="captions" src={pathToCaptions}/>
                    </audio>
                    </Themed.p>
                </div>
                <div className="flex-box">
                    {/* <a href="#about"> */}
                        <StaticImage
                            id="heroPicture"
                            src="../../../static/hero_color.png"
                            alt="Profile picture of Sylvie Donatien"
                            placeholder="blurred"
                            width={400}
                            aria-hidden="true"/>
                    {/* </a> */}
                </div>
            </div>
            <div className="spacer small"></div>
            <Themed.p>
                I'm a User eXperience Designer and a Front-End Developer.
            </Themed.p>
            <Themed.p>
                I'm passionate about bringing joy to people's lives through valuable and simple design, and performant and reliable code.
            </Themed.p>
            <Themed.p>
                Empathy, a constant search for improvement and a passion for learning
                are my driving forces.
            </Themed.p>
        </section>
    );
}

export default Hero;
