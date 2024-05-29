import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
    <View style={{
      flex: 1,
      alignItems: 'flex-end', //BARIS
      justifyContent: 'center', //KOLOM
      flexDirection:'row',
      marginRight: 20,
      marginBottom: 100
    }}>
      <View style={{
        backgroundColor: 'fuchsia', width: 150, height: 80,
        justifyContent: 'center',
        borderRadius: 20,
        marginRight: 20
    }}>
  
      <Text style={{
        fontsize: 100, 
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
        
      }}> 
      LOGIN
      </Text>
      </View>
      <View style={{
        backgroundColor: 'fuchsia', width: 150, height: 80,
        justifyContent: 'center',
        borderRadius: 20,
        marginLeft: 20
    }}>
  
      <Text style={{
        fontsize: 100, 
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
        
      }}> 
      REGISTER
      </Text>
      </View>
      
      </View>
      </View>
    
    
  )
}
export default App