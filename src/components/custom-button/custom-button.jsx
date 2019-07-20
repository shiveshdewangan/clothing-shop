import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isFacebookSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isFacebookSignIn ? "facebook-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
