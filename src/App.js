import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import Podcast from 'components/Podcast';
import theme from 'theme';
import client from 'graphql/apolloClient';

function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Podcast />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
