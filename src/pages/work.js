import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

export default function Work({ data }) {
  return (
    <Layout>
      <Seo title="Work" />
      <h1>Work</h1>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt={"My Github Graph"}
        />
      <h4>{data.allMarkdownRemark.totalCount} projects</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
          </h3>
          <Link to={node.fields.slug}>Details</Link>
          <p>Role: {node.frontmatter.role}</p>
          <p>Tools: {node.frontmatter.tools}</p>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query {
    file(
      relativePath: { eq: "my-github-graph.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
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
`;
