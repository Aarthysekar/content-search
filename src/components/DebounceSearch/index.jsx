import { memo, useState, useEffect, useCallback } from 'react';
import { Input } from '@chakra-ui/react';

const DebounceSearch = ({
  onChange,
  toggleFilterStatus,
  debounceTime = 300,
}) => {
  const [searchText, setSearchText] = useState('');

  const setFilteringStatus = useCallback(
    status => {
      if (toggleFilterStatus) {
        toggleFilterStatus(status);
      }
    },
    [toggleFilterStatus]
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
      placeholder='Type any keyword'
      onChange={e => setSearchText(e.target.value)}
    />
  );
};

export default memo(DebounceSearch);
