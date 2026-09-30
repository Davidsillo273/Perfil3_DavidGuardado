import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/colors';

export default function InfoRow({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  label: { color: COLORS.textMuted, fontSize: 13, textTransform: 'uppercase' },
  value: { color: COLORS.text, fontSize: 18, fontWeight: '600', marginTop: 2 },
});
