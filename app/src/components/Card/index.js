import React from 'react'
//import "./button.scss"

const Box =  ({ className="", category, headline,tags}) => {
    const buttonLable = Math.floor(Math.random() * 90 + 10);
    return (
        <div className="box">
            <span class="box__glitch"></span>
            <div className="header">
                <span>{buttonLable}{''}</span> {category.map((cat) =>    <>{cat}{" "}</>  )}
            </div>
                <hr />
            <div className="box-wrapper">
                <h3>{headline}</h3>
                <div className="tags">
                    {tags.map((tag) =>    <span>{tag}</span>  )}
                </div>
            </div>
        </div>
    );
};
  
export default Box;


