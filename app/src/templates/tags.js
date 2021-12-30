import React from "react";
import { Link } from 'gatsby';

const Tag = ({ pageContext }) => {
console.log( pageContext)

    const { posts, tagName } = pageContext;
    const upperTag = tagName.charAt(0).toUpperCase() + tagName.slice(1);
    return (
        <div>
            {posts.map((post, index) => (
        <Link key={index} to={post.frontmatter.permalink}>
            <h3>{post.frontmatter.title}</h3>
        </Link>
        ))}
        </div>
      );
}
export default Tag;