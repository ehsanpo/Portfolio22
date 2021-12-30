import React, { useState } from "react";
//import { Link } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import Parallax from "../components/ParallaxImage";
import { graphql } from "gatsby";
import PortfolioBlock from "../components/PortfolioBlock";
import { Radar } from "react-chartjs-2";
import { defaults } from "react-chartjs-2";
// defaults.global.defaultFontColor = "rgba(255,255, 255, 1)";
import chart_data from "../data/skills-data";
import Button from "../components/Button";


console.log("chart_data", chart_data);

const bgcolor = "rgba(254, 48, 72, 0.3)";
const borderColor = "rgb(255, 255, 255)";

const options = {
  responsive: true,
  // backgroundColor:"#fff",
  // pointBorderColor: "#fff",
  scale: {
    ticks: {
      showLabelBackdrop: true,
      //backdropColor: "#fef900",
      //fontColor: "#ffffff",
      //backgroundColor: "#fef900",
     
      min: 0,
      max: 10,
      stepSize: 2,
    },
  },
  scales: {
    
    r: {
      title:{
        text:"red"
      },
      beginAtZero: true,
      grid: {
        color: "#040c1b",
      },
    },
  },
  // pointLabelFontColor: "rgba(255,255,255,1)",

  legend: {
    labels: {
      color: "#000",
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

  return (
    <Layout>
      <SEO title="Developer Portfolio" />
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
                className={`${skill.slug} ` }
                onClick={(e) => {
                  handleClick(skill.slug, e);
                }}
                key={skill.slug}
              >
                {" "}
                {skill.slug}{" "}
              </Button>
            ))}
            <div className="radarholder">
              <Radar data={skdata} options={options} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Skills;

export const query = graphql`
  query skills {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "portfolio" } } }
      sort: { order: DESC, fields: frontmatter___port_date }
    ) {
      edges {
        node {
          id
          __typename
          frontmatter {
            title
            category
            tag
            permalink
            id
            logo {
              childImageSharp {
                gatsbyImageData
              }
            }
            date(formatString: "MMMM DD, YYYY")
            type
          }
        }
      }
    }
  }
`;
