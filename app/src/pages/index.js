import React from "react";
import InViewMonitor from "react-inview-monitor";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/Button";
import Box from "../components/Card";
import Stack from "../components/Stack";
import Award from "../components/Award";
import Parallax from "../components/ParallaxImage";
import Hero from "../components/Hero";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />



    <section>
      <InViewMonitor
        intoViewMargin="8%"
        classNameNotInView='vis-hidden'
        classNameInView='animated titleIn'
        toggleClassNameOnInView
      >
        <h2 className="blue">Selceted Works</h2>
      </InViewMonitor>
      <div className="wrapper">

        <Box
          category={['BACKEND', 'FRONT_END']}
          headline="ToolsPool"
          tags={['wordpress', 'html', 'css']}
        ></Box>
        <Box
          category={['BACKEND', 'FRONT_END']}
          headline="Malmö Saluhall"
          tags={['wordpress', 'html', 'css']}
        ></Box>
        <Box
          category={['BACKEND', 'FRONT_END']}
          headline="Flamman"
          tags={['wordpress', 'html', 'css']}
        ></Box>
        <Box
          category={['BACKEND', 'FRONT_END']}
          headline="Mekonomen"
          tags={['wordpress', 'html', 'css']}
        ></Box>
        <Box
          category={['BACKEND', 'FRONT_END']}
          headline="ToolsPool"
          tags={['wordpress', 'html', 'css']}
        ></Box>
        <Box
          category={['BACKEND', 'FRONT_END']}
          headline="ToolsPool"
          tags={['wordpress', 'html', 'css']}
        ></Box>


      </div>
      <div className="center">
        <Button className="btn--3">See Portfolio</Button>
      </div>
    </section>
 
    <Parallax filename="bg2.jpg" />
    <section>
      <InViewMonitor
        intoViewMargin="6%"
        classNameNotInView='vis-hidden'
        classNameInView='animated titleIn'
        toggleClassNameOnInView
      >
        <h2 className="yellow">dev Stacks</h2>
      </InViewMonitor>

      <div className="wrapper">
        <Stack />
        <Stack />
        <Stack />
        <Stack />
      </div>
      <div className="center">
        <InViewMonitor
          intoViewMargin="3%"
          classNameNotInView='vis-hidden'
          classNameInView='animated titleIn'
          toggleClassNameOnInView
        >
          <Button sec >see Skills</Button>
        </InViewMonitor>
      </div>
    </section>
    <Parallax filename="bg1.jpg" />

    <section>
      <InViewMonitor
        intoViewMargin="8%"
        classNameNotInView='vis-hidden'
        classNameInView='animated titleIn'
        toggleClassNameOnInView
      >
      <h2 className="blue">Awards</h2>
      </InViewMonitor>
      <div className="wrapper">

        <Award
          img={{}}
          headline="Svenska design"
          description="Gold Category Digital Design"
          link="/portfolio/malmo-saluhall/"
        ></Award>
          <Award
          img={{}}
          headline="Svenska design"
          description="Gold Category Digital Design"
          link="/portfolio/malmo-saluhall/"
        ></Award>
          <Award
          img={{}}
          headline="Svenska design"
          description="Gold Category Digital Design"
          link="/portfolio/malmo-saluhall/"
        ></Award>
          <Award
          img={{}}
          headline="Svenska design"
          description="Gold Category Digital Design"
          link="/portfolio/malmo-saluhall/"
        ></Award>
      </div>
      <div className="center">
        <Button className="btn--3">About Ehsan</Button>
      </div>
    </section>
    
  </Layout>
)

export default IndexPage
