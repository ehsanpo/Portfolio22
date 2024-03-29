const path = require("path");

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;

	return new Promise((resolve, reject) => {
		const postTemplate = path.resolve("src/templates/post.js");
		const portfolioTemplate = path.resolve("src/templates/portfolio.js");
		const tagPage = path.resolve("src/templates/tags-page.js");
		const tagPosts = path.resolve("src/templates/tags.js");

		resolve(
			graphql(
				`
					query {
						allMarkdownRemark(
							sort: { order: ASC, fields: [frontmatter___date] }
						) {
							edges {
								next {
									frontmatter {
										permalink
										title
									}
								}
								previous {
									frontmatter {
										permalink
										title
									}
								}
								node {
									id
									frontmatter {
										permalink
										title
										tag
										category
										type
									}
								}
							}
						}
					}
				`
			).then((result) => {
				if (result.errors) {
					return reject(result.errors);
				}

				const posts = result.data.allMarkdownRemark.edges;

				const postsByTag = {};
				// create tags page
				// posts.forEach(({ node }) => {
				//   if (node.frontmatter.tag) {
				//     node.frontmatter.tag.forEach(tag => {
				//       if (!postsByTag[tag.toLowerCase()]) {
				//         postsByTag[tag.toLowerCase()] = [];
				//       }

				//       postsByTag[tag.toLowerCase()].push(node);
				//     });
				//   }
				// });

				// const tags = Object.keys(postsByTag);

				// createPage({
				//   path: '/tags',
				//   component: tagPage,
				//   context: {
				//     tags: tags.sort(),
				//   },
				// });

				// //create tags
				// tags.forEach(tagName => {
				//   const posts = postsByTag[tagName];

				//   createPage({
				//     path: `/tags/${tagName}`,
				//     component: tagPosts,
				//     context: {
				//       posts,
				//       tagName,
				//     },
				//   });
				// });

				// const postsByCat = {};
				// // create cat page
				// posts.forEach(({ node }) => {
				//   if (node.frontmatter.category) {
				//     node.frontmatter.category.forEach(cat => {
				//       if (!postsByCat[cat.toLowerCase()]) {
				//         postsByCat[cat.toLowerCase()] = [];
				//       }

				//       postsByCat[cat.toLowerCase()].push(node);
				//     });
				//   }
				// });

				// const cats = Object.keys(postsByCat);

				// createPage({
				//   path: '/category',
				//   component: tagPage,
				//   context: {
				//     tags: cats.sort(),
				//   },
				// });

				// //create cats
				// cats.forEach(tagName => {
				//   const posts = postsByCat[tagName];

				//   createPage({
				//     path: `/category/${tagName}`,
				//     component: tagPosts,
				//     context: {
				//       posts,
				//       tagName,
				//     },
				//   });
				// });

				//create posts
				posts.forEach(({ node, next, previous }, index) => {
					// console.log ( node , "type" )
					const path = node.frontmatter.permalink;
					const type = node.frontmatter.type;

					createPage({
						path,
						component:
							type == "post" ? postTemplate : portfolioTemplate,
						context: {
							pathSlug: path,
							permalink: path,
							previous,
							next,
							id: node.id,
						},
					});
				});
			})
		);
	});
};

/* Allows named imports */
exports.onCreateWebpackConfig = ({ actions, stage, loaders }) => {
	actions.setWebpackConfig({
		resolve: {
			modules: [path.resolve(__dirname, "src"), "node_modules"],
		},
	});
	if (stage === "build-html" || stage === "develop-html") {
		actions.setWebpackConfig({
		  module: {
			rules: [
			  {
				test: /skills-chart/,
				use: loaders.null(),
			  },
			],
		  },
		})
	  }
};
