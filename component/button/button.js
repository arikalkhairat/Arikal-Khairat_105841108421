import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
    const ButtonCustom = ({ color, text }) => {
      return (
        <View style={{
          backgroundColor: color,
          width: 300, height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          marginTop:20,
          marginBottom:50,
          // marginLeft: 10
      }}>
        <Text style={{
          fontSize: 17, 
          color: 'white',
          // fontWeight: 'bold',
          textAlign: 'center',
          fontFamily: 'MetroSemiBold'
          
        }}>{text}
        </Text>
        </View>
  
      )
    } 
    export default ButtonCustom