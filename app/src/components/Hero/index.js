import React from 'react';
import {Link} from 'gatsby';
import "./hero.scss"
import Button from "../Button";

const Hero  = () => {
    return (
        <section className="hero">
            <div class="wrapper">
                <div class="v-center">
                    <h1>Ehsan Pourhadi</h1>
                    <h2>Software Developer / Music Producer</h2>
                    <p>I'm a Developer, Designer, and Producer who provides digital solutions with more than ten years of experience creating and developing software for the web.</p>
        
                    <Button >See Portfolio</Button>
    <Button sec >see Skills</Button>
    <Button className="btn--3" >About Ehsan</Button>



                </div>
            </div>
            <div class="container-s">
                <div class="chevron"></div>
                <div class="chevron"></div>
                <div class="chevron"></div>
            </div>
        </section>
    );
};
  
export default Hero;
