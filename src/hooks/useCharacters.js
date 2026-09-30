import { useCallback, useEffect, useState } from 'react';
import { getCharacters } from '../api/rickAndMorty';

export function useCharacters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const fetchCharacters = useCallback(async () => {
    setError(null);
    try {
      setCharacters(await getCharacters());
    } catch (e) {
      setError(e.message);
    }
  }, []);

  useEffect(() => {
    fetchCharacters().finally(() => setLoading(false));
  }, [fetchCharacters]);

  const retry = useCallback(() => {
    setLoading(true);
    fetchCharacters().finally(() => setLoading(false));
  }, [fetchCharacters]);

  const refresh = useCallback(() => {
    setRefreshing(true);
    fetchCharacters().finally(() => setRefreshing(false));
  }, [fetchCharacters]);

  return { characters, loading, refreshing, error, retry, refresh };
}
