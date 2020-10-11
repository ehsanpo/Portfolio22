

import React from 'react';
import {Link} from 'gatsby';
import "./style.scss"

const Award  = ({ className, headline, description, link}) => {
    return (
        <div className="Awards">
            <img
                data-aos="fade-up"
                data-aos-delay="200"
                sizes="(min-width: 62rem) 50vw, 100vw"
                src="https://ehsan-pourhadi.com/site/uploads/2020/06/wsi-imageoptim-svenskadesign-1-83x0-c-default.png"
                alt=""
                class="is_icon aos-init aos-animate"
            />
            <div class="content">
                <h3>{headline}</h3>
                {description && (<p>{description}</p>) }
            </div>
            <Link className="btn btn--link" to={link} >View project</Link>
        </div>
    );
};
  
export default Award;
