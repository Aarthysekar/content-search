import React from 'react';
import {
  ChakraProvider
} from '@chakra-ui/react';
import Podcast from 'components/Podcast';
import theme from 'theme';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Podcast />
    </ChakraProvider>
  );
}

export default App;
