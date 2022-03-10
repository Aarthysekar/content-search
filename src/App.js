import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Podcast from 'components/Podcast';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Podcast />
    </ChakraProvider>
  );
}

export default App;
