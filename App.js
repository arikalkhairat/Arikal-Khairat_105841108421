import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ButtonCustom from './component/button/button'

const App = () => { 
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{
        fontSize: 20, 
        color: '#f8abeb',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 100
      }}>
        Selamat Datang! {'\n'} Duduk Santai Dan Mulai Scroll
      </Text>
      <Image 
        source={require('./assets/img.jpg')}
        style={{
        width: 200,
        height: 200,
        marginTop: 50,
        borderRadius: 10
      }}>
      </Image>
      <Text style={{
        fontSize: 17,
        color: 'lightblue',
        fontWeight: 'bold',
        marginTop: 130
      }}>Or</Text>
       
    <View style={{
      flex: 1,
      alignItems: 'flex-end', //BARIS
      justifyContent: 'center', //KOLOM
      flexDirection:'row',
      marginBottom: 160
    }}>
      <ButtonCustom color= 'fuchsia' text='Sign In' />
      <ButtonCustom color= 'fuchsia' text='Sign Up' />
      
      </View>
      </View>
    
    
    
  )
}

export default App