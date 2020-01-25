import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
// import List from './pages/List';
import Mission from './pages/Mission';
import Community from './pages/Community';
import Profile from './pages/Profile';
import Login from './pages/Login';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path="/mission" component={Mission} />
          <Route path="/community" component={Community} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          { /*<Route path='/list' component={List}/> */}
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;