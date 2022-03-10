import { useQuery } from '@apollo/client';
import { GET_CONTENT_CARDS } from 'graphql/gqlConstants';

const Podcast = () => {
  const { data, loading, error } = useQuery(GET_CONTENT_CARDS);
  console.log(data);
  return (
    <>
      {loading && <p>Loading ...</p>}
      {error && <p>Error !</p>}
    </>
  );
};

export default Podcast;
