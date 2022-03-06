import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SeO from "../components/seo";

const Post = ({ data, pageContext }) => {
	// console.log(data);
	// const { next, prev } = pageContext;
	const { html, frontmatter } = data.markdownRemark;
	// const { title, tags, permalink, description } = frontmatter;
	const { title } = frontmatter;
	return (
		<Layout>
			<SeO title={title} />
			<div className="page-header ">
				<div className="wrapper">
					<h1 className="display">{title}</h1>
				</div>
			</div>
			<section>
				<div className="wrapper">
					<div className="wrapper-m">
						<div className="blogContent">
							<div
								dangerouslySetInnerHTML={{ __html: html }}
							></div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Post;

export const query = graphql`
	query($pathSlug: String!) {
		markdownRemark(frontmatter: { permalink: { eq: $pathSlug } }) {
			html
			frontmatter {
				permalink
				title
				tag
				category
			}
		}
	}
`;
