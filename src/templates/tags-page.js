import React from "react";
import { Link } from 'gatsby';

const Tags = ({ pageContext }) => {
  const { tags } = pageContext;
// console.log( pageContext)
  return (
    <div>
      {tags &&
        tags.map((tag) => {
          const upperTag = tag.charAt(0).toUpperCase() + tag.slice(1);
          return (
            <Link key={tag} to={`/tags/${tag}`}>
              <span>{upperTag}</span>
            </Link>
          );
        })}
    </div>
  );
};

export default Tags;
