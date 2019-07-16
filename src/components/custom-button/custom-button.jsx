import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isFacebookSignIn, ...otherProps }) => {
  return (
    <div
      className={`${isFacebookSignIn ? "facebook-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default CustomButton;
