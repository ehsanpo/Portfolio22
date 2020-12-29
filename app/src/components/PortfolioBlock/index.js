import React from "react";
import { graphql } from 'gatsby'
import InViewMonitor from "react-inview-monitor";
import Layout from "../layout";
import Box from "../Card";
import Button from "../Button";


const Index = ({data}) => { 
    console.log(data);
    return(
        <section>
            <InViewMonitor
                intoViewMargin="8%"
                classNameNotInView="vis-hidden"
                classNameInView="animated titleIn"
                toggleClassNameOnInView
            >
            <h2 className="blue h2">Selceted Works</h2>
            </InViewMonitor>


            <div className="wrapper">
            {data.map((Onode) => {
              const node = Onode.node.frontmatter;
              console.log(node);
              return (
                <Box
                key={node.id}
                category={node.category}
                headline={node.title}
                tags={node.tag}
                permalink={node.permalink}
                />
              )} 
            )}
            </div>
            <div className="center">
                <Button className="btn--3" >See Portfolio</Button>
            </div>
        </section>

)};

export default Index;

