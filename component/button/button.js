import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'


    const ButtonCustom = ({ color, text, onPress }) => {
      return (
        <TouchableOpacity onPress={onPress} >
        <View style={{
          backgroundColor: color,
          width: 300, 
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          marginTop:20,
          
      
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
        </TouchableOpacity>
      )
    } 
    export default ButtonCustom