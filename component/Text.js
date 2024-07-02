import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'

const CustomText =({ text, color, fontSize }) =>{
    return(
      <View style={{
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal:29,
      marginBottom:20
      
    }}>
      <Text style={{
      color: color,
      fontSize: fontSize,
      fontFamily: 'MetroMedium'
    
    }}>
      {text}
    </Text>   
    </View>
    )
}

export default CustomText
