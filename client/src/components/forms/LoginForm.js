import React, { Component } from 'react';

export default class LoginForm extends Component {
    // The constructor
    constructor(props) {
        super(props);
        this.state = { isRegistering: false, email: '', password: '' };
        this.toggleRegister = this.toggleRegister.bind(this);
    }

    // Change the state to register mode, and vice versa
    toggleRegister() {
        this.setState({
            isRegistering: !this.state.isRegistering
        });
    }

    render() {
      return (
        <div>
          <div>
              <h1>Login</h1>
              <button
                onClick={this.toggleRegister}
                variant="raised"
              >
                Need an account? Register
              </button>
          </div>
        </div>
      )
    }
}

// class Register extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { email: '', password: '', confirmPassword: '' };
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Register</h1>
//                 <button variant="raised" onClick={this.props.toggleRegister}>
//                     Already have an account? Login
//                 </button>
//             </div>
//         );
//     }
// }
