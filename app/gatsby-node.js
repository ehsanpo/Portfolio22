const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {

 
      const slug = createFilePath({
        node,
        getNode,
        basePath: `portfolio`
      })

      createNodeField({
        node,
        name: `slug`,
        value: `${slug}`
      });


    }
  };

  exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
      query  {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                permalink
              }
            }
          }
        }
      }
    `);
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.permalink,
        component: path.resolve(`./src/templates/portfolio.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.frontmatter.permalink,
        },
      })
    })
   console.log(JSON.stringify(result, null, 4))
  }