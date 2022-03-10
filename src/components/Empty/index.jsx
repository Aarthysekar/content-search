import { Center, Text } from '@chakra-ui/react';

const Empty = ({ message = 'No Data', children }) => {
  return (
    <Center borderRadius='md' bg='darkTealSecondary' p={20}>
      <Text color='grey'>{message}</Text>
      {children}
    </Center>
  );
};

export default Empty;
