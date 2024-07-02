import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import ButtonCustom from './component/button/button'
import TextInputCustom from './component/TextInput'
import CustomText from './component/Text'
import Icon from './component/Icon'


const SignUp = () => { 
  return (
    <View style={{ flex:1, backgroundColor:'#FAEBE5'}}>
      <View style={{
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginTop: 100,
      marginLeft: 30,
      marginBottom:50
    }}>
      <Text style={{
      fontSize: 35,
      color: '#951332',
      fontFamily: 'MetroBold'
      // fontWeight: 'bold'
    
    }}>
      SignUp
    </Text>   
    </View>
    <View style={{ alignItems:'center', justifyContent:'center'}}>
      
     <TextInputCustom name="Username" color="#B7919A" label="Nama" />
     <TextInputCustom name="email" color="#B7919A" label="Nama"/>
     <TextInputCustom name="Password" color="#B7919A" label="Nama" />
     <View style={{marginLeft:150}}>
     <CustomText text="Already have an account?" />
     </View>
     <ButtonCustom color="#CC3E5F" text="SignUp"/>
     <CustomText text="Or sign up with social account" style={{ marginBottom:30}} />

     <View style={{
      flexDirection:'row'}}>
      <Icon imageSource={require('./assets/go.png')} />
      <Icon imageSource={require('./assets/fb.png')} />
     </View>
     
    </View>
    </View>
  )  
}

export default SignUp