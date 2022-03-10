import { useCallback, useState } from 'react';
import { Box, Center, Stack, Text } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { GET_CONTENT_CARDS } from 'graphql/gqlConstants';
import ContentGrid from './ContentGrid';
import DebounceSearch from 'components/DebounceSearch';

const Podcast = () => {
  const { data, loading, error } = useQuery(GET_CONTENT_CARDS);
  const [keyword, setKeyword] = useState('');
  const [filtering, setFiltering] = useState(false);

  const onKeywordChange = useCallback(value => {
    console.log(value);
    setKeyword(value);
  }, []);

  const onFiltering = useCallback(status => {
    setFiltering(status);
  }, []);

  const renderContents = () => {
    const {
      contentCards: { edges },
    } = data;
    const filteredContent = keyword
      ? edges.filter(({ name }) => {
          return name?.toLowerCase().includes(keyword.toLowerCase());
        })
      : edges;
    return <ContentGrid content={filteredContent} />;
  };

  return (
    <Stack spacing={4} m={[5, 10]} mt={10}>
      <Box>
        <Text color='white' fontWeight='semibold'>
          Search
        </Text>
        <DebounceSearch
          onChange={onKeywordChange}
          toggleFilterStatus={onFiltering}
        />
      </Box>
      <Center>
        {(loading || filtering) && 'Loading ...'}
        {error && 'Unable to process your request'}
        {!loading && !filtering && !error && renderContents()}
      </Center>
    </Stack>
  );
};

export default Podcast;
