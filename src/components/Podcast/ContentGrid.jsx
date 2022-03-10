import { SimpleGrid } from '@chakra-ui/react';
import ContentCard from './ContentCard';

const ContentGrid = ({ content }) => {
  return (
    <SimpleGrid wrap={'wrap'} columns={4} gap={5}>
      {content.map(({ id, ...contentData }) => (
        <ContentCard key={id} contentData={contentData} w="full" />
      ))}
    </SimpleGrid>
  );
};

export default ContentGrid;
