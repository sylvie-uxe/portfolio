import React from "react";
import {Helmet} from "react-helmet";
import {useSiteMetadata} from "../hooks/use-site-metadata";

function Seo() {
  const { title, author, description } = useSiteMetadata();
  const lang = "en";

  return (
    <Helmet htmlAttributes={{ lang: lang }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: description
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: description
        }
      ]}
    />
  );
}

export default Seo;
