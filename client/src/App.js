import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from '@apollo/react-hooks';

import About from "./components/About";
import Footer from "./components/Footer";
import Home from './components/Home';
import Nav from "./components/Nav";
import SignInSide from './Pages/SignIn';
import SignUp from './Pages/SignUp'

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

function App() {
  return (
    // <ApolloProvider client={client}>
      <Router>
        <Nav />
        {/* <Switch> */}
        <div>
          <Route exact path='/' component={Home}/>
          <Route exact path='/About' component={About}/>
          <Route exact path='/SignIn' component={SignInSide} />
          <Route exact path='/SignUp' component={SignUp} />

        {/* </Switch> */}
        </div>
        <Footer />
      </Router>
    // </ApolloProvider>
  );
}

export default App;