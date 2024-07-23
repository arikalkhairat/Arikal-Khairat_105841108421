import { View, ImageBackground, Text } from 'react-native'
import React from 'react'

const Fav = () => {
  return (
    <View style={{ 
      
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'flex-start', 
        backgroundColor:'#FAEBE5'
        }}>
        <Text style={{ 
          fontSize: 30,
          fontFamily: 'MetroSemiBold' ,
          marginTop: 10,
          marginRight: 200
          }}>
            Favorite
        </Text>
        <View style={{ 
            height: 100, 
            width: 300,  
            borderRadius: 10,
            padding: 10,
            backgroundColor: '#F6A6B3',
            marginTop: 50
        }}>
            <Text style={{ 
                fontSize: 25,
                }}>
                ika
            </Text>
        </View>
        <View style={{ 
            height: 100, 
            width: 300,  
            borderRadius: 10,
            padding: 10,
            backgroundColor: '#F6A6B3',
            marginTop: 15
        }}>
            <Text style={{ 
                fontSize: 25,
                }}>
                ika
            </Text>
        </View>
        <View style={{ 
            height: 100, 
            width: 300,  
            borderRadius: 10,
            padding: 10,
            backgroundColor: '#F6A6B3',
            marginTop: 15
        }}>
            <Text style={{ 
                fontSize: 25,
                }}>
                ika
            </Text>
        </View>
    </View>
  )  
}
export default Fav;