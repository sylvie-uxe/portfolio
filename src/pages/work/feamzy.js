import React from "react";
import { StaticImage } from 'gatsby-plugin-image';
import { Seo, Footer } from "../../components";
import { Link } from "gatsby";
import { handleClick } from "../../utils/dom";
import ColorMode from "../../components/color-mode";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import signupProto from "../../../static/feamzy/proto_signup.mp4";
import onboardingProto from "../../../static/feamzy/proto_onboarding.mp4";
import invitationProto from "../../../static/feamzy/proto_invitation.mp4";

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
            src="../../../static/feamzy/hero.png"
            alt="Desktop and smartphone mockups of the app"
            placeholder="blurred"
            width={1360}
            aria-hidden="true"/>
          <h1>feamzy</h1>
          <section id="project-intro">
            <div className="flex-container">
              <div className="flex-box margin">
                <p className="border"><strong>Role:</strong><br/>UX Designer<br/>Front-End Developer</p>
              </div>
              <div className="flex-box margin">
                <p className="border"><strong>Duration:</strong><br/>9 months<br/>January 2021 - October 2021</p>
              </div>
              <div className="flex-box margin">
                <p className="border">
                    <strong>Tools:</strong><br/>Adobe Illustrator/XD,<br/>Atlassian, Slack, Gitlab<br/><br/>
                    <strong>Languages/Frameworks:</strong><br/>HTML, Sass, TypeScript,<br/>Angular, RxJS
                </p>
              </div>
              <div className="flex-box margin">
                <p className="border">Team: 5 people, 2 timezones</p>
                    <StaticImage
                    src="../../../static/feamzy/team.png"
                    alt="Team distributed over USA, Europe and Africa"
                    placeholder="blurred"
                    width={320}
                    title="Yours truly in pink, my teammates in blue"
                    aria-hidden="true"/>
              </div>
            </div>
          </section>
          <section id="project-content">
            <div className="spacer small"></div>
            <h2 className="introduction">Helping parents help each other</h2>
            <div className="spacer small"></div>
            <p><a href="https://www.feamzy.com/" target="_blank" rel="noreferrer">feamzy</a> is a social app for parents that helps them organize the life of their children and have support from a community of parents. As the saying goes, "it takes a village to raise a kid!".</p>
            <p>The goal of this app is to reduce the mental load of parents so they can enjoy quality time with their family.</p>
            <p>feamzy is a startup created in April 2020 by 3 cofounders based in France. When I started collaborating with them in January 2021, the team was also composed of a Full Stack Developer based in Tunisia.</p>
            <p>The app is available in France on the Apple Store and Google Play Store since September 2021.</p>
            <div className="illustration">
                <StaticImage
                    src="../../../static/feamzy/download_app_qr.png"
                    alt="QR code with a link to download the app"
                    placeholder="blurred"
                    width={150}
                    aria-hidden="true"/>
            </div>
            <div className="spacer large"></div>
            <h2>Problem</h2>
            <p>After the launch of the app in September 2021, the app analytics showed that:</p>
                <ul>
                    <li>the number of users who signed up increased then reached a plateau after a few months</li>
                    <li>only a small percentage of the users was active on the app</li>
                </ul>
            <p>The whole challenge for us was to increase the number of users who signed up but also to have them use the app on a daily basis.</p>
            <div className="spacer small"></div>
            <h3>Hopping into a user's shoes</h3>
            <p>First thing first: define the problem. Why aren't the users returning to the app after they sign up? What are their pain points?</p>
            <p>The first step in my investigation was a thorough review of the app with my pair of fresh eyes and also with my knowledge of the UX design best practices.</p>
            <div className="flex-container">
              <div className="flex-box large">
                <p className="caption">I listed all the bugs encountered along the way</p>
                <StaticImage
                  src="../../../static/feamzy/app_review_1.png"
                  alt="Screenshot of the app review"
                  placeholder="blurred"
                  width={500}
                  aria-hidden="true"/>
                <div className="spacer small"></div>
              </div>
              <div className="flex-box large">
                <p className="caption">as well as UX design problems</p>
                <StaticImage
                  src="../../../static/feamzy/app_review_2.png"
                  alt="Screenshot of the app review"
                  placeholder="blurred"
                  width={500}
                  aria-hidden="true"/>
                <div className="spacer small"></div>
              </div>
            </div>
            <p>Then I created user journey maps for the main actions that a user must complete right after downloading the app: signing up, creating the profile of a child, sharing the app with other parents. By representing visually all the steps required to complete an action, problems really stand out.</p>
            <p>Here's an example with the signup flow: a person who has been invited to download the app by a user has to interact with 5 different platforms/tools in order to sign up (text, app store, feamzy app, email client, web browser)!</p>
            <div className="illustration">
                <StaticImage
                    src="../../../static/feamzy/user_journey_map.png"
                    alt="User journey map of the signup flow"
                    placeholder="blurred"
                    width={800}
                    aria-hidden="true"/>
                <p className="caption">User journey map: signing up</p>
            </div>
            <div className="spacer small"></div>
            <h3>Pain points</h3>
            <p>Multiple pain points were identified during the research phase:</p>
                <ul>
                    <li>The signup process requires too many steps</li>
                    <li>The users have to do too many manual tasks before they can use the app</li>
                    <li>Some bugs prevent users from achieving certain tasks</li>
                    <li>Screens are cluttered</li>
                    <li>Design is not consistent throughout the app</li>
                    <li>The screens transition in inconsistent directions</li>
                    <li>The users can share a link to download the app with other parents but cannot directly invite other parents to join a classroom they created in the app</li>
                </ul>
            <div className="spacer large"></div>
            <h2>Design</h2>
            <p>During the ideation, prototyping and testing phases, I worked on solving the identified problems for the users. This was achieved by applying UX design patterns but also thanks to competitive audits.</p>
            <h3>Ease the signup</h3>
            <p><strong>Pain point</strong><br/>The signup process requires too many steps.</p>
            <p><strong>Solution</strong><br/>The signup process requiring too many steps was simplified thanks to a different method for creating a password which does not require to quit the app to go to a website then one's email.</p>
            <div className="spacer small"></div>
            <div className="illustration">
                <video controls style={{ maxWidth: `240px` }}>
                  <source src={signupProto} type="video/mp4" />
                  <track kind="captions"/>
                  Unfortunately your browser does not support videos.
                </video>
                <p className="caption">Signup made easy</p>
              </div>
              <div className="spacer small"></div>
            <h3>Get the user all set</h3>
            <p><strong>Pain point</strong><br/>The users have to do too many manual tasks before they can use the app.</p>
            <p><strong>Solution</strong><br/>The app has very little interest if the user doesn't create profiles for their children and assign them to a classroom. Those extra steps who require the user to fill out forms are a bit too much to ask for a user who already went through the registration process. One way of fixing this was to design an onboarding process with a sequential structure. We decided to design and code a chatbot for that: the user is guided, gives all the information required sequentially as if conversing with a friend and at the end, the user is ready to go!</p>
            <div className="illustration">
                <video controls style={{ maxWidth: `240px` }}>
                  <source src={onboardingProto} type="video/mp4" />
                  <track kind="captions"/>
                  Unfortunately your browser does not support videos.
                </video>
                <p className="caption">Onboarding flow at first launch</p>
            </div>
            <div className="spacer small"></div>
            <h3>Fix the bugs</h3>
            <p><strong>Pain point</strong><br/>Some bugs prevent users from achieving certain tasks.</p>
            <p><strong>Solution</strong><br/>A badly designed user experience can explain why users are not using an app as they should but bugs are ALWAYS a very very bad experience for users and a bad look for the app. All the bugs identified were added in our backlog and prioritized accordingly to their impact on the UX.</p>
            <div className="spacer small"></div>
            <h3>Keep it simple stupid</h3>
            <p><strong>Pain point</strong><br/>Screens are cluttered.</p>
            <p><strong>Solution</strong><br/>I then proceeded to declutter each screen by applying some best practices: white space, visual hierarchy using text size and weight, Gestalt principles (mostly common region), making important elements bigger, reusing conventions and standards (icons)</p>
            <div className="flex-container">
              <div className="flex-box">
                <p className="caption">Landing page - before</p>
                <StaticImage
                  src="../../../static/feamzy/firstscreen_before.png"
                  alt="Screenshot of the landing page before improvements"
                  placeholder="blurred"
                  width={280}
                  aria-hidden="true"/>
                <div className="spacer small"></div>
              </div>
              <div className="flex-box">
                <p className="caption">Landing page - after</p>
                <StaticImage
                  src="../../../static/feamzy/firstscreen_after.png"
                  alt="Screenshot of the landing page after improvements"
                  placeholder="blurred"
                  width={280}
                  aria-hidden="true"/>
                <div className="spacer small"></div>
              </div>
            </div>
            <div className="flex-container">
              <div className="flex-box">
                <p className="caption">Sign in - before</p>
                <StaticImage
                  src="../../../static/feamzy/signin_before.png"
                  alt="Screenshot of the sign-in screen before improvements"
                  placeholder="blurred"
                  width={280}
                  aria-hidden="true"/>
                <div className="spacer small"></div>
              </div>
              <div className="flex-box">
                <p className="caption">Sign in - after</p>
                <StaticImage
                  src="../../../static/feamzy/signin_after.png"
                  alt="Screenshot of the sign-in screen after improvements"
                  placeholder="blurred"
                  width={280}
                  aria-hidden="true"/>
                <div className="spacer small"></div>
              </div>
            </div>
            <div className="flex-container">
              <div className="flex-box">
                <p className="caption">School life - before</p>
                <StaticImage
                  src="../../../static/feamzy/school_before.png"
                  alt="Screenshot of the school life screen before improvements"
                  placeholder="blurred"
                  width={280}
                  aria-hidden="true"/>
                <div className="spacer small"></div>
              </div>
              <div className="flex-box">
                <p className="caption">School life - after</p>
                <StaticImage
                  src="../../../static/feamzy/school_after.png"
                  alt="Screenshot of the school life screen after improvements"
                  placeholder="blurred"
                  width={280}
                  aria-hidden="true"/>
                <div className="spacer small"></div>
              </div>
            </div>
            <div className="spacer small"></div>
            <h3>Design consistency</h3>
            <p><strong>Pain points</strong></p><ul><li>Design is not consistent throughout the app</li><li>The screens transition in inconsistent directions</li></ul>
            <p><strong>Solution</strong><br/>The inconsistencies in the design and transitions between screens were fixed in Adobe XD:</p>
                <ul>
                    <li>by creating a design system: colors, character styles, iconography, graphics and even layouts created as components were reused throughout the app</li>
                    <li>by creating a high-fidelity prototype and setting the appropriate transitions between screens</li>
                </ul>
            <div className="spacer small"></div>
            <h3>On a social app, the more the merrier!</h3>
            <p><strong>Pain point</strong><br/>The users can share a link to download the app with other parents but cannot directly invite other parents to join a classroom they created in the app.</p>
            <p><strong>Solution</strong><br/>Other parents can now join and use the app with an invitation code:</p><ul><li>A user can create a classroom for their children and share the classroom code with other parents.</li><li>A user can also create a family (composed of other people not yet users of the app and children) and share a family code with those people who can then join directly.</li></ul>
            <div className="illustration">
                <video controls style={{ maxWidth: `240px` }}>
                  <source src={invitationProto} type="video/mp4" />
                  <track kind="captions"/>
                  Unfortunately your browser does not support videos.
                </video>
                <p className="caption">Invite a parent to join the family</p>
            </div>
            <div className="spacer small"></div>
            <h3>Responsive design</h3>
            <p>I also worked on porting the design of the app to tablets and desktops in order for the users to be able to interact with the app throughout their day and with the device that is best suited for the task at hand (checking messages of parents on a smartphone is great but browsing homeworks is easier on a tablet for instance).</p>
            <p>Responsive design doesn't only mean that the size of the elements must vary according to the size of the device. It also means rearranging the elements to take advantage of the device size and how people interact with the device (1 thumb, 2 thumbs, index finger, tap or slide, etc).</p>
            <div className="flex-container">
              <div className="flex-box">
                <p className="caption">School life (mobile)</p>
                <StaticImage
                  src="../../../static/feamzy/school_after.png"
                  alt="Screenshot of the school life screen on mobile"
                  placeholder="blurred"
                  width={200}
                  aria-hidden="true"/>
                <div className="spacer small"></div>
              </div>
              <div className="flex-box large">
                <p className="caption">School life (tablet - horizontal orientation)</p>
                <StaticImage
                  src="../../../static/feamzy/school_ipad.png"
                  alt="Screenshot of the school life screen on tablet"
                  placeholder="blurred"
                  width={400}
                  aria-hidden="true"/>
                <div className="spacer small"></div>
              </div>
              <div className="flex-container">
              <div className="flex-box large margin">
                <p className="caption">School life (tablet - vertical orientation)</p>
                <StaticImage
                  src="../../../static/feamzy/school_ipad_v.png"
                  alt="Screenshot of the school life screen on tablet"
                  placeholder="blurred"
                  width={500}
                  aria-hidden="true"/>
                <div className="spacer small"></div>
              </div>
              <div className="flex-box large">
                <p className="caption">School life with calendar (tablet - vertical orientation)</p>
                <StaticImage
                  src="../../../static/feamzy/school_ipad_v_calendar.png"
                  alt="Screenshot of the school life screen on tablet"
                  placeholder="blurred"
                  width={500}
                  aria-hidden="true"/>
                <div className="spacer small"></div>
              </div>
              </div>
            </div>
            <div className="spacer large"></div>
            <h2>Code</h2>
            <p>Along with coding new features and fixing bugs, a big part of my work was also improving the existing code: starting from Angular pages, I identified the parts that were duplicated, extracted them and adapted them into Angular components that could then be reused.</p>
            <p>In the same way, along with working on a design system in Adobe XD, I refactored all the styles and structured them into a <a href="https://sass-guidelin.es/#the-7-1-pattern" rel="noreferrer" target="_blank">7-1 pattern architecture</a>. This had the advantages to reduce significantly the number of lines of code, to make the style consistent throughout the app, and to ease maintenance and speed up changes!</p>
            <div className="spacer large"></div>
            <h2>Reflection</h2>
            <p>My work with feamzy was my first ever professional experience being a UX Designer and Front-End Developer and I loved it so much!</p>
            <p>Wearing 2 different hats is challenging and context switching always leads to an overhead so I organized my work and split my time as to only work on some UX design topics or on the code at any given time but not on both simultaneously. I know this organization works for me.</p>
            <p>Collaboration with the feamzy team worked great as well: working remotely requires additional care in the way we communicate things, share information or feedback. One thing that worked well was recording videos of me interacting with prototypes or presenting something and posting them on Slack. With the timezone difference, they had time to watch, reflect and provide feedback on their mornings in Tunisia and France and by the time I started my morning in the USA, I had all the feedback I needed to continue my work.
            <br/>I also made sure to secure my time in the mornings to interact with them, be available for questions or meetings. In the same way, I reviewed the things that required an asynchronous feedback from me in my afternoons so they could have all they needed to continue their work on their next day.</p>
            <p>I learned so much with feamzy! I also built up experience and confidence along the way. As I write these lines, the version of the app with the onboarding chatbot has just been published. It's too early to tell if the number of active users will increase but time and user testing will tell!</p>
            <div className="spacer large"></div>
          </section>
        </main>
        <Footer/>
      </>
    );
  }