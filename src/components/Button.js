import React from "react";
import "../scss/Button.scss";

const Button = ({buttonClass, onButtonClick, isDisabled, children}) => {
  return (
    <button
      className={buttonClass}
      onClick={onButtonClick}
      disabled={isDisabled}
      type="button">
      {children}
    </button>
  );
};
export default Button;
