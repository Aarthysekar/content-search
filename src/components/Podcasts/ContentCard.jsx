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
      as='article'
      borderRadius='md'
      bg='white'
      overflow='hidden'
      color='black'
    >
      <Image
        src={formImageUrl(uri)}
        alt={name}
        objectFit='cover'
        height='140'
        w='full'
      />
      <Box p={2.5}>
        <Text
          fontWeight='bold'
          fontSize='xs'
          letterSpacing='wider'
          textTransform='uppercase'
          color='tigerHallOrange'
          mb={1}
        >
          {name}
        </Text>
        <Text
          as='h3'
          fontSize='lg'
          fontWeight='extrabold'
          letterSpacing='wider'
          lineHeight={1.4}
          mb={1}
        >
          {categories.map(({ name }) => name).join(', ')}
        </Text>
        <Box
          fontSize='sm'
          fontWeight='semibold'
          letterSpacing='wide'
          lineHeight={1.5}
        >
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
          <Text color='tigerHallOrange' mb={5}>
            {company}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(ContentCard);
