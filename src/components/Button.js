import React from 'react';
import '../scss/Button.scss';

const Button = ({ buttonClass, onButtonClick, children }) => {
    
  return (
    <button
      className={buttonClass}
      onClick={onButtonClick}
      type="button"
    >
      {children}
    </button>    
  );
}
export default Button;