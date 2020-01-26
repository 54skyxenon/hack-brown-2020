import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: false };
    this.setAuthStatus = this.setAuthStatus.bind(this);
  }

  // Log out the user (regardless of the authentication status)
  // Inititates a POST request to /logout on the backend
  handleLogout() {
    axios.post('http://localhost:5000/logout');
    window.location.reload();
  }

  // We want to know the user's authentication status upon loading the navbar
  componentDidMount() {
    this.setAuthStatus();
  }

  // Calls the backend API to check if we're logged in
  setAuthStatus() {
    axios.get('http://localhost:5000/api/token')
      .then(res => {
        if (res.data === "logged_in") {
          this.setState({ authenticated: true });
        } else {
          this.setState({ authenticated: false });
        }
      })
      .catch(err => {
        this.setState({ authenticated: false });
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Corvus</h1>
        <Link to={'./mission'}>
          <button variant="raised">
            Mission
        </button>
        </Link>
        <Link to={'./community'}>
          <button variant="raised">
            Community
        </button>
        </Link>
        <Link to={'./profile'}>
          <button variant="raised">
            Profile
        </button>
        </Link>
        {
          this.state.authenticated ?
            <button variant="raised" onClick={this.handleLogout}>
              Logout
            </button> :
            <Link to={'./login'}>
              <button variant="raised">
                Login
              </button>
            </Link>
        }
      </div>
    );
  }
}
