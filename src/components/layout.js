import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";

const ListLink = (props) => {
  return (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  );
}

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header>
        <Link to="/">{ data.site.siteMetadata.title }</Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">About</ListLink>
          <ListLink to="/work">Work</ListLink>
          <ListLink to="/resume">Resume</ListLink>
          <ListLink to="/contact">Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}