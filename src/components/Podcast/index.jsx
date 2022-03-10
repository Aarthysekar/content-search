import { Box } from '@chakra-ui/react';
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
    <Box m={[5, 10]} mt={10}>
      {loading && 'Loading ...'}
      {error && 'Unable to process your request'}
      {!loading && !error && renderContents()}
    </Box>
  );
};

export default Podcast;
