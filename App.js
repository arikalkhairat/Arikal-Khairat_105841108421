// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage';
import { useFonts } from 'expo-font';

function HomeScreen({ navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Ke Hal Login" onPress={() => navigation.navigate('LoginPage')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  const [dapatFont] = useFonts({
    'MetroBlack': require('./assets/font/Metropolis-Black.otf'),
    'MetroBold': require('./assets/font/Metropolis-Bold.otf'),
    'MetroLight': require('./assets/font/Metropolis-Light.otf'),
    'MetroMedium': require('./assets/font/Metropolis-Medium.otf'),
    'MetroSemiBold': require('./assets/font/Metropolis-SemiBold.otf'),
  });

  if(!dapatFont) {
    return <Text>Font Tidak ditemukan</Text>
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='LoginPage' component={LoginPage} options={ 
          HeaderShown: false} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;