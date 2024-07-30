import * as React from 'react';
import { View, Text, Button , Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage';
import signUp from './signUp';
import ForgotPass from './ForgotPass';
import VisualSearch from './VisualSearch';
import HomeScreen from './HomeScreen';
import ProfilePage from './ProfilePage';
import ShopPage from './ShopPage'
import BagPage from './BagPage'
import FavPage from './FavPage'
import Home from './Home';
import { useFonts } from 'expo-font';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeAktif from './assets/Icon/HomeAktif.jpg';
import HomeInaktif from './assets/Icon/HomeInaktif.jpg';
import Shop from './assets/Icon/ShopAktif.jpg';
import ShopInaktif from './assets/Icon/ShopInaktif.jpg';
import ProfilAktif from './assets/Icon/ProfilAktif.jpeg';
import ProfilInaktif from './assets/Icon/ProfilInaktif.jpeg';
import FavInaktif from './assets/Icon/FavInaktif.png';
import FavAktif from './assets/Icon/FavAktif.png';
import BagAktif from './assets/Icon/BagAktif.png';
import BagInaktif from './assets/Icon/BagInaktif.png'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ?  HomeAktif : HomeInaktif}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopPage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Shop : ShopInaktif}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bag"
        component={BagPage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? BagAktif : BagInaktif}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavPage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? FavAktif : FavInaktif}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? ProfilAktif : ProfilInaktif}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
   </Tab.Navigator>
  );
}

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
        <Stack.Screen name="SignUp" component={signUp} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="VisualSearch" component={VisualSearch} />
        <Stack.Screen name="ForgotPass" component={ForgotPass} /> 
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;