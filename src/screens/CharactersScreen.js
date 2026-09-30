import { FlatList, StyleSheet } from 'react-native';
import CharacterCard from '../components/CharacterCard';
import ErrorMessage from '../components/ErrorMessage';
import LoadingIndicator from '../components/LoadingIndicator';
import { COLORS } from '../constants/colors';
import { useCharacters } from '../hooks/useCharacters';

export default function CharactersScreen() {
  const { characters, loading, refreshing, error, retry, refresh } = useCharacters();

  if (loading) return <LoadingIndicator message="Cargando personajes..." />;
  if (error) return <ErrorMessage message={error} onRetry={retry} />;

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.content}
      data={characters}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <CharacterCard character={item} />}
      refreshing={refreshing}
      onRefresh={refresh}
    />
  );
}

const styles = StyleSheet.create({
  list: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: 16 },
});
