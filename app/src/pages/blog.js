import React from "react";
//import { Link } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import Parallax from "../components/ParallaxImage";
import { graphql } from "gatsby";
import PostBlock from "../components/PostBlock";

const Portfolio = ({ data }) => (
  <Layout>
    <SEO title="Developer Portfolio" />
    <Parallax filename="x2.jpg" />
    <div className="page-header">
      <div className="wrapper">
        <h1 className="display">Blog</h1>
      </div>
    </div>

    
    <section >
      <div className="wrapper">
        <div className="wrapper-m">
          <p>
            I write this blog personally focused mostly on tech-related
            articles, but I sometimes write about my day to day experience as a
            web developer. I feel that this is an excellent way to channel my
            ideas and thoughts through this blog.
          </p>
          <p>
            I write what I feel is essential on current modern technology, or
            what the future technology beholds. And maybe some special
            tools/things that can be used to create a better internet experience
          </p>
          <p>
            It is incredible to know what we don’t know. I think that those with
            the thirst for knowledge can change this world. I have that thirst,
            and I quench it by not only learning about new technology and other
            things, I also share it with you, through this blog.
          </p>
        </div>
      </div>
    </section>
    <PostBlock data={data.allMarkdownRemark.edges} />
  </Layout>
);
export default Portfolio;

export const query = graphql`
  query AllPostBlock {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { order: DESC, fields: frontmatter___port_date }
    ) {
      edges {
        node {
          id
          __typename
          frontmatter {
            title
            category
            tag
            permalink
            id
            date(formatString: "MMMM DD, YYYY")
            type
          }
        }
      }
    }
  }
`;
