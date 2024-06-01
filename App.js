import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

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
        marginTop: 165
      }}>Or</Text>
       
    <View style={{
      flex: 1,
      alignItems: 'flex-end', //BARIS
      justifyContent: 'center', //KOLOM
      flexDirection:'row',
      marginBottom: 160
    }}>
      <View style={{
        backgroundColor: 'fuchsia', width: 100, height: 45,
        justifyContent: 'center',
        borderRadius: 20,
        marginRight: 20
    }}>
  
      <Text style={{
        fontSize: 17, 
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
        
      }}> 
      Sign In
      </Text>
      </View>
      <View style={{
        backgroundColor: 'white', width: 100, height: 45,
        justifyContent: 'center',
        borderRadius: 20,
        marginLeft: 20,
        borderColor: 'fuchsia',
        borderWidth: 5
    }}>
  
      <Text style={{
        fontSize: 17, 
        color: 'fuchsia',
        fontWeight: 'bold',
        textAlign: 'center'
        
      }}> 
      Sign Up
      </Text>
      </View>
      
      </View>
      </View>
    
    
    
  )
}

export default App