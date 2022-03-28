import React from "react";
import { Link } from "react-router-dom";
import signUpUser from "./../../services/util-functions/sign-up-user";
import AvatarInput from "./../common/avatar-input/avatar-input.component";
import CustomButton from "./../common/custom-button/custom-button.component";
import InputError from "./../common/input-error/input-error.component";
import InputFeild from "./../common/input-feild/input-feild.component";
import "./sign-up.styles.scss";
import validateSignUp from "./sign-up.validate";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: {},
      avatar: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleAvatarChange = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      return this.setState({ avatar: value });
    }

    this.setState({ avatar: "" });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { userName, email, password, confirmPassword, avatar } = this.state;

    const signUpCreds = {
      userName,
      email,
      password,
      confirmPassword,
      avatar,
    };

    const result = validateSignUp(signUpCreds);

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

    if (password !== confirmPassword) {
      return this.setState({
        error: {
          confirmPassword: "Password does not match!",
        },
      });
    }

    const response = await signUpUser({
      userName,
      email,
      password,
      avatar,
    });

    if (response?.message) {
      return this.setState({
        error: {
          email: response.message,
        },
      });
    }

    this.setState({ error: {} });

    document.location = "/";
  };

  render() {
    const { userName, password, confirmPassword, email, error, avatar } =
      this.state;

    console.log(avatar);
    return (
      <div className="sign-up container">
        <div>Create an account with your information</div>
        <form onSubmit={this.handleSubmit}>
          <InputFeild
            label={"User Name"}
            name="userName"
            type="text"
            value={userName}
            handleChange={this.handleChange}
            error={error.userName}
            required
          />
          <InputFeild
            label={"Email"}
            name="email"
            type="email"
            value={email}
            error={error.email}
            handleChange={this.handleChange}
            required
          />
          <InputFeild
            label={"Password"}
            name="password"
            type="password"
            value={password}
            error={error.password}
            handleChange={this.handleChange}
            required
          />
          <InputFeild
            label={"Confirm Password"}
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            handleChange={this.handleChange}
            error={error.confirmPassword}
            required
          />
          <div className="avatar-selection">
            <AvatarInput
              active={avatar}
              image={"monkey"}
              value={"monkey"}
              handleChange={this.handleAvatarChange}
            />
            <AvatarInput
              active={avatar}
              image={"panda"}
              value={"panda"}
              handleChange={this.handleAvatarChange}
            />
            <AvatarInput
              active={avatar}
              image={"cat"}
              value={"cat"}
              handleChange={this.handleAvatarChange}
            />
            <AvatarInput
              active={avatar}
              image={"frog"}
              value={"frog"}
              handleChange={this.handleAvatarChange}
            />
            <AvatarInput
              active={avatar}
              image={"rabit"}
              value={"rabit"}
              handleChange={this.handleAvatarChange}
            />
            {error.avatar ? <InputError error={error.avatar} /> : null}
          </div>
          <CustomButton type="submit" label={"Submit"} />
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
