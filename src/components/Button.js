import React from 'react';
import '../scss/Button.scss';

const Button = (props) => {

  const { buttonClass, onButtonClick } = props;  
    
  return (
    <button
      className={buttonClass}
      onClick={onButtonClick}
    >
      {props.children}
    </button>    
  );
}
export default Button;