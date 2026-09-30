import { Pressable, StyleSheet, Text } from 'react-native';
import { COLORS } from '../constants/colors';

export default function PrimaryButton({ title, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
  },
  pressed: { opacity: 0.8 },
  text: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});
