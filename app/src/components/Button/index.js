import React from 'react'
import "./button.scss"
import ctaIcon from './cta.svg'

const Button  = ({ className, children, type="button", cta=false, sec=false}) => {
    const buttonLable = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2);
    return (
        <button type={type} className={"btn " + (sec ? "btn--secondary ": " " ) + className  }>
            <span className="btn__content">{children} {cta ? <img src={ctaIcon} alt="Call To action" />:"_" }</span>
            <span className="btn__glitch"></span>
            <span className="btn__label">{buttonLable}20</span>
        </button>
    );
};
  
export default Button;


