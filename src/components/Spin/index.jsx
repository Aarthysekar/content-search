import { Center } from '@chakra-ui/react';

const Spin = props => {
  const { loading, children } = props;
  return <Center>{loading ? 'Loading ...' : children}</Center>;
};

export default Spin;
