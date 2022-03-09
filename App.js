import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/login/LoginScreen';
import { Main } from './screens/Main';
import CadastroUsuario from './screens/cadastro-usuario/CadastroUsuario';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#009b00',
  },
};



export default function App() {


  return (
    <PaperProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name="CadastroUsuário" component={CadastroUsuario} />
        <Stack.Screen options={{ headerShown: false }} name="Main" component={Main} />
        
      </Stack.Navigator>

    </NavigationContainer>
    </PaperProvider>
  );
}


