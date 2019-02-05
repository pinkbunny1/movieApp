import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './apollo-client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';
import GS from './globalStyles';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <GS />
        <Router>
          <Switch>
            <Route exact strict path='/' component={Home} />
            <Route path='/detail/:movieId' component={Detail} />
          </Switch>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
