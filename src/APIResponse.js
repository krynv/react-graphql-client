import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const helloWorldQuery = gql`
  {
    hello
  }
`;

const APIResponse = () => (
    <Query query={helloWorldQuery}>
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :c</p>;

            console.log(`The data retrieved from our GraphQL API is: `);
            console.log(data);
            return <p>{data.hello}</p>;
        }}
    </Query>
);

export default APIResponse;