import { Box, Center, Input, Stack, Text } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { GET_CONTENT_CARDS } from 'graphql/gqlConstants';
import ContentGrid from './ContentGrid';

const Podcast = () => {
  const { data, loading, error } = useQuery(GET_CONTENT_CARDS);

  const renderContents = () => {
    const {
      contentCards: { edges },
    } = data;
    return <ContentGrid content={edges} />;
  };

  return (
    <Stack spacing={4} m={[5, 10]} mt={10}>
      <Box>
        <Text color='white' fontWeight='semibold'>
          Search
        </Text>
        <Input />
      </Box>
      <Center>
        {loading && 'Loading ...'}
        {error && 'Unable to process your request'}
        {!loading && !error && renderContents()}
      </Center>
    </Stack>
  );
};

export default Podcast;
