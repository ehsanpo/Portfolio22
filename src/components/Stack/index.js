import React from "react";
import "./stack.scss";
import cs from "./cs.svg";
import servers from "./servers.svg";
import nodejs from "./nodejs-1.svg";
import wordpress from "./wordpress-logo-button.svg";

const Stack = ({ type = "nodejs" }) => {
  const types = {
    LNMP: {
      headline: "LNMP",
      tools: ["Linux", "Nginx", "Mysql", "PHP"],
      icon: servers,
    },
    nodejs: {
      headline: "Node.js",
      tools: ["React", "Gastby", "Webpack", "MongoDb"],
      icon: nodejs,
    },
    cloud: {
      headline: "Cloud",
      tools: ["AWS API Gateway", "AWS Dynamo DB", "Lambda", "Node.js"],
      icon: cs,
    },
    wordpress: {
      headline: "Wordpres",
      tools: ["Blockpress Theme", "Content Blocks", "Sass", "Webpack"],
      icon: wordpress,
    },
  };
  let toRender = types[type];

  return (
    <div className="stackholder">
      <img alt="Node.js" src={toRender.icon} />
      <h3>{toRender.headline}</h3>

      <div className="stacks">
        <ul>
          {toRender.tools.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stack;
