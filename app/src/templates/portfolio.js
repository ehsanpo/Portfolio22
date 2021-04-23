import React, { useRef, useState, useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, Link } from "gatsby";
import LocalImage from "../components/LocalImage";
import Button from "../components/Button";

const IndexPage = ({ data, pageContext }) => {
  const portfolioBlockData = data.markdownRemark.frontmatter;
  const portfolioBlockBody = data.markdownRemark.html;
  const [headerClose, setHeaderClose] = useState("");

  const { next, previous } = pageContext;
  const nextArticle = next && (
    <Link
      to={next.frontmatter.permalink}
      style={{ maxWidth: "25%", textAlign: "right" }}
    >
      <strong>Next</strong> <br />
      {next.frontmatter.title}
    </Link>
  );

  const prevArticle = previous && (
    <Link to={previous.frontmatter.permalink} style={{ maxWidth: "25%" }}>
      <strong>Previous</strong> <br />
      {previous.frontmatter.title}
    </Link>
  );

  useEffect(() => {
    let open = setTimeout(function () {
      setHeaderClose("portfolio-header--close");
      clearTimeout(open);
    }, 1000);
  }, []);

  console.log(data);
  console.log(pageContext);
  return (
    <Layout>
      <SEO title={portfolioBlockData.title} />
      <div className="portfolio-page page">
        <div
          className={`portfolio-header ${headerClose} ${
            portfolioBlockData.background_image[0] === ""
              ? "no-header"
              : "header"
          } `}
        >
          <div className={`portfolio-header-top`}>
            <div className="wrapper">
              <h1 className="portfolio-header-title display invert">
                {portfolioBlockData.client}
              </h1>
            </div>
          </div>
          <div className="portfolio-header-mid v-center">
            <div className="portfolio-topImage">
              <LocalImage filename={portfolioBlockData.logo} />
            </div>
            <h2 className="display">{portfolioBlockData.title}</h2>
            <h3>{portfolioBlockData.tagline}</h3>
            <div className="links">
                {portfolioBlockData.case_link_url && (
                  <Button
                    className="btn--3"
                    type="link"
                    to={portfolioBlockData.case_link_url[0]}
                  >
                    Visit Site
                  </Button>
                )}
                
                </div>
          </div>
          <LocalImage
            filename={portfolioBlockData.background_image}
            className="portfolio-image"
            background
            style={{ height: "100%" }}
          ></LocalImage>

          <div className="portfolio-header-bot">
            <div className="wrapper">
              <div className="portfolio-header-date">
                <h3>{portfolioBlockData.port_date}</h3>
              </div>
            </div>
          </div>
        </div>
        <section>
          {/* <div className="wrapper">
            <div>
              <div className="decor decor--dot"></div>
              <div className="decor decor--box"></div>
              <div className="header-id">{portfolioBlockData.id}</div>
              <h2 className="display invert">{portfolioBlockData.title}</h2>
              <div className="decor decor--box"></div>
              <div className="decor decor--dot"></div>
            </div>
          </div> */}

          <div className="portfolioBlockBody wrapper">
            <div className="box">
              <span className="box__glitch"></span>
              <div className="header">
                <span>01</span> Info
              </div>
              <hr />
              <div className="box-wrapper">
                <h4>
                  <span>Date</span>

                  {portfolioBlockData.port_date}
                </h4>
                <h4>
                  <span>Client</span>

                  {portfolioBlockData.client}
                </h4>
                {portfolioBlockData.agancy && (
                  <h4>
                    <span>Agancy</span>

                    {portfolioBlockData.agancy}
                  </h4>
                )}
              </div>
            </div>

            <div>
              <div>
                <div className="box">
                  <span className="box__glitch"></span>
                  <div className="header">
                    <span>01</span> Roles
                  </div>
                  <hr />
                  <div className="box-wrapper max-height">
                    <div className="tags">
                      {portfolioBlockData.category.map((cat) => (
                        <span key={cat}>{cat} </span>
                      ))}
                    </div>
                  </div>
                </div>
               
              </div>
            </div>

            <div className="box">
              <span className="box__glitch"></span>
              <div className="header">
                <span>02</span> Tech
              </div>
              <hr />
              <div className="box-wrapper max-height ">
                <div className="tags">
                  {portfolioBlockData.tag.map((tag) => (
                    <span key={tag}>{tag} </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="portfolioBlockBody wrapper"></div>

          {portfolioBlockBody && (
            <div className="wrapper">
              <div className="box">
                <span className="box__glitch"></span>
                <div className="header">
                  <span>4</span> About
                </div>
                <hr />
                <div className="box-wrapper">
                  <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: portfolioBlockBody }}
                  />
                  <div>{portfolioBlockData.body_text}</div>
                </div>
              </div>
              <br />
            </div>
          )}

          <div className="portfolioBlockBody wrapper">
            <div>
              <br />
              <div className="box">
                <div className="header">
                  <span>5</span> Gallery
                </div>
                <hr />
                <hr />
                <div className="box-wrapper">
                  {portfolioBlockData.bilder.map((bild) => (
                    <LocalImage key={bild} filename={bild} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper pagination">
            {prevArticle}
            {nextArticle}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query SingelPortfolio($permalink: String!) {
    markdownRemark(frontmatter: { permalink: { eq: $permalink } }) {
      html
      frontmatter {
        client
        title
        permalink
        body_text
        case_link_url
        category
        tag
        video
        id
        tagline
        port_date
        agancy
        background_image
        logo
        bilder
      }
    }
  }
`;
