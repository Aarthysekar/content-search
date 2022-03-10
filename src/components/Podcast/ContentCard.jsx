import { memo } from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const formImageUrl = uri => {
  const { origin, pathname } = new URL(uri);
  return `${origin}/resize/250x${pathname}`;
};

const ContentCard = ({ contentData }) => {
  const {
    name,
    image: { uri },
    categories,
    experts,
  } = contentData;

  const { firstName, lastName, title, company } = experts[0];

  return (
    <Box
      borderRadius='md'
      bg='white'
      overflow='hidden'
      as='article'
      color='black'
    >
      <Image
        src={formImageUrl(uri)}
        alt={name}
        objectFit='cover'
        height='130'
        w='full'
      />
      <Box p={2.5}>
        <Text
          fontWeight='bold'
          letterSpacing='wide'
          fontSize='xs'
          textTransform='uppercase'
          color='tigerHallOrange'
        >
          {name}
        </Text>
        <Text fontSize='lg' fontWeight='bold' as='h3' mb={1}>
          {categories.map(({ name }) => name).join(', ')}
        </Text>
        <Box lineHeight={1.2} fontWeight='semibold' fontSize='sm'>
          <Text>
            {firstName} {lastName}
          </Text>
          <Text
            color='lightBlack'
            textTransform='uppercase'
            isTruncated
            title={title}
          >
            {title}
          </Text>
          <Text color='tigerHallOrange' mb={25}>
            {company}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(ContentCard);
