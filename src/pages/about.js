import * as React from "react";
import { Link } from "gatsby";
import Loadable from "@loadable/component";

import Layout from "../components/layout";
import SEO from "../components/seo";
import InViewMonitor from "react-inview-monitor";
import Award from "../components/Award";
import Button from "../components/Button";

const NotFoundPage = () => {
	const Imagehover = Loadable(() => import("../components/Imagehover"));
	return (
		<Layout>
			<SEO title="Music Producent" />
			<div className="page-header ">
				<div className="wrapper">
					<h1 className="display">About</h1>
				</div>
			</div>
			<section>
				<div className="wrapper wrapper-l">
					<div style={{ flex: 4 }}>
						<h2>Hej Hej, I’m Ehsan Pourhadi.</h2>
						<p>
							I am a self-learned web developer, web designer &
							producer providing digital solutions. I have
							experience of over ten years, and I offer an
							enjoyable experience to my customers.
						</p>
						<p>
							At a young age, I started designing. It was a hobby
							then, but slowly grew into passion, the more I
							learned about it. I started as a webmaster, and then
							gradually branched into coding javascript and then
							jumping into front-end and back-end developer.
							Currently, I am an experienced full stack developer
							looking to provide you the best possible solution.
						</p>
						<p>
							My skill set consists not only of web development
							but also LAMP/NodeJS stacks. I have an excellent
							grasp of WordPress & Laravel developing on the
							backend while specializing in JS and HTML/CSS on the
							front-end.
						</p>
						<p>
							My knowledge base is extensive on user interface
							design, logo/identity creation. Furthermore, I also
							specialize in SEO. I have tremendous knowledge in
							multimedia and mobile development, thanks to my 10+
							years of work experience. I am on the lookout for
							different concepts, learning new techniques, and
							working on various platforms to provide the best
							solution to you! My goal is to utilize my current
							skills, learn new things, incorporate into the work,
							and give you the best of the best possible
							experience.
						</p>
					</div>
					<div>
						<Imagehover />
					</div>
				</div>
			</section>
			<section className="expe-block no-bg">
				<div className="wrapper">
					<div className="list-box">
						<h2>Experience</h2>
						<ul className="timeline">
							<li
								data-aos="fade-left"
								className="aos-init aos-animate"
							>
								<div className="timelineUnit">
									<h4>
										Software developer at Bredband2
										<span className="timelineDate">
											2020
										</span>
									</h4>
									<p>Working with React &amp; Ruby</p>
								</div>
							</li>
							<li
								data-aos="fade-left"
								className="aos-init aos-animate"
							>
								<div className="timelineUnit">
									<h4>
										Software developer With Front-end focus
										at Skymill
										<span className="timelineDate">
											2020
										</span>
									</h4>
									<p>
										Working with React and writing end to
										end test for the user flow.
									</p>
								</div>
							</li>
							<li
								data-aos="fade-left"
								className="aos-init aos-animate"
							>
								<div className="timelineUnit">
									<h4>
										Frilansande Webbutvecklare
										<span className="timelineDate">
											2019
										</span>
									</h4>
									<p>
										As a freelance web developer, I develop
										and manage modern responsive websites
										and web applications.
									</p>
								</div>
							</li>
							<li data-aos="fade-left" className="aos-init">
								<div className="timelineUnit">
									<h4>
										Web Developer/ Tech-lead at Guts &amp;
										Glory{" "}
										<span className="timelineDate">
											2017 - 2019
										</span>
									</h4>
									<p>
										Working as Tech lead for an
										advertisement agancy, offering clients
										strategic and digital communication
										tools in order to reach more clients and
										new markets.
									</p>
								</div>
							</li>
							<li data-aos="fade-left" className="aos-init">
								<div className="timelineUnit">
									<h4>
										Full Stack Developer at Whitespace
										<span className="timelineDate">
											2013 - 2017
										</span>
									</h4>
									<p>
										Full-stack developer for a web agancy
										that offers web development, UX/UI
										design, digital marketing and strategies
										to clients all over the world.
									</p>
								</div>
							</li>
							<li data-aos="fade-left" className="aos-init">
								<div className="timelineUnit">
									<h4>
										Web Developer/Designer at The Fan Club
										<span className="timelineDate">
											2012 - 2013
										</span>
									</h4>
									<p>Web Producer in The Fan Club.</p>
								</div>
							</li>
							<li data-aos="fade-left" className="aos-init">
								<div className="timelineUnit">
									<h4>
										Freelance{" "}
										<span className="timelineDate">
											2012
										</span>
									</h4>
									<p>
										I Worked as freelancer for about a year.
										The whole idea was started with big
										ambition to help local businesses.
									</p>
								</div>
							</li>
							<li data-aos="fade-left" className="aos-init">
								<div className="timelineUnit">
									<h4>
										Developer/Designer at Next Generation
										Design
										<span className="timelineDate">
											2011 - 2010
										</span>
									</h4>
									<p>
										I worked as a designer/developer and
										also took care of management of servers
										and webhosting.
									</p>
								</div>
							</li>
						</ul>
					</div>
					<div className="list-box">
						<h2>Education</h2>
						<ul className="timeline">
							<li data-aos="fade-right" className="aos-init">
								<div className="timelineUnit">
									<h4>
										Ruby on Rails
										<span className="timelineDate">
											2021
										</span>
									</h4>
									<p>BredBand2</p>
								</div>
							</li>
							<li data-aos="fade-right" className="aos-init">
								<div className="timelineUnit">
									<h4>
										Linux Academy / A Cloud Guru
										<span className="timelineDate">
											2018
										</span>
									</h4>
									<p>AWS Certified Solutions Architect</p>
								</div>
							</li>
							<li data-aos="fade-right" className="aos-init">
								<div className="timelineUnit">
									<h4>
										Hermods
										<span className="timelineDate">
											2011
										</span>
									</h4>
									<p>
										Programming A and Database management
										course.
									</p>
								</div>
							</li>
							<li data-aos="fade-right" className="aos-init">
								<div className="timelineUnit">
									<h4>
										Glokala Folkshögskola
										<span className="timelineDate">
											2009
										</span>
									</h4>
									<p>
										Music production(Recording, Mixing,
										Mastering), Event planning and general
										working process in music industry.
									</p>
								</div>
							</li>
							<li data-aos="fade-right" className="aos-init">
								<div className="timelineUnit">
									<h4>
										Universitetsholmen's High School
										<span className="timelineDate">
											2008
										</span>
									</h4>
									<p>
										Electricity Program with focus on
										Automation (PLC programming, Control
										engineering &amp; Pneumatic). I also
										took a Webdesign course.
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="links-block">
				<InViewMonitor
					intoViewMargin="6%"
					classNameNotInView="vis-hidden"
					classNameInView="animated titleIn"
					toggleClassNameOnInView
				>
					<h2 className="title red">Stats</h2>
				</InViewMonitor>
				<div className="wrapper">
					<div className="link">
						<div className="content">
							<h3
								data-aos="fade-up"
								data-aos-delay="200"
								className="aos-init aos-animate"
							>
								Lines of code
							</h3>
							<div
								data-aos="fade-up"
								data-aos-delay="200"
								className="aos-init aos-animate"
							>
								<p>23750691</p>
							</div>
						</div>
					</div>
					<div className="link">
						<div className="content">
							<h3
								data-aos="fade-up"
								data-aos-delay="300"
								className="aos-init aos-animate"
							>
								Daytime
							</h3>
							<div
								data-aos="fade-up"
								data-aos-delay="300"
								className="aos-init aos-animate"
							>
								<p>I’m most productive during daytime</p>
							</div>
						</div>
					</div>
					<div className="link">
						<div className="content">
							<h3
								data-aos="fade-up"
								data-aos-delay="400"
								className="aos-init aos-animate"
							>
								Tuesdays
							</h3>
							<div
								data-aos="fade-up"
								data-aos-delay="400"
								className="aos-init aos-animate"
							>
								<p>I’m most productive on Tuesdays</p>
							</div>
						</div>
					</div>
					<div className="link">
						<div className="content">
							<h3
								data-aos="fade-up"
								data-aos-delay="500"
								className="aos-init aos-animate"
							>
								snake_case
							</h3>
							<div
								data-aos="fade-up"
								data-aos-delay="500"
								className="aos-init aos-animate"
							>
								<p>I prefer snake_case for naming variables</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="image-text-block-boxed no-bg add_padding">
				<InViewMonitor
					intoViewMargin="6%"
					classNameNotInView="vis-hidden"
					classNameInView="animated titleIn"
					toggleClassNameOnInView
				>
					<h2 className="title red">My Resume</h2>
				</InViewMonitor>
				<div class="wrapper-m">
					<div class=" center">
						<Button
							type="link"
							to="https://ehsan-pourhadi.com/site/uploads/2019/04/CV-19-SV.pdf"
						>
							PDF - English
						</Button>
						<Button
							to="https://ehsan-pourhadi.com/site/uploads/2019/04/CV-19-EN.pdf"
							type="link"
						>
							PDF - Svenska
						</Button>
						<Button
							to="https://www.linkedin.com/in/ehsanp/"
							type="link"
						>
							My Linkedin
						</Button>
					</div>

					<div class="itb-image">
						<img
							src="https://ehsan-pourhadi.com/site/uploads/2020/06/wsi-imageoptim-Free-A4-Paper-in-Male-Hand-Mockup-PSD-scaled.jpg"
							alt=""
						/>
					</div>
				</div>
			</section>
			<Award />
		</Layout>
	);
};

export default NotFoundPage;
