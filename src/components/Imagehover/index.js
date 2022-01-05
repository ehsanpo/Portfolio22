import React,{useRef,useEffect } from "react";
import { graphql, StaticQuery } from "gatsby";
import hoverEffect from "hover-effect";
import portfolioImage from  "../../images/IMG_9025.jpg"
import flip from  "../../images/118.jpg"


const LocalImage = ({
  filename,
  alt,
  style = {},
  className = "",
  caption = null,
  width ="100%",
  height="auto",
  background = false,
  children,
}) => {

    const container = useRef();

    useEffect(() => {
      //console.log(container.current);
      new hoverEffect({
        parent: container.current,
        intensity: 0.3,
        image1: portfolioImage,
        image2: portfolioImage,
        displacementImage:flip
      });
    }, [container]);

    return (
        <div>
        <div
        className="parent"
        id="imgContainer"
        ref={container}
        style={{
          width: 600,
          height: 1067
        }}
      />
        </div>
    )
};

export default LocalImage;
