import React from "react";
import {useStaticQuery, graphql, Link} from "gatsby";
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { Themed } from 'theme-ui';

function Work() {
  const data = useStaticQuery(
    graphql`
      query {
        projects: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          totalCount
          edges {
            node {
              id
              frontmatter {
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
      <Themed.h2>Work</Themed.h2>
      <div className="flex-container">
      {
        projects && projects.map( ({ node }, i) => {
          const { frontmatter, fields, excerpt } = node;
          const { title, cover, date, role, tools } = frontmatter;
          const { slug } = fields;
          const image = getImage(cover);
          const altText = "Project " + title;

          return(
          <div className="flex-box" key={i}>
            <GatsbyImage image={image} alt={altText}/>
            <Link to={slug}>Details
            </Link>
            <Themed.h3>
              {title} <span>— {date}</span>
            </Themed.h3>
            <Themed.p>Role: {role}</Themed.p>
            {tools.length && (
              <>
                <Themed.p>Tools:</Themed.p>
                <ul>
                  {tools.map((tool, i) => (
                    <li key={i}>{tool}</li>
                  ))}
                </ul>
              </>
            )}
            <Themed.p>{excerpt}</Themed.p>
          </div>
        );
        })
      }
      </div>
    </section>
  );
}

export default Work;
