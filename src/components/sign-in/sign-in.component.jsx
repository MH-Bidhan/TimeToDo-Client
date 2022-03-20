import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../common/custom-button/custom-button.component";
import InputFeild from "./../common/input-feild/input-feild.component";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in container">
        <div>Sign in with email and password</div>
        <form className="sign-in-form">
          <InputFeild
            label={"Email Address"}
            name="email"
            type="email"
            value={email}
            handleChange={this.handleChange}
            required
          />
          <InputFeild
            label={"Password"}
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            required
          />
          <CustomButton label={"Sign In"} />
        </form>
        <div className="sign-up-message">
          I do not have an account{" "}
          {
            <Link className="arrow-link" to={"/signup"}>
              Create One
            </Link>
          }
        </div>
      </div>
    );
  }
}

export default SignIn;
