import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import LoginPage from './LoginPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeAktif from './assets/Icon/HomeAktif.jpg';
import HomeInaktif from './assets/Icon/HomeInaktif.jpg';
import Shop from './assets/Icon/ShopAktif.jpg';
import ShopInaktif from './assets/Icon/ShopInaktif.jpg';
import ProfilAktif from './assets/Icon/ProfilAktif.jpeg';
import ProfilInaktif from './assets/Icon/ProfilInaktif.jpeg';
import FavInaktif from './assets/Icon/FavInaktif.jpeg';
import FavAktif from './assets/Icon/FavAktif.jpeg';
import SignUp from './signUp';

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? ProfilAktif : ProfilInaktif}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      /> */}
      <Tab.Screen
        name="signup"
        component={SignUp}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ?  HomeAktif : HomeInaktif}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="login"
        component={LoginPage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Shop : ShopInaktif}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
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
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;