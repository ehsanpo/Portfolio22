
import React from "react";
//import { Link } from "gatsby"
import Loadable from "@loadable/component";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Parallax from "../components/ParallaxImage";
import { graphql } from "gatsby";
import PostBlock from "../components/PostBlock";
const Imagehover = Loadable(() => import("../components/Imagehover"));

const Ptest = () => (
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
        <Imagehover ></Imagehover>
        </div>
      </div>
    </section>
 
  </Layout>
);
export default Ptest;
