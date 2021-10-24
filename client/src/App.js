import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

// components -- pages // 
import About from "./components/About";
import Footer from "./components/Footer";
import Home from './components/Home';
import Nav from "./components/Nav";
import SignInSide from './pages/SignIn';
import SignUp from './pages/Signup'

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/About' component={About}/>
          <Route exact path='/SignIn' component={SignInSide} />
          <Route exact path='/SignUp' component={SignUp} />
        </Switch>
        </>
        <Footer />
      </Router>
     </ApolloProvider>
  );
}

export default App;