import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

export default function Home({ data }) {
  return (
    <Layout>
      <p>Hi, I'm</p>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>I design and I code.</p>
      <br/>
      <p>I'm a User eXperience engineer. I'm passionate about bringing joy to people's lives through valuable, equitable and simple design. I then write reliable and extensible code to make the dream come true.
Curiosity, a constant search for improvement and a passion for learning are my driving forces.</p>
    </Layout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`