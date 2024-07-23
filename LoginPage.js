import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import ButtonCustom from './component/button/button'
import TextInputCustom from './component/TextInput'
import CustomText from './component/Text'
import Icon from './component/Icon'
import { useNavigation } from '@react-navigation/native'


const Login = () => { 
  const navigation = useNavigation();
  return (
    <View style={{ flex:1, backgroundColor:'#FAEBE5'}}>
      <View style={{
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginTop: 30,
      marginLeft: 30,
      marginBottom:50,
    
    }}>
      <Text style={{
      fontSize: 35,
      color: '#951332',
      // fontWeight: 'bold',
      fontFamily: 'MetroBold'
    
    }}>
      Login
    </Text>   
    </View>
    <View style={{ alignItems:'center', justifyContent:'center' }}>
    
     <TextInputCustom name="email" color="#B7919A" label="Nama"/>
     <TextInputCustom name="Password" color="#B7919A" label="Nama" />
     <View style={{marginLeft:150}}>
     <CustomText text="Forgot your password?" onPress={() => navigation.navigate('ForgotPass')} />
     </View>
     <ButtonCustom color="#CC3E5F" text="Login" onPress={() => navigation.navigate('VisualSearch')} />
     <View style={{ marginTop:100 }}>
      <CustomText text="Or Login with social account" />
     </View>
    
     
     <View style={{
      flexDirection:'row', 
      }}>
      <Icon imageSource={require('./assets/go.png')} />
      <Icon imageSource={require('./assets/fb.png')} />
     </View>
     
    </View>
    </View>
  )  
}

export default Login