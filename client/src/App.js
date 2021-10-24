import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from "@apollo/client";
import ApolloClient from 'apollo-boost';
import About from "./components/About";
import Footer from "./components/Footer";
import Home from './components/Home';
import Nav from "./components/Nav";
import SignInSide from './Pages/SignIn';
import SignUp from './Pages/SignUp/index'
import { createHttpLink, InMemoryCache } from "@apollo/client";

const customFetch = (uri, options) => {
  return fetch(uri, options)
  .then(response => {
    if (response.status >= 500) {  // or handle 400 errors
      return Promise.reject(response.status);
    }
    return response;
  });
};
const client = new ApolloClient({
  link: createHttpLink({
    uri: "/graphql",
    fetch: customFetch,
  }),
  cache: new InMemoryCache()
});






function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/About' component={About}/>
          <Route exact path='/SignIn' component={SignInSide} />
          <Route exact path='/SignUp' component={SignUp} />
        </Switch>
        </div>
        <Footer />
      </Router>
     </ApolloProvider>
  );
}

export default App;