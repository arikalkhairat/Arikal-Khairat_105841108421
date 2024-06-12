import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
    const ButtonCustom = ({ color, text }) => {
      return (
        <View style={{
          backgroundColor: color,
          width: 100, height: 45,
          justifyContent: 'center',
          borderRadius: 20,
          marginRight: 30,
          marginLeft: 20
      }}>
        <Text style={{
          fontSize: 17, 
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center'
          
        }}>{text}
        </Text>
        </View>
  
      )
    } 
    export default ButtonCustom