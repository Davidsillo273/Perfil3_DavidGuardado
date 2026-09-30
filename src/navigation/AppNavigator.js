import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS } from '../constants/colors';
import CharactersScreen from '../screens/CharactersScreen';
import StudentScreen from '../screens/StudentScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Student"
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="Student"
          component={StudentScreen}
          options={{ title: 'Estudiante' }}
        />
        <Stack.Screen
          name="Characters"
          component={CharactersScreen}
          options={{ title: 'Rick and Morty' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
