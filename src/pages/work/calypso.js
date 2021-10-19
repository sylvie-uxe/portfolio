import React from "react";
import {StaticImage} from 'gatsby-plugin-image';
import {Seo, Footer} from "../../components";
import {Link} from "gatsby";
import {handleClick} from "../../utils/dom";
import ColorMode from "../../components/color-mode";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons';
import Pdf from "../../../static/calypso/calypso_case-study-deck.pdf";

export default function Covivre() {
  return (
    <>
      <Seo />
      <header>
        <Link to="/#work" onClick={handleClick} aria-label="Go back to work">
          <FontAwesomeIcon className="icon-button" icon={faArrowCircleLeft} size="2x" />
        </Link>
        <ColorMode />
      </header>
      <main>
        <StaticImage
          src="../../../static/calypso/hero.png"
          alt="Desktop and smartphone mockups of the app"
          placeholder="blurred"
          width={1360}
          aria-hidden="true" />
        <h1>Calypso</h1>
        <section id="project-intro">
          <div className="flex-container">
            <div className="flex-box margin">
              <p className="border"><strong>Role:</strong><br />UX Designer</p>
            </div>
            <div className="flex-box margin">
              <p className="border"><strong>Duration:</strong><br />1 month<br />September 2021</p>
            </div>
            <div className="flex-box margin">
              <p className="border"><strong>Tools:</strong><br />Adobe Illustrator/XD</p>
            </div>
            <div className="flex-box margin">
              <div className="spacer small"></div>
              <a href={Pdf} className="outlined primary" rel="noreferrer" target="_blank"
                onClick={handleClick}
                aria-label="Case study deck">
                Case Study Deck
              </a>
            </div>
          </div>
        </section>
        <section id="project-content">
          <div className="spacer small"></div>
          <h2 className="introduction">Welcome to Paradise!</h2>
          <div className="spacer small"></div>
          <p>Calypso is the second project born out of the <a href="https://www.coursera.org/professional-certificates/google-ux-design?utm_source=google&utm_medium=institutions&utm_campaign=gwgsite&_ga=2.116649280.716155318.1630610849-91001625.1630610849" target="_blank" rel="noreferrer">Google UX Design Certificate Program</a>, the first one being <a href="/work/3sixty" target="_blank" rel="noreferrer">3sixty</a>.</p>
          <p>The goal of the project was to design a responsive website.</p>
          <p>When I had to choose the design prompt, I must be honest here: I live in Boston, summer was coming to an end which automatically means that "winter is coming" and I was not ready for that. I decided to design a responsive website for a yacht charter company based in the Caribbean Sea...</p>
          <p>It was also the opportunity for me to focus on a commonly flawed user experience with numerous user pain points: the booking flow.</p>
          <div className="spacer small"></div>
          <h2>Problem</h2>
          <p>Users visiting a yacht charter company want to book a vacation on a boat. However their needs can be quite different. I chose to focus on two groups of users:</p>
          <ul>
            <li>Users who want to book an all-inclusive and hassle-free vacation on a boat like Anwar:</li>
          </ul>
          <div className="illustration">
            <StaticImage
              src="../../../static/calypso/persona-1.png"
              alt="Persona representing the group of users who want to book an all-inclusive and hassle-free vacation on a boat"
              placeholder="blurred"
              width={800}
              aria-hidden="true" />
          </div>
          <div className="spacer small"></div>
          <ul>
            <li>Users who want to charter a boat and gain experience as a skipper like Nike:</li>
          </ul>
          <div className="illustration">
            <StaticImage
              src="../../../static/calypso/persona-2.png"
              alt="Persona representing the group of users who want to charter a boat and gain experience as a skipper"
              placeholder="blurred"
              width={800}
              aria-hidden="true" />
          </div>
          <div className="spacer small"></div>
          <h2>Design</h2>

          <h3>Competitive audit</h3>
          <p>I conducted a competitive audit on 2 direct competitors:</p>
          <ul>
            <li>Dream Yacht Charter: a big yacht charter company operating worldwide with a diverse fleet that suits any sailor</li>
            <li>The Moorings: another big yacht charter company who offers a loyalty rewards program</li>
          </ul>
          <p>and 2 indirect competitors:</p>
          <ul>
            <li>Jeanneau: a boat designer, builder and dealer who specializes in performant cruising yachts</li>
            <li>Cruise America: a Recreational Vehicle (RV) rental company</li>
          </ul>
          <p>The competitive audit allowed me to see what the competitors do well and what can be improved.</p>
          <p>Some gaps I identified include:</p>
          <ul>
            <li>Responsive web design and accessibility</li>
            <li>Usability of search feature</li>
            <li>No comparison feature offered by the direct competitors</li>
          </ul>
          <p>Some opportunities I identified include:</p>
          <ul>
            <li>Create fully responsive design</li>
            <li>Provide an easy search</li>
            <li>Support social media pictures and user reviews</li>
            <li>Provide inspirational tone and pictures</li>
            <li>Offer the possibility to compare boats to help decision making</li>
            <li>Add rental options to the booking flow</li>
            <li>Explain fees</li>
          </ul>
          <h3>Exploration of ideas</h3>
          <p>From there, I flexed a bit my creative muscle with the How Might We? and the Crazy 8 ideation techniques.</p>
          <ol>
            <li>The user creates their profile with their experience, certifications and a list of their preferred sailboats if any. Then the website tries to find the best matches among the list of yachts available with the yacht charter company. The user swipes left (rejects) or right (adds to their list of faves).</li>
            <li>Quick previews of sailboats with all the needed info at a glance. The user can then quickly share a preview  (link to the preview card) with friends or family to get their feedback.</li>
            <li>Each sailboat has a 360 view of the interior and exterior so the users can really visit the boat and make a more informed decision.</li>
            <li>The sailboats of the fleet are categorized by experience level so the user knows which category is better suited for their qualification.</li>
          </ol>
          <div className="illustration">
            <StaticImage
              src="../../../static/calypso/crazy-8.png"
              alt="Screenshot of crazy 8 sketches"
              placeholder="blurred"
              width={800}
              aria-hidden="true" /></div>
          <ol start="5">
            <li>Search based on a picture. The user uploads the picture of their dream sailboat and the web app then lists the best matches from the company's fleet.</li>
            <li>Search with criteria. The user is presented with a simple or advanced search. In the advanced search, they can select the criteria they are looking for.</li>
            <li>Free text search, a la Google. The user enters a sentence or keywords and the web app tries to find the best matches from the company's fleet.</li>
            <li>No search but a browsing feature where the user can see all the sailboats of the company's fleet with the important characteristics and pictures. They can quickly save for later or share with friends or family to get some feedback.</li>
          </ol>
          <h3>Sitemap</h3>
          <p>I chose a hierarchical website structure with very distinct sections corresponding to users' needs (search, learn, charter or own). Additional information can be found in the footer or second menu.</p>
          <div className="illustration"><StaticImage
            src="../../../static/calypso/sitemap.png"
            alt="Screenshot of the sitemap"
            placeholder="blurred"
            width={800}
            aria-hidden="true" /></div>

          <h3>Wireframing</h3>
          <p>Paper wireframes allowed me to quickly explore plenty of ideas and refine by selecting the best elements out of each version.</p>
          <div className="flex-container">
            <div className="flex-box margin">
              <p className="caption">Homepage</p>
              <StaticImage
                src="../../../static/calypso/paper-wireframe_homepage.jpg"
                alt="Paper wireframe of homepage"
                placeholder="blurred"
                width={400}
                aria-hidden="true" />
              <div className="spacer small"></div>
            </div>
            <div className="flex-box margin">
              <p className="caption">Search results</p>
              <StaticImage
                src="../../../static/calypso/paper-wireframe_search-results.jpg"
                alt="Paper wireframe of search results page"
                placeholder="blurred"
                width={400}
                aria-hidden="true" />
              <div className="spacer small"></div>
            </div>
            <div className="flex-box margin">
              <p className="caption">Boat details</p>
              <StaticImage
                src="../../../static/calypso/paper-wireframe_boat-details.jpg"
                alt="Paper wireframe of boat details page"
                placeholder="blurred"
                width={400}
                aria-hidden="true" />
              <div className="spacer small"></div>
            </div>
            <div className="flex-box margin">
              <p className="caption">Booking</p>
              <StaticImage
                src="../../../static/calypso/paper-wireframe_booking.jpg"
                alt="Paper wireframe of booking page"
                placeholder="blurred"
                width={400}
                aria-hidden="true" />
              <div className="spacer small"></div>
            </div>
          </div>
          <p>I sketched out paper wireframes for both desktop and mobile in order to achieve a fully responsive design.</p>
          <div className="flex-container">
            <div className="flex-box margin">
              <p className="caption">Search results (desktop version)</p>
              <StaticImage
                src="../../../static/calypso/paper-wireframe_search-results.jpg"
                alt="Paper wireframe of homepage"
                placeholder="blurred"
                width={400}
                aria-hidden="true" />
              <div className="spacer small"></div>
            </div>
            <div className="flex-box margin">
              <p className="caption">Search results (mobile version)</p>
              <StaticImage
                src="../../../static/calypso/paper-wireframe_search-results_mobile.jpg"
                alt="Paper wireframe of search results page"
                placeholder="blurred"
                width={400}
                aria-hidden="true" />
              <div className="spacer small"></div>
            </div>
          </div>
          <p>I then proceeded to port digitally the paper wireframes in Adobe XD, linked the different screens together and added interactions.</p>
          <p>Click on the following screenshot to access the low-fidelity prototype:</p>
          <div className="illustration">
            <a href="https://xd.adobe.com/view/89da4356-8a02-4514-8ee0-2f2368ea334c-dc89/" aria-label="Link to the low-fidelity prototype" target="_blank" rel="noreferrer">
              <StaticImage
                src="../../../static/calypso/lo-fi_prototype.png"
                alt="Low fidelity prototype of the website"
                placeholder="blurred"
                width={800}
                aria-hidden="true" />
            </a>
            </div>
          <div className="spacer small"></div>
          <h2>Outcome</h2>
          <p>After a usability study conducted on the low-fidelity prototype and another one conducted on the high-fidelity prototype, improvements were brought to the initial design:</p>
          <ul>
            <li>Charter type filter option was added</li>
            <li>Filter options menu can be closed by clicking anywhere on the screen</li>
            <li>Yacht cannot be changed at the end of the booking flow to avoid a disrupted booking experience</li>
            <li>Booking call-to-action button is now above the fold on the boat details page</li>
          </ul>
          <div className="spacer small"></div>
          <p>Here are some of the final mockups:</p>
          <div className="flex-container">
            <div className="flex-box margin">
              <p className="caption">Homepage</p>
              <StaticImage
                src="../../../static/calypso/mockup_homepage.png"
                alt="Mockup of the homepage"
                placeholder="blurred"
                width={800}
                aria-hidden="true" />
              <div className="spacer small"></div>
            </div>
            <div className="flex-box margin">
              <p className="caption">Search results</p>
              <StaticImage
                src="../../../static/calypso/mockup_search-results.png"
                alt="Mockup of the search results page"
                placeholder="blurred"
                width={800}
                aria-hidden="true" />
              <div className="spacer small"></div>
            </div>
            <div className="flex-box margin">
              <p className="caption">Boat details</p>
              <StaticImage
                src="../../../static/calypso/mockup_boat-details.png"
                alt="Mockup of the boat details page"
                placeholder="blurred"
                width={800}
                aria-hidden="true" />
              <div className="spacer small"></div>
            </div>
            <div className="flex-box margin">
              <p className="caption">Booking</p>
              <StaticImage
                src="../../../static/calypso/mockup_booking.png"
                alt="Mockup of the booking page"
                placeholder="blurred"
                width={800}
                aria-hidden="true" />
              <div className="spacer small"></div>
            </div>
          </div>
          <p>Click on the following screenshot to access the high-fidelity prototype:</p>
          <div className="illustration">
            <a href="https://xd.adobe.com/view/62033fc7-bb8e-41a6-9bcf-794c014e2e1e-3750/" aria-label="Link to the high-fidelity prototype" target="_blank" rel="noreferrer">
              <StaticImage
                src="../../../static/calypso/hi-fi_prototype.png"
                alt="High-fidelity prototype of the website"
                placeholder="blurred"
                width={1100}
                aria-hidden="true" />
            </a>
            </div>
          <div className="spacer small"></div>
          <h2>Reflection</h2>
          <p>I enriched my knowledge of Adobe XD with this project: use of repeat grids and stacks, use of fancier transitions (overlay, slide-up and transitions between states of the same component)</p>
          <p>During the design phase, I also learned about the different types of sitemap (hierarchical, sequential, matrix and database) and the importance of responsive design to really make the best of each device's screen size.</p>
          <p>This second project of the Google UX Design Certificate Program was also a great opportunity to go through the whole design thinking process again and to really master the process and all the great tools and templates at my disposal.</p>
          <div className="spacer large"></div>
        </section>
      </main>
      <Footer />
    </>
  );
}