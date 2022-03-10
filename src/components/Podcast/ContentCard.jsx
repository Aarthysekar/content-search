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
      <Box>
        <Text>{name}</Text>
        <Text>{categories.map(({ name }) => name).join(', ')}</Text>
        <Box>
          <Text>
            {firstName} {lastName}
          </Text>
          <Text isTruncated title={title}>
            {title}
          </Text>
          <Text>{company}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ContentCard;
