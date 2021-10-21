import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import SearchShoes from "./pages/SearchShoes";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          {/* Navbar will here with the other components */}
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            {/* <Route exact path="/search" component={SearchShoes} /> */}
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;