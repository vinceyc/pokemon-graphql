import React from 'react';
import {
  ApolloClient,
  ApolloProvider
} from "@apollo/client";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { PokemonsContainer } from './containers/PokemonsContainer';

function App() {
  // const client = new ApolloClient({
  //   uri: 'https://graphql-pokemon.sh'
  // });
  const client = new ApolloClient({
    uri: "https://beta.pokeapi.co/graphql/v1beta",

    onError: ({ networkError, graphQLErrors }) => {
      console.log("graphQLErrors", graphQLErrors);
      console.log("networkError", networkError);
    },
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <p>I am a pokemon</p>
      </main>
      <PokemonsContainer />
    </ApolloProvider>
  );
}

export default App;