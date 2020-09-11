

import React from 'react'

const Stack  = ({ className, children, type="button", cta=false, sec=false}) => {
    return (
        <div className="stacks">
            <img alt="Node.js" data-aos="fade-up" data-aos-delay="300" src="https://ehsan.loc/site/uploads/2019/03/nodejs-1.svg" />
            <h3 data-aos="fade-up" data-aos-delay="300" class="aos-init aos-animate">Node.js</h3>
            <ul>
                <li>React</li><li>MongoDb</li><li>Webpack</li><li>Gastby</li>
            </ul>
        </div>

    );
};
  
export default Stack;
