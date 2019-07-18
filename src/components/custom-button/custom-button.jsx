import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isFacebookSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isFacebookSignIn ? "facebook-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
