import { View, ImageBackground, Text } from 'react-native'
import React from 'react'

const Shop = () => {
  return (
    <View style={{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'flex-start', 
        backgroundColor:'#FAEBE5'
        }}>
        <View style={{ 
            alignContent: 'center',
            height: 100, 
            width: 300, 
            borderRadius: 10,
            backgroundColor: 'red',
            marginTop: 50,
            
        }}>
            <Text style={{ 
                fontSize: 25,
                color: 'white',
                textAlign: 'center',
                }}>
                ika
            </Text>
        </View>
        <View style={{ 
            alignContent: 'center',
            height: 100, 
            width: 300, 
            borderRadius: 10,
            borderWidth: 2,
            borderColor: '#F07182',
            marginTop: 15,
            
        }}>
            <Text style={{ 
                fontSize: 25,
                textAlign: 'center',
                }}>
                ika
            </Text>
        </View>
        <View style={{ 
            alignContent: 'center',
            height: 100, 
            width: 300, 
            borderRadius: 10,
            borderWidth: 2,
            borderColor: '#F07182',
            marginTop: 15,
            
        }}>
            <Text style={{ 
                fontSize: 25,
                textAlign: 'center',
                }}>
                ika
            </Text>
        </View>
        <View style={{ 
            alignContent: 'center',
            height: 100, 
            width: 300, 
            borderRadius: 10,
            borderWidth: 2,
            borderColor: '#F07182',
            marginTop: 15,
            
        }}>
            <Text style={{ 
                fontSize: 25,
                textAlign: 'center',
                }}>
                ika
            </Text>
        </View>
    </View>
  )  
}
export default Shop;