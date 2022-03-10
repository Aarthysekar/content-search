import { Center, Text } from '@chakra-ui/react';
import LoadingIndicator from 'components/LoadingIndicator';

const Spin = props => {
  const { loading, tip, children } = props;
  if (!loading) {
    return children;
  }
  return (
    <>
      <Center>{loading && <LoadingIndicator />}</Center>
      <Center>{loading && tip && <Text>{tip}</Text>}</Center>
    </>
  );
};

export default Spin;
