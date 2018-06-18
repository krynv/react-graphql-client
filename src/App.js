import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Courses from './Courses';
import './App.css';

const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql' // server can be found at: https://github.com/krynv/graphql-express-server
});

const App = () => (
    <ApolloProvider client={client}>
        <div className="container">
            <nav className="navbar navbar-dark bg-primary">
                <a className="navbar-band" style={{'color': 'white'}} href="#">Basic React and GraphQL Application</a>
            </nav>
            <div>
                <Courses/>
            </div>
        </div>
    </ApolloProvider>
)

export default App;