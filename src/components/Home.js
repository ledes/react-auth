import React, { Component } from 'react';
import Registration from './auth/Registration';
import Login from './auth/Login';
import axios from 'axios';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  };

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    // redirect to dashboard. We have access to history from router because we
    // pass all the props from Router
    this.props.history.push("/dashboard");
  };

  handleLogoutClick() {
    axios.delete("http://localhost:3001/logout", { withCredentials: true })
    .then(response => {
      this.props.handleLogout();
    }).catch(error => {
      console.log("logout error: ", error);
    });
  };

  render() {
    return (
       <div>
        <h1>Home</h1>
        <h1>status: {this.props.loggedInStatus}</h1>
        <button onClick={()=> { this.handleLogoutClick() }} >Log out</button>
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>
        <Registration handleSuccessfulAuth={this.handleSuccessfulAuth}/>
       </div>
    );
  }
}
