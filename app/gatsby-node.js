const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

// exports.onCreateNode = ({ node, getNode, actions }) => {
//     const { createNodeField } = actions;
//     if (node.internal.type === `MarkdownRemark`) {
//       const slug = createFilePath({
//         node,
//         getNode,
//         basePath: `portfolio`
//       })
//       createNodeField({
//         node,
//         name: `slug`,
//         value: `${slug}`
//       });
//     }
//   };

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark(filter: {frontmatter: {type: {in: "portfolio"}}}) {
        edges {
          next {
            frontmatter {
              title
              permalink
            }
          }
          previous {
            frontmatter {
              title
              permalink
            }
          }
          node {
            frontmatter {
              permalink
            }
          }
        }
      }
    }
  `);
  result.data.allMarkdownRemark.edges.forEach(({ node, next, previous }) => {
    createPage({
      path: node.frontmatter.permalink,
      component: path.resolve(`./src/templates/portfolio.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        permalink: node.frontmatter.permalink,
        type_: node.frontmatter.type,
        next,
        previous,
      },
    });
  });
};
