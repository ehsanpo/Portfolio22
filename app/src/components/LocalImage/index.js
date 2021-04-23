import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";

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
}) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(filter: {extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }}) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth : 2500) {
                  ...GatsbyImageSharpFluid
              }
              }
            }
          }
        }
      }
    `}
    
    render={(data) => {
      //console.log('image', data);
      const image = data.images.edges.find((n) => {
        return n.node.relativePath.includes(filename);
      });
      if (!image) {
        return null;
      }
      const imageFluid = image.node.childImageSharp.fluid;
     
      if(background){
        return (
          <BackgroundImage
            Tag="div"
            className={className}
            fluid={imageFluid}
            backgroundColor={`#040e18`}
          >
            {children}
          </BackgroundImage>
        )
      }
      return (
          <Img
            imgStyle={{ objectFit: "cover" }}
            className={className}
            alt={alt}
            fluid={imageFluid}
            width={width}
            height={height}
            style={style}
          />
      );
    }}
  />
);

export default LocalImage;
