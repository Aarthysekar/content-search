import { Box, Text } from '@chakra-ui/react';

const ContentCard = ({ contentData }) => {
  const {
    name,
    categories,
    experts,
  } = contentData;

  const { firstName, lastName, title, company } = experts[0];

  return (
    <Box
      borderRadius="md"
      bg="white"
      overflow="hidden"
      as="article"
      color="black"
    >
      <Box>
        <Text>{name}</Text>
        <Text>{categories.map(({ name }) => name).join(', ')}</Text>
        <Box>
          <Text>
            {firstName} {lastName}
          </Text>
          <Text isTruncated title={title}>{title}</Text>
          <Text>{company}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ContentCard;
