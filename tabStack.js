import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage';
import signUp from './signUp';
import ForgotPass from './ForgotPass';
import { useFonts } from 'expo-font';
import { createNativeTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createNativeTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{

        HeaderShown: false, tabBarIcon: ({ focused }) => (
          <Image
          source={focused? HomeAktif : HomeAktif}
          style={{ width: 40, height: 40}}
          />
        ),
      }}
  
     />
   </Tab.Navigator>
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
        <Stack.Screen name="signUp" component={signUp} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name='ForgotPass' component={ForgotPass} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;