import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import APIResponse from './APIResponse';

const client = new ApolloClient({
  uri: 'http://localhost:1337/api' // server can be found over at: https://github.com/krynv/graphql-express-server
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <APIResponse />
      </div>
    </ApolloProvider >
  );
}

export default App;
