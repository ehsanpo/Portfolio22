import React from "react";
import { Link } from 'gatsby';
import { graphql } from 'gatsby'

const Post = ({ data, pageContext }) => {
    console.log(data);
    const { next, prev } = pageContext;
    const {html, frontmatter, excerpt } = data.markdownRemark
    const {title, tags, permalink, description} = frontmatter
    return (
        <div>
            {title}
        </div>
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