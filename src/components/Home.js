import React, { Component } from 'react';
import Registration from './auth/Registration'

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  };

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    // redirect to dashboard. We have access to history from router because we
    // pass all the props from Router
    this.props.history.push("/dashboard");
  };

  render() {
    return (
       <div>
        <h1>Home</h1>
        <h1>status: {this.props.loggedInStatus}</h1>
        <Registration handleSuccessfulAuth={this.handleSuccessfulAuth}/>
       </div>
    );
  }
}
