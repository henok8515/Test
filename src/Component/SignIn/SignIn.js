import React from "react";
import "./SignIn.css";
import { signinWithGoogle } from "../FireBase/Firebase";
class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      password: "",
      email: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <form className="form-container" onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input
            className="form"
            type="email"
            name="email"
            value={this.state.email}
            required
            onChange={this.handleChange}
          />

          <label>password</label>
          <input
            className="form"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <button className="button" onClick={signinWithGoogle}>
            Sign in with Google
          </button>
        </form>
      </div>
    );
  }
}

export default SignIn;
