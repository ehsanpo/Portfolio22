import React, {useState} from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const Header = ({ siteTitle }) => {
	const [headerButton, setHeaderButton] = useState(false);
	return (
		<header
			className="header"
			style={{
				background: `var(--p3)`,
			}}
		>
			<button
				class=" button__navigation icon-only"
				aria-label="Menu"
				aria-controls="navigation"
				onClick={(e) => {
					setHeaderButton(current => !current);
				}}
			>
				<div class="nav-icon">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</button>
			<div
				style={{
					margin: `0 auto`,
					maxWidth: 960,
					padding: `1.45rem 1.0875rem`,
					minHeight: "30px",
				}}
				className={`${headerButton ? "open" : "" }`}
			>
				<nav className={`${headerButton ? "open" : "" }`}>
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
							<Link className="btn--link" to="/music">
								Music
							</Link>
						</li>
						<li>
							<Link className="btn--link" to="/blog">
								Writing
							</Link>
						</li>
						<li>
							<Link className="btn--link" to="/skills">
								Skills
							</Link>
						</li>
						<li>
							<Link className="btn--link" to="/about">
								About
							</Link>
						</li>
					</ol>
				</nav>
			</div>
		</header>
	)
};

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
