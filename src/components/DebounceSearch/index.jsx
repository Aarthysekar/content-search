import { useState, useEffect } from 'react';
import { Input } from '@chakra-ui/react';

const DebounceSearch = ({
  onChange,
  debounceTime = 300,
}) => {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(searchText);
    }, debounceTime);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchText, debounceTime, onChange]);

  return (
    <Input
      placeholder="Type any keyword"
      onChange={e => setSearchText(e.target.value)}
    />
  );
};

export default DebounceSearch;
