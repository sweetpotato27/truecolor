// src/components/session/signup_form.js

import React from "react";
import { withRouter } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      prospectEmail: "",
      handle: "",
      password: "",
      password2: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/login");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2,
    };
    this.props.fetchProspect(user.email)
      .then( res => {
        this.setState({
          prospectEmail: res.prospect.data
        });
        if (this.state.prospectEmail.length > 0 ) {
          this.props.signup(user, this.props.history)
            .then( res => {
              if (res.errors) {
                console.error(res.errors);
              } else {
                // delete prospect here
              }
            });
        } else {
          this.setState ({
            email: "",
            handle: "",
            password: "",
            password2: ""
          })
        }
      }).catch(error => {
        console.error(error.message);
      });
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form">
        <div className="session-form-div">
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            <br />
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
            <br />
            <input
              type="text"
              value={this.state.handle}
              onChange={this.update("handle")}
              placeholder="Full Name"
            />
            <br />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <br />
            <input
              type="password"
              value={this.state.password2}
              onChange={this.update("password2")}
              placeholder="Confirm Password"
            />
            <br />
            <input type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
