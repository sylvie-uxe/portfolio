import React from "react";
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
      <Seo/>
      <Header menuLinks={site.siteMetadata.menuLinks}/>
      <main id="primary">{children}</main>
      <Footer/>
    </>
  );
}

export default Layout;