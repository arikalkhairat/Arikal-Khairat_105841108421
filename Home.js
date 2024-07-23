import { View, ImageBackground } from 'react-native'
import ButtonCustom from './component/button/button'
import React from 'react'

const Home = () => {
  return (
    <ImageBackground 
    source={require('./assets/Ag.jpg')}
    style={{ flex: 1 }}
    >
    <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
      <ButtonCustom color="#CC3E5F" text="Check" />
    </View>
    </ImageBackground>
  )  
}
export default Home;