// const path = require(`path`);
// const { createFilePath } = require(`gatsby-source-filesystem`);

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   if (node.internal.type === `MarkdownRemark`) {
//     const { createNodeField } = actions;
//     const slug = createFilePath({ node, getNode, basePath: `projects` });
//     console.log(`Slug = ${slug}`);
//     createNodeField({
//       node,
//       name: `slug`,
//       value: `work` + slug,
//     });
//   }
// };

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const result = await graphql(`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `);

//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     createPage({
//       path: node.fields.slug,
//       component: path.resolve(`./src/templates/work.js`),
//       context: {
//         slug: node.fields.slug,
//       },
//     });
//   });
// };
