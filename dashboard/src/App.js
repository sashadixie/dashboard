import React, { Component } from 'react';
import Container from './Container';
import { withRouter } from 'react-router'
import { Router, Switch, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();
class App extends Component {
  constructor(props) {
    super(props);
    history.listen((location, action) => {
      this.setState({
        historyLink: location.pathname
      });
    });

    this.state = {
      historyLink: '/'
    }
  }
  render() {
    const {historyLink} = this.state;

    return (
      <Router history={history}>
        <Container historyLink={historyLink} />
      </Router>
    );
  }
}

export default App;
