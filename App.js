import { useFonts } from 'expo-font';
import { Text, View } from 'react-native';
import Login from './Login';
import SignUp from './signUp';
import ForgotPass from './ForgotPass';


export default function App() {
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
    <View style={{ flex: 1 }}>
      {/* <Login /> */}
      <SignUp />
      {/* <ForgotPass /> */}

      {/* <Text style= {{ fontFamily: 'MetroBlack'}}>Font Metropolis Black</Text>
      <Text style= {{ fontFamily: 'MetroBold'}}>Font Metropolis Bold</Text>
      <Text style= {{ fontFamily: 'MetroLight'}}>Font Metropolis Light</Text>
      <Text style= {{ fontFamily: 'MetroMedium'}}>Font Metropolis Medium</Text>
      <Text style= {{ fontFamily: 'MetroSemiBold'}}>Font Metropolis Semi Bold</Text> */}
      {/* <Text>Font Biasa</Text> */}
    </View>
  );
}
