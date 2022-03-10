import { Center } from '@chakra-ui/react';
import LoadingIndicator from 'components/LoadingIndicator';

const Spin = props => {
  const { loading, tip, children } = props;
  return (
    <Center>
      {loading ? (
        <>
          <LoadingIndicator />
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
