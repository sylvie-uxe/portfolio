import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { Themed } from 'theme-ui';

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
                tools
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
      `
  );

  const projects = data.projects.edges.filter(({ node }) => node);

  return (
    <section id="work">
      <div className="spacer large"></div>
      <Themed.h2>Work</Themed.h2>
      <div className="flex-container">
      {
        projects && projects.map( ({ node }, i) => {
          const { frontmatter, excerpt } = node;
          const { title, cover, date, role, tools } = frontmatter;
          // const { slug } = fields;
          const image = getImage(cover);
          const altText = "Project " + title;

          return(
          <div className="flex-box" key={i}>
            <p className="title show-on-mobile">{title}</p>
            <GatsbyImage image={image} alt={altText}/>
            {/* <Link to={slug}>Details</Link> */}
            <div className="overlay hide-on-mobile">
              <div className="overlay-text">
                <p className="title">{title}</p>
                <p>{date}</p>
                <p>Role: {role}</p>
                {tools.length && (
                <>
                  <ul>
                  Tools: {tools.map((tool, i) => (
                      <li key={i}>{tool}</li>
                    ))}
                  </ul>
                </>
                )}
                <p>{excerpt} More details coming soon!</p>
              </div>
            </div>
            <div className="show-on-mobile">
              <p>{date}</p>
              <p>Role: {role}</p>
              {tools.length && (
                <>
                  <p>Tools:</p>
                  <ul>{tools.map((tool, i) => (
                      <li key={i}>{tool}</li>
                    ))}
                  </ul>
                </>
              )}
              <p>{excerpt} More details coming soon!</p>
              <div className="spacer small"></div>
            </div>
          </div>
        );
        })
      }
      </div>
    </section>
  );
}

export default Work;
