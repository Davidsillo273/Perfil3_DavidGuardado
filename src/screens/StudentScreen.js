import { Image, StyleSheet, Text, View } from 'react-native';
import InfoRow from '../components/InfoRow';
import PrimaryButton from '../components/PrimaryButton';
import { COLORS } from '../constants/colors';
import { STUDENT } from '../constants/student';

export default function StudentScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/splash-icon.png')} style={styles.logo} />
      <Text style={styles.title}>Información del estudiante</Text>

      <View style={styles.card}>
        <InfoRow label="Nombre" value={STUDENT.nombre} />
        <InfoRow label="Carnet" value={STUDENT.carnet} />
        <InfoRow
          label="Sección y grupo"
          value={`Sección ${STUDENT.seccion} - Grupo ${STUDENT.grupo}`}
        />
      </View>

      <PrimaryButton
        title="Ver personajes"
        onPress={() => navigation.navigate('Characters')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 24,
    justifyContent: 'center',
  },
  logo: { width: 110, height: 110, alignSelf: 'center', marginBottom: 16 },
  title: {
    color: COLORS.text,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginBottom: 32,
  },
});
