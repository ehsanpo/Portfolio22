import React from 'react'
import {Link} from "gatsby"
//import "./button.scss"

const Box =  ({ className="", category, headline,tags,permalink}) => {
    const buttonLable = Math.floor(Math.random() * 90 + 10);
    return (
        <Link to={permalink} className="box">
            <span className="box__glitch"></span>
            <div className="header">
                <span>{buttonLable}{''}</span> {category.map((cat) => <>{cat}{" "}</>  )}
            </div>
                <hr />
            <div className="box-wrapper">
                <h3>{headline}</h3>
                <div className="tags">
                    {tags.slice(0,3).map((tag) => <span key={tag}>{tag}</span>  )}
                </div>
            </div>
        </Link>
    );
};
  
export default Box;
