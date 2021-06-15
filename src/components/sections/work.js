import React from "react";
import {useStaticQuery, graphql, Link} from "gatsby";
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

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
                    gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
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
      <h2>Work</h2>
      {
        projects && projects.map( ({ node }, i) => {
          const { frontmatter, fields, excerpt } = node;
          const { title, cover, date, role, tools } = frontmatter;
          const { slug } = fields;
          const image = getImage(cover);

          return(
          <div key={i}>
            <GatsbyImage image={image} />
            <h3>
              {title} <span>— {date}</span>
            </h3>
            <Link to={slug}>Details</Link>
            <p>Role: {role}</p>
            {tools.length && (
              <>
                <p>Tools:</p>
                <ul>
                  {tools.map((tool, i) => (
                    <li key={i}>{tool}</li>
                  ))}
                </ul>
              </>
            )}
            <p>{excerpt}</p>
          </div>
        );
        })
      }
    </section>
  );
}

export default Work;
