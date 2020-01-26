import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'semantic-ui-react'

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

  // Render the navbar
  // Login/logout link appears based on auth state
  render() {
    return (
      <Menu secondary>
        <Menu.Item name='features'>
          <Link to={'./mission'}>
            mission
          </Link>
        </Menu.Item>

        <Menu.Item name='testimonials'>
          <Link to={'./community'}>
            community
          </Link>
        </Menu.Item>

        <Menu.Item name='sign-in'>
          <Link>
            profile
          </Link>
        </Menu.Item>

        <Menu.Item name='sign-in'>
          {
            this.state.authenticated ?
            <Link onClick={ this.handleLogout }>
              logout
            </Link> :
            <Link to={'./login'}>
              login
            </Link>
          }
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <img src='corvus.png' alt="corvus" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}