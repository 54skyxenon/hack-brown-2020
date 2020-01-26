import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
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
      <Link to={'./login'}>
        <button variant="raised">
            Login
        </button>
      </Link>
      <button variant="raised">
          Logout
      </button>
    </div>
    );
  }
}
