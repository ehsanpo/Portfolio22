import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Parallax, Background } from 'react-parallax';

const LocalImage = ({
  filename,
  alt,
  style = {},
  className = "",
  caption = null
}) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 1200) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => {
        return n.node.relativePath.includes(filename);
      });
      if (!image) {
        return null;
      }

      const imageSizes = image.node.childImageSharp.sizes;
      return (
        <div className={className}>
          <Img
            imgStyle={{ objectFit: "contain" }}
            alt={alt}
            sizes={imageSizes}
            width={width}
            height={height}
            style={style}
            className="aligncenter"
          />
          {caption && <figcaption>{caption}</figcaption>}
        </div>
      );
    }}
  />
);

export default LocalImage;
