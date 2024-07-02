import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import ButtonCustom from './component/button/button'
import TextInputCustom from './component/TextInput'
import CustomText from './component/Text'
import Icon from './component/Icon'


const Forgot = () => { 
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
      color: 'black',
      fontFamily: 'MetroBold'
      // fontWeight: 'bold'
    
    }}>
      Forgot Password
    </Text>   
    </View>
    <View style={{ alignItems:'center', justifyContent:'center'}}>
     
     <CustomText text="Please, enter your email address. You will receive a link to create a new password via email." />
     <TextInputCustom name="email" color="#FA4E76" label="Nama"/>
     <CustomText text="Not a valid email address. Should be your@email.com" color="#FA4E76" fontSize={12} />
     <ButtonCustom color="#9AA6EC" text="Send"/>
     
    </View>
    </View>
  )  
}

export default Forgot