import React, { Component } from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scsss";

class SignUp extends Component {
  state = {
    displaName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  render() {
    const { name, displayName, email, password } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form">
          <FormInput
            type="email"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
        </form>
      </div>
    );
  }
}

export default SignUp;
