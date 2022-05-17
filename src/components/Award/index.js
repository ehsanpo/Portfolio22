import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import "./style.scss";
import InViewMonitor from "react-inview-monitor";
import Button from "../Button";
import { GatsbyImage } from "gatsby-plugin-image";

const Award = () => {
	const data = useStaticQuery(graphql`
		query {
			image1: file(relativePath: { eq: "cannen.png" }) {
				childImageSharp {
					gatsbyImageData(
						layout: FIXED
						width: 83
						height: 85
						placeholder: BLURRED
					)
				}
			}
			image2: file(relativePath: { eq: "svenskadesign.png" }) {
				childImageSharp {
					gatsbyImageData(
						layout: FIXED
						width: 83
						placeholder: BLURRED
					)
				}
			}
			image3: file(relativePath: { eq: "guldagg.png" }) {
				childImageSharp {
					gatsbyImageData(
						layout: FIXED
						width: 83
						placeholder: BLURRED
					)
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
						<GatsbyImage
							alt="Svenska design"
							className="award-img"
							image={
								data?.image2?.childImageSharp.gatsbyImageData
							}
						/>
						<div className="content">
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
						<GatsbyImage
							alt="Cannes lions"
							className="award-img"
							image={
								data?.image1?.childImageSharp.gatsbyImageData
							}
						/>
						<div className="content">
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
						<GatsbyImage
							alt="Guldägget"
							className="award-img"
							image={
								data?.image3?.childImageSharp.gatsbyImageData
							}
						/>
						<div className="content">
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
				<Button type="link" to="/about" className="btn--secondary">
					About Ehsan
				</Button>
			</div>
		</section>
	);
};

export default Award;
