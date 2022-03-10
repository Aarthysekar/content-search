import { Center } from '@chakra-ui/react';

const Spin = props => {
  const { loading, tip, children } = props;
  return (
    <Center>
      {loading ? (
        <>
          Loading ...
          <br />
          {tip}
        </>
      ) : (
        children
      )}
    </Center>
  );
};

export default Spin;
