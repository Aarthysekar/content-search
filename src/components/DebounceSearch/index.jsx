import { memo, useState, useEffect, useCallback } from 'react';
import { Input } from '@chakra-ui/react';

const DebounceSearch = ({
  onChange,
  onTypingStatusChange,
  debounceTime = 300,
}) => {
  const [searchText, setSearchText] = useState('');

  const setFilteringStatus = useCallback(
    status => {
      if (onTypingStatusChange) {
        onTypingStatusChange(status);
      }
    },
    [onTypingStatusChange]
  );

  useEffect(() => {
    setFilteringStatus(true);
    const timeout = setTimeout(() => {
      onChange(searchText);
      setFilteringStatus(false);
    }, debounceTime);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchText, debounceTime, onChange, setFilteringStatus]);

  return (
    <Input
      variant='filled'
      placeholder='Type any keyword'
      onChange={e => setSearchText(e.target.value)}
    />
  );
};

export default memo(DebounceSearch);
