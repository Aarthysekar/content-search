import { Text, VStack } from '@chakra-ui/react';
import LoadingIndicator from 'components/LoadingIndicator';

const Spin = props => {
  const { loading, tip, children } = props;
  if (!loading) {
    return children;
  }
  return (
    <VStack>
      {loading && <LoadingIndicator />}
      {loading && tip && (
        <Text color='tigerHallOrange' fontSize={16}>
          {tip}
        </Text>
      )}
    </VStack>
  );
};

export default Spin;
