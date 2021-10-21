import React from "react";
<<<<<<< HEAD
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
=======
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from '@apollo/react-hooks';

import About from "./components/About";
import Footer from "./components/Footer";
import Home from './components/Home';
import Nav from "./components/Nav";
import SignInSide from "./components/SignIn";

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
>>>>>>> 507596cfafe3b6255ae20cb55c88b9a9b171db9e

function App() {
  return (
    // <ApolloProvider client={client}>
      <Router>
<<<<<<< HEAD
        <div>
          {/* Navbar will here with the other components */}
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            {/* <Route exact path="/search" component={SearchShoes} /> */}
          </Switch>
        </div>
=======
        <Nav />
        {/* <Switch> */}
        <div>
          <Route exact path='/' component={Home}/>
          <Route exact path='/About' component={About}/>
          <Route exact path='/SignIn' component={SignInSide} />

        {/* </Switch> */}
        </div>
        <Footer />
>>>>>>> 507596cfafe3b6255ae20cb55c88b9a9b171db9e
      </Router>
    // </ApolloProvider>
  );
}

export default App;