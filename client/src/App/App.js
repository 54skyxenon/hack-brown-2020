import React, { Component } from 'react';
import Unauthorized from '../Unauthorized'
import LogIn from '../LogIn'

class App extends Component {
  render() {
    return (
      <Unauthorized>
        <LogIn />
      </Unauthorized>
    );
  }
}
export default App;
