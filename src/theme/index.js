import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    tigerHallOrange: '#ff8615',
    tigerHallTeal: '#003238',
    darkTeal: '#001315',
    black: '#000000',
    lightBlack: '#333333',
  },
  styles: {
    global: {
      body: {
        bg: '#001315',
      },
    },
  },
});

export default theme;
