import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/colors';
import PrimaryButton from './PrimaryButton';

export default function ErrorMessage({ message, onRetry }) {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <PrimaryButton title="Reintentar" onPress={onRetry} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  message: { color: COLORS.text, marginBottom: 16, textAlign: 'center' },
});
