import React from "react";
import "@fontsource/open-sans"; // Defaults to weight 400 with all styles included.
import { useStaticQuery, graphql } from "gatsby";
import Seo from "./seo";
import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `
  );

  return (
    <>
      <a href="#primary">
        Skip to the content
      </a>
      <Seo/>
      <Header menuLinks={site.siteMetadata.menuLinks}/>
      <main id="primary">{children}</main>
      <Footer siteTitle={site.siteMetadata.title}/>
    </>
  );
}

export default Layout;