import React from "react";
import { Link } from "react-router-dom";
import signInUser from "../../services/util-functions/sign-in-user";
import CustomButton from "../common/custom-button/custom-button.component";
import InputFeild from "./../common/input-feild/input-feild.component";
import "./sign-in.styles.scss";
import validateSignIn from "./sign-in.validate";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      error: {},
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    const signInCreds = { email, password };

    const result = validateSignIn(signInCreds);

    if (result.error) {
      const errorDetails = result.error.details;

      return errorDetails.map((detail) => {
        return this.setState({
          error: {
            [detail.path]: detail.message,
          },
        });
      });
    }

    const response = await signInUser({
      email,
      password,
    });

    if (response?.message) {
      return this.setState({
        error: {
          password: response?.message,
        },
      });
    }

    this.setState({ error: {} });

    document.location = "/";
  };

  render() {
    const { email, password, error } = this.state;
    return (
      <div className="sign-in container">
        <div>Sign in with email and password</div>
        <form onSubmit={this.handleSubmit} className="sign-in-form">
          <InputFeild
            label={"Email Address"}
            name="email"
            type="email"
            value={email}
            handleChange={this.handleChange}
            error={error.email}
            required
          />
          <InputFeild
            label={"Password"}
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            error={error.password}
            required
          />
          <CustomButton type="submit" label={"Sign In"} />
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
