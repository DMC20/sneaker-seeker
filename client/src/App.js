import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from '@apollo/react-hooks';

import {
  ApolloClient,
  InMemoryCache,
  // ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import About from "./components/About";
import Footer from "./components/Footer";
import Home from './components/Home';
import Nav from "./components/Nav";
import SignInSide from "./components/SignIn";
import SignUp from "./components/SignUp";
import { StoreProvider } from "./utils/GlobalState";

// const client = new ApolloClient({
//   request: operation => {
//     const token = localStorage.getItem('id_token');

//     operation.setContext({
//       headers: {
//         authorization: token ? `Bearer ${token}` : ''
//       }
//     });
//   },
//   uri: '/graphql'
// })

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    // <ApolloProvider client={client}>
      <Router>
        <Nav />
        {/* <Switch> */}
        <div>
        <StoreProvider>
          <Route exact path='/' component={Home}/>
          <Route exact path='/About' component={About}/>
          <Route exact path='/SignIn' component={SignInSide} />
          <Route exact path='/SignUp' component={SignUp} />

        {/* </Switch> */}
        </StoreProvider>
        </div>
        <Footer />
      </Router>
    // </ApolloProvider>
  );
}

export default App;
