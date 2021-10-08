import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import {getImage, GatsbyImage} from 'gatsby-plugin-image';
import {Themed} from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';

function Work() {
  const data = useStaticQuery(
    graphql`
      query {
        projects: allMarkdownRemark(sort: { fields: [frontmatter___rank], order: DESC }) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                rank
                title
                cover {
                  childImageSharp {
                    gatsbyImageData(width: 600, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                  }
                }
                date
                role
                link
              }
              excerpt
            }
          }
        }
      }
      `
  );

  const projects = data.projects.edges.filter(({node}) => node);

  return (
    <section id="work">
      <div className="spacer large"></div>
      <Themed.h2>Work</Themed.h2>
      <div className="flex-container">
        {
          projects && projects.map(({node}, i) => {
            const {frontmatter, excerpt} = node;
            const {title, cover, date, role, link} = frontmatter;
            const image = getImage(cover);
            const altText = "Project " + title;
            const url = link ? link : "#work";
            let isExternalLink = false;
            if ( link && !link.startsWith('/') ) {
              isExternalLink = true;
            }

            return (
              <div className="flex-box" key={i}>
                <p className="title show-on-mobile">{title}</p>
                {isExternalLink && (
                  <a href={url} rel="noreferrer" target="_blank">
                    <GatsbyImage image={image} alt={altText} />
                    <div className="overlay hide-on-mobile">
                      <div className="overlay-text">
                        <p className="title">{title}</p>
                        <p>{date}</p>
                        <p>Role: {role}</p>
                        <p>{excerpt}</p>
                      </div>
                    </div>
                  </a>
                )}
                {!isExternalLink && (
                  <a href={url}>
                    <GatsbyImage image={image} alt={altText} />
                    <div className="overlay hide-on-mobile">
                      <div className="overlay-text">
                        <p className="title">{title}</p>
                        <p>{date}</p>
                        <p>Role: {role}</p>
                        <p>{excerpt}</p>
                      </div>
                    </div>
                  </a>
                )}
                <div className="show-on-mobile">
                  <p>{date}</p>
                  <p>Role: {role}</p>
                  <p>{excerpt}</p>
                  {link && isExternalLink && (
                    <>
                      <a href={url} rel="noreferrer" target="_blank">Have a look! <FontAwesomeIcon icon={faExternalLinkAlt}/></a>
                    </>
                  )}
                  {link && !isExternalLink && (
                    <a href={url}>Have a look!</a>
                  )}
                  <div className="spacer small"></div>
                </div>
              </div>
            );
          })
        }
      </div>
      <div className="spacer large"></div>
    </section>
  );
}

export default Work;
