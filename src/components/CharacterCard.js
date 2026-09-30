import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/colors';

export default function CharacterCard({ character }) {
  const { name, image, status, species, gender, location } = character;

  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        <Text style={styles.detail}>{status} - {species}</Text>
        <Text style={styles.detail}>Género: {gender}</Text>
        <Text style={styles.detail} numberOfLines={1}>Ubicación: {location.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    borderRadius: 8, borderWidth: 1, borderColor: COLORS.border,
    marginBottom: 12,
    overflow: 'hidden',
  },
  image: { width: 100, height: 100 },
  info: { flex: 1, padding: 10, justifyContent: 'center' },
  name: { color: COLORS.text, fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  detail: { color: COLORS.textMuted, fontSize: 13 },
});
