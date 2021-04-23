import React from "react"
//import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Parallax from "../components/ParallaxImage";
import {graphql} from "gatsby";
import PortfolioBlock from "../components/PortfolioBlock"

const Portfolio = ({data}) => (
  <Layout>
    <SEO title="Developer Portfolio" />
    <Parallax filename="x2.jpg" />
    <section>
        <div className="wrapper">
            <h1 className="display">Portfolio</h1>
            <div>
            Here are my best work put forth for you to see. I do various projects, and my concept is that focusing on the complete satisfaction of the end user. I see things from both, as a developer’s perspective and the end user’s perspective. I work for customer satisfaction. And I provide quality work only. I do front-end, back-end, and site maintenance and also work as a system admin.
            Please have a look below into my current portfolio. I am sure you’ll love the work that I have created, and if you have any questions, please do not hesitate to ask. I believe in providing value to you, my client so that we can work long term, and make something worthwhile.
            </div>
        </div>
    </section>
    <PortfolioBlock data={data.allMarkdownRemark.edges} />
  
  </Layout>
)
export default Portfolio;

export const query = graphql`
query AllPortfolioBlock {
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "portfolio"}}}, sort: {order: DESC, fields: frontmatter___port_date}) {
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
          logo
          date(formatString: "MMMM DD, YYYY")
          type
        }
      }
    }
  }
}


`;