import React, { useState, useEffect } from "react";
//import { Link } from "gatsby"
import Layout from "../components/layout";
import SeO from "../components/seo";
import { Radar } from "react-chartjs-2";
import chart_data from "../data/skills-data";
import Button from "../components/Button";
import Stack from "../components/Stack";
import { StaticImage } from "gatsby-plugin-image";
import ImageAndText from "../components/ImageAndText";
const bgcolor = "rgba(254, 48, 72, 0.9)";

const options = {
	responsive: true,
	fontSize: 40,
	// backgroundColor:"#fff",
	pointBorderColor: "#fff",
	scale: {
		ticks: {
			showLabelBackdrop: true,
			//backdropColor: "#fef900",
			fontColor: "#ffffff",
			//backgroundColor: "#fef900",
			min: 0,
			max: 10,
			stepSize: 2,
		},
	},
	scales: {
		r: {
			title: {
				text: "red",
			},
			beginAtZero: true,
			grid: {
				color: "#040c1b",
			},
			pointLabels: {
				color: "#fff",
				font: {
					size: 16,
					family: "Tomorrow, sans-serif",
				},
			},
		},
	},
	pointLabelFontColor: "rgba(255,255,255,1)",

	legend: {
		labels: {
			color: "#fff",
		},
	},

	plugins: {
		legend: {
			labels: {
				// This more specific font property overrides the global property
				color: "#fef900",
				font: {
					size: 18,
					family: "Tomorrow, sans-serif",
				},
			},
		},
	},
};

const chart_data_maker = () => {
	let return_array = [];
	let slug;
	let skill;

	for (var i = 0; i < chart_data.length; i++) {
		skill = chart_data[i];
		slug = skill.slug;

		return_array[slug] = {
			labels: skill.labels,
			datasets: [
				{
					label: skill.slug,
					data: skill.data,
					pointBackgroundColor: "#fef900",
					pointHoverRadius: 5,
					borderWidth: 1,
					fill: true,
					scaleStartValue: 0,
					// backgroundColor: bgcolor,
					borderColor: bgcolor,
				},
			],
		};
	}
	return return_array;
};

const Skills = () => {
	const return_array = chart_data_maker();
	const [skdata, setSkdata] = useState(return_array["Overall"]);

	const handleClick = (chart_op, e) => {
		const return_array = chart_data_maker();
		var list = document.getElementsByTagName("button");
		for (var i = 0; i < list.length; i++) {
			list[i].classList.remove("active", "Overall");
		}
		e.target.classList.add("active");

		setSkdata(return_array[chart_op]);
	};
	useEffect(() => {
		setSkdata(return_array["Overall"]);
	}, []);

	return (
		<Layout>
			<SeO title="Developer Portfolio" />
			<div className="page-header">
				<div className="wrapper">
					<h1 className="display">Skills</h1>
				</div>
			</div>
			<section className="bg-color-1">
				<div className="wrapper-m">
					<div className="radar-right">
						{chart_data.map((skill) => (
							<Button
								className={`${skill.slug} `}
								onClick={(e) => {
									handleClick(skill.slug, e);
								}}
								key={skill.slug}
							>
								{skill.slug}
							</Button>
						))}
						<div className="radarholder">
							<Radar data={skdata} options={options} />
						</div>
					</div>
				</div>
			</section>
			<section className="no-bg">
				<div className="wrapper">
					<Stack type="LNMP" />
					<Stack type="nodejs" />
					<Stack type="cloud" />
					<Stack type="wordpress" />
				</div>
			</section>
			<ImageAndText
				left
				nopad
				image={
					<StaticImage
						src="../images/cloudpractitioner.jpg"
						alt="AWS Cloud Certification"
					/>
				}
			>
				<h2>AWS Cloud Certification</h2>
				<p>Officially certified as an AWS Solution Architect 2017</p>
			</ImageAndText>
			<ImageAndText
				image={
					<StaticImage
						src="../images/cloudpractitioner2.jpg"
						alt="Self-Educated"
					/>
				}
			>
				<h2>Online Self-Educated</h2>
				<p>
					I usually watch a lot of youtube tutorials, I alltså use
					other sites like, Udemy, Lynda & Treehouse.
				</p>
			</ImageAndText>
			<ImageAndText
				left
				image={<StaticImage src="../images/agile.jpeg" alt="agile" />}
			>
				<h2>Agile Development Processes</h2>
				<p>
					I believe that agility is about moving quickly and adapting
					to change at a sustainable pace..
				</p>
			</ImageAndText>
			<ImageAndText
				image={
					<StaticImage
						src="../images/continuous-delivery.jpg"
						alt="continuous-delivery"
					/>
				}
			>
				<h2>Continuous Development</h2>
				<p>
					Ability to get changes of all types—including new features,
					configuration changes, bug fixes and experiments—into
					production, or into the hands of users, safely and quickly
					in a sustainable way.
				</p>
			</ImageAndText>
		</Layout>
	);
};
export default Skills;
