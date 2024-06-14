import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import ButtonCustom from './component/button/button'

const App = () => { 
  const TextInputCustom = ({ name, color }) => {
    return(
      <TextInput
      placeholder={`Masukkan ${name}`}
      style={{
        height: 40,
        width: 200,
        borderColor: 'green',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        color: color,
      }}
      />
    )
  }
  return (
    <View style={{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',

    }}>
     <TextInputCustom name="Username" color="blue" />
     <TextInputCustom name="Password" color="black" />
    </View>
  )  
}

export default App