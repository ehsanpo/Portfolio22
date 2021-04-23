import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Parallax } from 'react-parallax';
import "./style.scss"


const ParallaxImage = ({
    filename,
    alt,
    style = {},
    className = "",
    caption = null
}) => (
    <StaticQuery
        query={graphql`
            query {
                images: allFile(filter: {extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }}) {
                    edges {
                        node {
                            extension
                            relativePath
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
            const image = data.images.edges.find((n) => {
                return n.node.relativePath.includes(filename);
            });
            if (!image) {
                return null;
            }
            return (
                <Parallax
                    blur={0}
                    bgImage={image.node.childImageSharp.fluid.src}
                    alt={alt}
                    strength={500}
                >
                    <div style={{ minHeight: "var(--block-h)", display: "block" }} >
                        {caption && <figcaption style={{ height: 345 }}>{caption}</figcaption>}
                    </div>
                </Parallax>
            )}
        }
    />
);

export default ParallaxImage;