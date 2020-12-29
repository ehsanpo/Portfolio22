import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header
  className="header"
    style={{
      background: `var(--p3)`,
      
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
      
    >
      <nav>
        <ol>
          <li>
            <Link className="btn--link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="btn--link" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="btn--link" to="/blog">
              Music
            </Link>
          </li>
          <li>
            <Link className="btn--link" to="/blog">
              Writing
            </Link>
          </li>
          <li>
            <Link className="btn--link" to="/blog">
              About
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
