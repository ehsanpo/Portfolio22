import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Hero from "../components/Hero";
import PortfolioBlock from "../components/PortfolioBlock"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <PortfolioBlock />

  </Layout>
);

export default IndexPage;

    // <section>
    //   <InViewMonitor
    //     intoViewMargin="8%"
    //     classNameNotInView="vis-hidden"
    //     classNameInView="animated titleIn"
    //     toggleClassNameOnInView
    //   >
    //     <h2 className="blue">Selceted Works</h2>
    //   </InViewMonitor>
    //   <div className="wrapper">
    //     <Box
    //       category={["BACKEND", "FRONT_END"]}
    //       headline="ToolsPool"
    //       tags={["wordpress", "html", "css"]}
    //     ></Box>
    //     <Box
    //       category={["BACKEND", "FRONT_END"]}
    //       headline="Malmö Saluhall"
    //       tags={["wordpress", "html", "css"]}
    //     ></Box>
    //     <Box
    //       category={["BACKEND", "FRONT_END"]}
    //       headline="Flamman"
    //       tags={["wordpress", "html", "css"]}
    //     ></Box>
    //     <Box
    //       category={["BACKEND", "FRONT_END"]}
    //       headline="Mekonomen"
    //       tags={["wordpress", "html", "css"]}
    //     ></Box>
    //     <Box
    //       category={["BACKEND", "FRONT_END"]}
    //       headline="ToolsPool"
    //       tags={["wordpress", "html", "css"]}
    //     ></Box>
    //     <Box
    //       category={["BACKEND", "FRONT_END"]}
    //       headline="ToolsPool"
    //       tags={["wordpress", "html", "css"]}
    //     ></Box>
    //   </div>
    //   <div className="center">
    //     <Button className="btn--3" label="See Portfolio" />
    //   </div>
    // </section>

    // <Parallax filename="bg2.jpg" />
    // <section>
    //   <InViewMonitor
    //     intoViewMargin="6%"
    //     classNameNotInView="vis-hidden"
    //     classNameInView="animated titleIn"
    //     toggleClassNameOnInView
    //   >
    //     <h2 className="yellow">dev Stacks</h2>
    //   </InViewMonitor>

    //   <div className="wrapper">
    //     <Stack />
    //     <Stack />
    //     <Stack />
    //     <Stack />
    //   </div>
    //   <div className="center">
    //     <InViewMonitor
    //       intoViewMargin="3%"
    //       classNameNotInView="vis-hidden"
    //       classNameInView="animated titleIn"
    //       toggleClassNameOnInView
    //     >
    //       <Button sec>see Skills</Button>
    //     </InViewMonitor>
    //   </div>
    // </section>
    // <Parallax filename="bg1.jpg" />

    