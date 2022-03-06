import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import "./style.scss";
import InViewMonitor from "react-inview-monitor";
import Button from "../Button";

const Award = () => {
	const data = useStaticQuery(graphql`
		query {
			image1: file(relativePath: { eq: "cannen.png" }) {
				childImageSharp {
					fixed(width: 83, height: 85, quality: 100) {
						...GatsbyImageSharpFixed_tracedSVG
					}
				}
			}
			image2: file(relativePath: { eq: "svenskadesign.png" }) {
				childImageSharp {
					fixed(width: 83, height: 85, quality: 100) {
						...GatsbyImageSharpFixed_tracedSVG
					}
				}
			}
			image3: file(relativePath: { eq: "guldagg.png" }) {
				childImageSharp {
					fixed(width: 83, height: 85, quality: 100) {
						...GatsbyImageSharpFixed_tracedSVG
					}
				}
			}
		}
	`);
	return (
		<section>
			<InViewMonitor
				intoViewMargin="8%"
				classNameNotInView="vis-hidden"
				classNameInView="animated titleIn"
				toggleClassNameOnInView
			>
				<h2 className="title yellow">Awards</h2>
			</InViewMonitor>
			<div className="wrapper">
				<div className="Awards">
					<InViewMonitor
						intoViewMargin="10%"
						classNameNotInView="vis-hidden"
						classNameInView="animated titleIn"
						toggleClassNameOnInView
					>
						<img
							fixed={data?.image2?.childImageSharp.fixed}
							alt=""
						/>
						<div class="content">
							<h3>Svenska design</h3>
							Gold Category Digital Design
						</div>
						<Link
							className="btn btn--link btn--yellow"
							to="/portfolio/malmo-saluhall/"
						>
							View project
						</Link>
					</InViewMonitor>
				</div>
				<div className="Awards">
					<InViewMonitor
						intoViewMargin="10%"
						classNameNotInView="vis-hidden"
						classNameInView="animated titleIn"
						toggleClassNameOnInView
					>
						<img
							fixed={data.image1?.childImageSharp.fixed}
							alt=""
						/>
						<div class="content">
							<h3>Cannes lions</h3>
							Silver Lion in Promo & Activation, Bronze Lion in
							Cyber & Shortlist in Media
						</div>
						<Link
							className="btn btn--link btn--yellow"
							to="/portfolio/toolpool/"
						>
							View project
						</Link>
					</InViewMonitor>
				</div>
				<div className="Awards">
					<InViewMonitor
						intoViewMargin="10%"
						classNameNotInView="vis-hidden"
						classNameInView="animated titleIn"
						toggleClassNameOnInView
					>
						<img
							fixed={data.image3?.childImageSharp.fixed}
							alt=""
						/>
						<div class="content">
							<h3>Guldägget</h3>
							Gold Category PR & Silver Categories Digital and
							Alternative Media
						</div>
						<Link
							className="btn btn--link btn--yellow"
							to="/portfolio/toolpool/"
						>
							View project
						</Link>
					</InViewMonitor>
				</div>
			</div>
			<div className="center">
				<Button className="btn--secondary">About Ehsan</Button>
			</div>
		</section>
	);
};

export default Award;
