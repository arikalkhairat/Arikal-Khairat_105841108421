import { View, ImageBackground } from 'react-native'
import React from 'react'
import ButtonCustom from './component/button/button'
import CustomText from './component/Text'
import { useNavigation } from '@react-navigation/native'


const VisualSearch = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground 
    source={require('./assets/Ag.jpg')}
    style={{ flex: 1 }}
    >
    <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
     <CustomText text="Search for an outfit by talking a photo or uploading an image" fontSize={25} color={"white"} />
     <ButtonCustom color="#CC3E5F" text="Take a Photo" onPress={() => navigation.navigate('Home')}/>
     <ButtonCustom color="#CC3E5F" text="Apload An Image"/>
    </View>
    </ImageBackground>
  )  
}
export default VisualSearch