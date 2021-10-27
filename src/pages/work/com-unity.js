import React from "react";
import {StaticImage} from 'gatsby-plugin-image';
import {Seo, WorkHeader, Footer} from "../../components";
import {handleClick} from "../../utils/dom";
import Pdf from "../../../static/com-unity/com-unity_case-study-deck.pdf";
import websiteDesktop from "../../../static/com-unity/desktop_website.mp4";
import websiteMobile from "../../../static/com-unity/mobile_website.mp4";

export default function ComUnity() {
  return (
    <>
      <Seo />
      <WorkHeader />
      <main>
        <StaticImage
          src="../../../static/com-unity/hero.png"
          alt="Desktop, tablet and smartphone mockups of the app"
          placeholder="blurred"
          width={1360}
          aria-hidden="true" />
        <h1>Com.unity</h1>
        <section id="project-intro">
          <div className="flex-container">
            <div className="flex-box margin">
              <p className="border"><strong>Role:</strong><br />UX Designer</p>
            </div>
            <div className="flex-box margin">
              <p className="border"><strong>Duration:</strong><br />1 month<br />October 2021</p>
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
          <h2 className="introduction">Helping cities organize help</h2>
          <div className="spacer small"></div>
          <p>Com.unity is the third and last project born out of the <a href="https://www.coursera.org/professional-certificates/google-ux-design?utm_source=google&utm_medium=institutions&utm_campaign=gwgsite&_ga=2.116649280.716155318.1630610849-91001625.1630610849" target="_blank" rel="noreferrer">Google UX Design Certificate Program</a>, the first one being <a href="/work/3sixty" target="_blank" rel="noreferrer">3sixty</a> and the second one being <a href="/work/calypso" target="_blank" rel="noreferrer">Calypso</a>.</p>
          <p>The goal of the project was to design a social good mobile and web app.</p>
          <p>I chose to design a tool for cities to ensure that everyone has food and shelter. What if people in need in our city could be helped with a better organization and less waste of food, free spaces and free time?</p>
          <p>This wicked problem cannot be solved with pure logistics but what if we could at least ease a bit the life of our neighbors in need?</p>
          <div className="spacer small"></div>
          <h2>Problem</h2>
          <p>The users of the app are people living in a city who want to help, people working for a city who will organize help, and people living in a city who need help. Depending on their situation, a given user who needs help can also help and vice-versa.</p>
          <p>The problem is quite complex and in the scope of the Google UX Design Certificate Program, I decided to focus on 2 groups of users:</p>
          <p>We can help our neighbors in a lot of different ways. I chose to only focus on two groups of users:</p>
          <ul>
            <li>Users who want to help during their free time and make good use of the resources they feel lucky ot have, like Paolo:</li>
          </ul>
          <div className="illustration">
            <StaticImage
              src="../../../static/com-unity/persona-1.png"
              alt="Persona representing the group of users who want to help during their free time and make good use of the resources they feel lucky ot have"
              placeholder="blurred"
              width={800}
              aria-hidden="true" />
          </div>
          <div className="spacer small"></div>
          <ul>
            <li>Users who own a food business and hate to see unsold food thrown away when their neighbors are food insecure:</li>
          </ul>
          <div className="illustration">
            <StaticImage
              src="../../../static/com-unity/persona-2.png"
              alt="Persona representing the group of users who own a food business and hate to see unsold food thrown away when their neighbors are food insecure"
              placeholder="blurred"
              width={800}
              aria-hidden="true" />
          </div>
          <div className="spacer small"></div>
          <h2>Design</h2>
          <h3>Competitive audit</h3>
          <p>I conducted a competitive audit on 3 direct competitors:</p>
          <ul>
            <li><strong>Olio</strong>: a food-sharing platform, connecting people with neighbors and local shops all over the world</li>
            <li><strong>412 Food Rescue</strong> who connects users with nonprofits who serve those who are food insecure</li>
            <li><strong>Shelter App</strong> who helps homeless and low-income families connect to services and resources using web and mobile app platforms</li>
          </ul>
          <p>The competitive audit allowed me to see what the competitors do well and what can be improved.</p>
          <p>Some gaps I identified include:</p>
          <ul>
            <li>The desktop version, when it exists, is not responsive enough</li>
            <li>Apps do not support businesses as users</li>
            <li>People in need cannot ask for what they need</li>
            <li>Cities are completely out of the picture, nonprofits and charities are the ones who help people in need</li>
          </ul>
          <p>Some opportunities I identified include:</p>
          <ul>
            <li>Make the app and website responsive</li>
            <li>Include cities, businesses, and people in need</li>
            <li>Develop a strong brand identity that is consistent between desktop and mobile</li>
            <li>The app on mobile should use more mobile features such as localization, pictures, phone calls, or offline download for later use.</li>
          </ul>
          <h3>Exploration of ideas</h3>
          <p>Then, it was time to come up with a LOT of ideas. I applied the Crazy 8 technique.</p>
          <ol>
            <li>The same app can have very different users: people who wants to help, people who work for the city and manage the app, and people who need help. A very simple menu allows them to switch from one use to another.</li>
            <li>On a mobile, a map with all the volunteer missions around the user or places where the user can get free food or other resources could be very useful</li>
            <li>The users can filter the results with relevant options such as the length in miles of the volunteer mission, or how far the charities or nonprofits are from the user, when they are open, etc</li>
            <li>The app could allow users to let the city know what they need, anonymously. A kind of way for people working for the city to take a pulse of an area</li>
          </ol>
          <div className="illustration">
            <StaticImage
              src="../../../static/com-unity/crazy-8.png"
              alt="Screenshot of crazy 8 sketches"
              placeholder="blurred"
              width={800}
              aria-hidden="true" /></div>
          <ol start="5">
            <li>A user can create listings if they have something to give away. The listing will then go through the city and after validation, it will turn into a volunteer mission pushed to the app: go pick up the item and drop it off at this location</li>
            <li>A user can sync their calendar in the app so only the volunteer missions matching their free time are proposed and then added to their calendar for an easy scheduling</li>
            <li>Users can message each other, for instance a volunteer who has to pick up free food and the business owner giving away food</li>
            <li>Users can also create and join a volunteer team: a business owner giving away food may need a team of volunteers to pack food, pick up food, etc</li>
          </ol>
          <h3>Wireframing</h3>
          <p>Paper wireframing allowed me to explore multiple ideas in a cheap and fast way and I kept the best elements from the sketches and port the wireframes digitally in Adobe XD.</p>
          <p>I had already created a library in Adobe XD with icons, pictures, colors and character styles for wireframing so I can create wireframes pretty quickly now.</p>
          <p>I identified multiple problems in a usability study conducted on 4 participants. I solved those problems in a second version of the low-fidelity prototype.</p>
          <p>Click on the following screenshot to access the low-fidelity prototype modified after the usability study:</p>
          <div className="illustration">
            <a href="https://xd.adobe.com/view/77a8f065-79fa-4c6c-8d95-672f0733fd81-22fb/" aria-label="Link to the low-fidelity prototype" target="_blank" rel="noreferrer">
              <StaticImage
                src="../../../static/com-unity/lo-fi_prototype.png"
                alt="Low fidelity prototype of the app"
                placeholder="blurred"
                width={800}
                aria-hidden="true" />
            </a>
            </div>
          <div className="spacer small"></div>
          <h3>Sitemap</h3>
          <p>I designed the app for mobile, tablet and desktop. If people don't have a smartphone, they can still use the app on a computer at the library, etc. They can also prefer to use a computer because some tasks might be easier (browsing listings, etc).</p>
          <p>I chose a hierarchical website structure: the homepage presents the app, its features and gives entry points to the users.</p>
          <div className="illustration"><StaticImage
            src="../../../static/com-unity/sitemap.png"
            alt="Screenshot of the sitemap"
            placeholder="blurred"
            width={800}
            aria-hidden="true" /></div>
          <div className="spacer small"></div>
          <h2>Outcome</h2>
          <p>Here are recordings of the website created for the app.</p>
          <div className="illustration">
              <video controls style={{ maxWidth: `640px` }}>
                <source src={websiteDesktop} type="video/mp4" />
                <track kind="captions"/>
                Unfortunately your browser does not support videos but you can have a look at the high-fidelity prototype mentioned above.
              </video>
              <p className="caption">Web app on desktop</p>
              <div className="spacer large"></div>
          </div>
          <div className="illustration">
              <video controls style={{ maxWidth: `240px` }}>
                <source src={websiteMobile} type="video/mp4" />
                <track kind="captions"/>
                Unfortunately your browser does not support videos but you can have a look at the high-fidelity prototype mentioned above.
              </video>
              <p className="caption">Web app on mobile</p>
              <div className="spacer large"></div>
          </div>
          <p>Click on the following screenshot to access the high-fidelity prototype of the app on mobile:</p>
          <div className="illustration">
            <a href="https://xd.adobe.com/view/b235a427-85a2-4692-9b49-b91d9e14351c-e766/" aria-label="Link to the high-fidelity prototype" target="_blank" rel="noreferrer">
              <StaticImage
                src="../../../static/com-unity/hi-fi_prototype.png"
                alt="High-fidelity prototype of the app"
                placeholder="blurred"
                width={800}
                aria-hidden="true" />
            </a>
            </div>
          <div className="spacer small"></div>
          <h2>Reflection</h2>
          <p>Project after project, I could streamline my work. The design thinking process is now perfectly integrated. I also put in place components in Adobe XD to speed up the digital wireframing.</p>
          <p>During this project, I learned a lot about the importance of the 4 C's:</p>
          <ul>
            <li>Complementarity: devices can interact with each other within the app in order for the user to have a better overall experience.</li>
            <li>Context: it's important to understand on which device the users will use the app to design an experience that matches their needs on a specific device.</li>
            <li>Consistency: design is consistent across the different devices so the users are not lost.</li>
            <li>Continuity: users can save places to their favorites on desktop and go to those places later using their smartphone GPS for instance. A listing can be saved as draft on desktop and published later on a smartphone after the user took pictures of the listing's object, etc</li>
          </ul>
          <div className="spacer large"></div>
        </section>
      </main>
      <Footer />
    </>
  );
}