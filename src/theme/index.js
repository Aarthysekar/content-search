import { extendTheme } from '@chakra-ui/react';
import Input from 'theme/components/Input';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading: 'Averta,sans-serif',
    body: 'Averta,sans-serif',
  },
  colors: {
    tigerHallOrange: '#ff8615',
    tigerHallTeal: '#003238',
    darkTeal: '#001315',
    darkTealSecondary: '#001F24',
    black: '#000000',
    lightBlack: '#333333',
    grey: '#989898',
  },
  styles: {
    global: {
      body: {
        bg: 'darkTeal',
      },
    },
  },
  components: {
    Input,
  },
});

export default theme;
