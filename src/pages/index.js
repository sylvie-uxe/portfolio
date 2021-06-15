import React from "react";
import { graphql } from "gatsby";

import { Layout, Hero, About, Work, Resume, Contact } from "../components";

function Home() {
  return (
    <Layout>
      <Hero/>
      <About/>
      <Work/>
      <Resume/>
      <Contact/>
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
`;

export default Home;
