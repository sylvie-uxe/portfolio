import React from "react";
import { StaticImage } from 'gatsby-plugin-image';
import { Seo, Footer } from "../../components";
import { Link } from "gatsby";
import { handleClick } from "../../utils/dom";
import ColorMode from "../../components/color-mode";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import fightProto from '../../../static/covivre/covivre_fight.mp4';
import firstLaunchProto from '../../../static/covivre/covivre_first-launch.mp4';
import iamProto from '../../../static/covivre/covivre_iam.mp4';
import staySafeProto from '../../../static/covivre/covivre_stay-safe.mp4';

export default function Covivre() {
    return (
      <>
        <Seo/>
        <header>
          <Link to="/#work" onClick={handleClick} aria-label="Go back to work">
            <FontAwesomeIcon className="icon-button" icon={faArrowCircleLeft} size="2x"/>
          </Link>
          <ColorMode />
        </header>
        <main>
          <StaticImage
            src="../../../static/covivre/covivre_hero.png"
            alt="Smartphone mockups of the app"
            placeholder="blurred"
            width={1360}
            aria-hidden="true"/>
          <h1>Covivre</h1>
          <section id="project-intro">
            <div className="flex-container">
              <div className="flex-box margin">
                <p className="border"><strong>Role:</strong><br/>UX Designer</p>
              </div>
              <div className="flex-box margin">
                <p className="border"><strong>Duration:</strong><br/>2 months<br/>October 2020 - November 2020</p>
              </div>
              <div className="flex-box margin">
                <p className="border"><strong>Tools:</strong><br/>Adobe XD/After Effects, Zeplin</p>
              </div>
              <div className="flex-box margin">
                <p className="border">Team: 4 people, 3 timezones</p>
                <StaticImage
                  src="../../../static/covivre/covivre_team.png"
                  alt="Team distributed over USA and Europe"
                  placeholder="blurred"
                  width={320}
                  title="Yours truly in pink, my teammates in blue"
                  aria-hidden="true"/>
              </div>
            </div>
          </section>
          <section id="project-content">
            <div className="spacer small"></div>
            <h2 className="introduction">Helping people keep their family, friends and community safe</h2>
            <div className="spacer small"></div>
            <p>This project was born during the COVID-19 pandemic as a mean to help fight the spread of the virus with people's privacy and health confidentiality in mind.</p>
            <p>I joined a team of 3: 1 Product Manager and 1 Senior Graphic Designer based in France, and 1 Senior Software Developer based in Ukraine.</p>
            <div className="spacer small"></div>
            <h2>Problem</h2>
            <p>In 2020, as the pandemic hit, a lot of people had to cope with anxiety, fear, and sadly with grief too, left alone with the feeling that they had lost control over their life.</p>
            <p>Concerns about privacy also arose when governments pushed for the use of their official contact-tracing apps.</p>
            <h3>Challenge</h3>
            <p>Design an app that empowers people and gives them the means to take back control over their life but also over their personal information, and fight the virus.</p>
            <h3>Problem statement</h3>
            <p>Our target users are people who value their data privacy and who need to be aware of their exposure to COVID-19 because they want to help their family, friends and community stay safe.</p>
            <div className="spacer small"></div>
            <h2>Design</h2>
            <p>The chosen solution is purely based on Bluetooth with no location tracking and no exchange of personal information. Also, it relies exclusively on the fact that the user would update their status in the app should they test positive.</p>
            <p>Main features include:
              <ul>
                <li>Health monitoring</li>
                <li>Best practices checklist</li>
                <li>Exposure level</li>
                <li>Blog</li>
              </ul>
            </p>
            <p>Some feedback gathered on the prototype showed that an onboarding process was needed. An informative section with lenghty text was also replaced with a chatbot whose sequential nature was way more helpful to the users. They felt more guided and they could better process the information because it was split into smaller chunks.</p>
            <div className="spacer small"></div>
            <h3>Health monitoring</h3>
            <p>For the users to always be aware of their health and of their potential symptoms, day after day.</p>
            <div className="flex-container">
              <div className="flex-box">
                <figure>
                  <StaticImage
                    src="../../../static/covivre/covivre_mockups_iam1.png"
                    alt="Smartphone mockup of a health monitoring screen"
                    placeholder="blurred"
                    aria-hidden="true"/>
                  <figcaption className="caption">Users can log how they feel, day after day</figcaption>
                </figure>
              </div>
              <div className="flex-box">
                <figure>
                  <StaticImage
                    src="../../../static/covivre/covivre_mockups_iam2.png"
                    alt="Smartphone mockup of a health monitoring screen"
                    placeholder="blurred"
                    aria-hidden="true"/>
                  <figcaption className="caption">The feature helps increase awareness of current health</figcaption>
                </figure>
              </div>
              <div className="flex-box">
                <figure>
                  <StaticImage
                    src="../../../static/covivre/covivre_mockups_iam3.png"
                    alt="Smartphone mockup of a health monitoring screen"
                    placeholder="blurred"
                    aria-hidden="true"/>
                  <figcaption className="caption">Users can check their symptoms and take an informed decision about staying home or not</figcaption>
                </figure>
              </div>
            </div>
            <div className="spacer small"></div>
            <h3>Best practices checklist</h3>
            <p>A checklist of best practices for fighting the virus with actions that save lives (social distancing, mask wearing, etc).
            <figure>
              <StaticImage
                  src="../../../static/covivre/covivre_mockups_fight1.png"
                  alt="Smartphone mockup of the best practices checklist screen"
                  placeholder="blurred"
                  width={280}
                  aria-hidden="true"/>
              <figcaption className="caption">Users are reminded of the best practices that save lives</figcaption>
            </figure>
            </p>
            <div className="spacer small"></div>
            <h3>Exposure level</h3>
            <p>For assessing one's recent or current exposure to COVID-19.
            <figure>
              <StaticImage
                  src="../../../static/covivre/covivre_mockups_staysafe.png"
                  alt="Smartphone mockup of the stay safe screen"
                  placeholder="blurred"
                  width={280}
                  aria-hidden="true"/>
              <figcaption className="caption">Apps installed on users' phones rely on Bluetooth to exchange information anonymously and determine exposure</figcaption>
            </figure>
            </p>
            <div className="spacer small"></div>
            <h3>Blog</h3>
            <p>For checking the local or more distant news and staying informed.
            <figure>
              <StaticImage
                  src="../../../static/covivre/covivre_mockups_blog.png"
                  alt="Smartphone mockup of the blog screen"
                  placeholder="blurred"
                  width={280}
                  aria-hidden="true"/>
              <figcaption className="caption">Users can filter news or articles by location and bookmark interesting articles</figcaption>
            </figure>
            </p>
            <div className="spacer small"></div>
            <h2>Outcome</h2>
            <p>
              The app didn't end up being developed but a version of a high-fidelity prototype was published in Adobe XD, along with the assets and specifications in Zeplin.
              <figure>
                <StaticImage
                    src="../../../static/covivre/covivre_hifi-prototype.png"
                    alt="Screenshot of the Adobe XD artboards connected to each other into a prototype"
                    placeholder="blurred"
                    width={640}
                    aria-hidden="true"/>
                <figcaption className="caption">Mockups and high-fidelity prototype in Adobe XD</figcaption>
              </figure>
            </p>
            <div className="spacer large"></div>
            <p>Here are some recordings of a user going through the main features of the app.</p>
            <div className="flex-container">
              <div className="flex-box">
                <video controls style={{ maxWidth: `240px` }}>
                  <source src={firstLaunchProto} type="video/mp4" />
                </video>
                <p className="caption">Onboarding on First Launch</p>
                <div className="spacer large"></div>
              </div>
              <div className="flex-box">
                <video controls style={{ maxWidth: `240px` }}>
                  <source src={iamProto} type="video/mp4" />
                </video>
                <p className="caption">Health Monitoring</p>
                <div className="spacer large"></div>
              </div>
              <div className="flex-box">
                <video controls style={{ maxWidth: `240px` }}>
                  <source src={fightProto} type="video/mp4" />
                </video>
                <p className="caption">Best Practices</p>
                <div className="spacer large"></div>
              </div>
              <div className="flex-box">
                <video controls style={{ maxWidth: `240px` }}>
                  <source src={staySafeProto} type="video/mp4" />
                </video>
                <p className="caption">Exposure to COVID-19</p>
                <div className="spacer large"></div>
              </div>
            </div>
            <div className="spacer small"></div>
            <h2>Reflection</h2>
            <p>I learned a lot about Adobe XD with this project. The importance of using components, colors and character styles to speed up changes on all screens.</p>
            <p>Back then - I'm ashamed to say - I had not yet been exposed to all the great tools that a UX designer has at their disposal. If I had to work on this project again today, I would have conducted user interviews and performed a competitive audit. Wireframing would have saved me a lot of time and efforts spent instead on updating the mockups...</p>
            <p>If time had permitted, I would have conducted more rounds of usability tests as well and tested each feature thoroughly.</p>
            <p>As I write these lines, almost one year later (one year?!), the pandemic is still very much present even if progress has been made. I was pleasantly surprised to learn about <a href="https://www.google.com/covid19/exposurenotifications/" rel="noreferrer" target="_blank">Apple and Google's Exposure Notifications</a> which rely on the same principle and I hope it will have a real positive impact.</p>
            <div className="spacer large"></div>
          </section>
        </main>
        <Footer/>
      </>
    );
  }