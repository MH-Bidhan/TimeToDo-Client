import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "./../common/custom-button/custom-button.component";
import InputFeild from "./../common/input-feild/input-feild.component";
import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { userName, password, confirmPassword, email } = this.state;

    return (
      <div className="sign-up container">
        <div>Create an account with your information</div>
        <form>
          <InputFeild
            label={"User Name"}
            name="userName"
            type="text"
            value={userName}
            handleChange={this.handleChange}
            required
          />
          <InputFeild
            label={"Email"}
            name="email"
            type="email"
            value={email}
            handleChange={this.handleChange}
          />
          <InputFeild
            label={"Password"}
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            required
          />
          <InputFeild
            label={"Confirm Password"}
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            handleChange={this.handleChange}
            required
          />
          <CustomButton label={"Submit"} />
        </form>
        <div className="sign-in-message">
          I already have an account{" "}
          {
            <Link className="arrow-link" to={"/signin"}>
              Sign in
            </Link>
          }
        </div>
      </div>
    );
  }
}

export default SignUp;
