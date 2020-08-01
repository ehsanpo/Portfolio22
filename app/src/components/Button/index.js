import React from 'react'
import "./button.scss"
import ctaIcon from './cta.svg'

const Button  = ({ className, children, type="button", cta=false, sec=false}) => {
    const buttonLable = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2);
    return (
        <button type={type} className={"btn " + (sec ? "btn--secondary ": " " ) + className  }>
            <span class="btn__content">{children} {cta ? <img src={ctaIcon} alt="Call To action" />:"_" }</span>
            <span class="btn__glitch"></span>
            <span class="btn__label">{buttonLable}20</span>
        </button>
    );
};
  
export default Button;


