import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Post = ({ data, pageContext }) => {
  // console.log(data);
  const { next, prev } = pageContext;
  const { html, frontmatter, excerpt } = data.markdownRemark;
  const { title, tags, permalink, description } = frontmatter;
  return (
    <Layout>
      <SEO title={title} />
      <div className="page-header ">
        <div className="wrapper">
          <h1 className="display">{title}</h1>
        </div>
      </div>
      <section>
        <div className="wrapper">
          <div className="wrapper-m">
           <div className="blogContent">
           <div dangerouslySetInnerHTML={{ __html: html}} ></div>
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
