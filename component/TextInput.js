import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'

const TextInputCustom = ({ name, color, label }) => {
    return(
    //   <View style={{ marginBottom: 5}}>
    //   <Text style={{
    //   fontSize: 10,
    //   color: 'Black',
    //   fontWeight: 'bold',
    //   marginBottom: 10
    
    // }}>
    //   {label}
    // </Text> 

      <TextInput
      placeholder={`Masukkan ${name}`}
      placeholderTextColor={color}
      style={{
        height: 60,
        width: 300,
        borderColor: '#FA4E76',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        color: color,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'MetroMedium'
      }}
      />
      // </View>
    )
  }
  export default TextInputCustom