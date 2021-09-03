import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function Work({ data }) {
  // const work = data.markdownRemark;
  return (
    //TODO: Seo pathname={work.fields.slug}
    <Layout>
      {/* <h1>{work.frontmatter.title}</h1> */}
      {/* <div dangerouslySetInnerHTML={{ __html: work.html }} /> */}
    </Layout>
  );
}

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `;
