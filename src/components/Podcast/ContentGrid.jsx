import { memo } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import ContentCard from './ContentCard';

const ContentGrid = ({ content }) => {
  return (
    <SimpleGrid wrap={'wrap'} columns={[1, 1, 3, 4]} gap={5}>
      {content.map(({ id, ...contentData }) => (
        <ContentCard key={id} contentData={contentData} w='full' />
      ))}
    </SimpleGrid>
  );
};

export default memo(ContentGrid);
