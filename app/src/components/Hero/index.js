import React from "react";
import "./hero.scss";
import Button from "../Button";

const Hero = () => {
  return (
    <section className="hero">
      <div className="wrapper">
        <div className="v-center--f">
          <h1 className="display">Ehsan Pourhadi</h1>
          <h2>Software Developer / Music Producer</h2>
          <div className="intro">
            <p>
              I'm a Developer, Designer, and Producer who provides digital
              solutions with more than ten years of experience creating and
              developing software for the web.
            </p>
          </div>

          <Button type="link" to="/portfolio">
            See Portfolio
          </Button>
          <Button type="link" to="/about" className="btn--secondary">
            About Ehsan
          </Button>
        </div>
      </div>
      <div className="container-s">
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
      </div>
    </section>
  );
};

export default Hero;
