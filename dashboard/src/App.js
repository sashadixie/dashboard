import React, { Component } from 'react';
import Layout from './Layout/Layout';
import Header from './Header/Header';
import NotFound from './NotFound/NotFound';
import Payment from './Payment/Payment';
import Profile from './Profile/Profile';
import Exit from './Exit/Exit';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={Layout} />
          <Route path='/payment' component={Payment} />
          <Route path='/profile' component={Profile} />
          <Route path='/exit' component={Exit} />
        </div>
      </Router>
    );
  }
}

export default App;
