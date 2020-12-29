import React from "react";
// import InViewMonitor from "react-inview-monitor";
import Layout from "../components/layout";
import SEO from "../components/seo";
// import Button from "../components/Button";
// import Box from "../components/Card";
// import Stack from "../components/Stack";
// import Award from "../components/Award";
// import Parallax from "../components/ParallaxImage";
import Hero from "../components/Hero";
import PortfolioBlock from "../components/PortfolioBlock"

const IndexPage = ({data}) => {
  
  const portfolioBlockData = data.allMarkdownRemark.edges
  return(
    <Layout>
      <SEO title="Home" />
      <Hero />
      <PortfolioBlock data={portfolioBlockData}/>
    </Layout>
)};

export default IndexPage;


export const query = graphql`
 query PortfolioBlock{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {onHome: {eq: true}}}) {
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
        }
        excerpt(pruneLength: 280)
      }
    }
  }
}

`;