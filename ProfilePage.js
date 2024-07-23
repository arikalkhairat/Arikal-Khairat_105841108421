import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import ButtonCustom from './component/button/button'
import TextInputCustom from './component/TextInput'
import CustomText from './component/Text'
import Icon from './component/Icon'
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation(); 
  return (
    <View style={{ flex:1, alignItems: 'center', backgroundColor:'#FAEBE5'}}>
    <View style={{ flexDirection:'row', marginBottom: 10}}>
     <Icon imageSource={require('./assets/Prof.jpeg')} onPress={() => navigation.navigate('LoginPage')} />
    </View>
    <CustomText text="Arikal Khairat" />
    <View style={{   }} />
     <ButtonCustom color="#F07182" text="Pesanan Saya" />
     <ButtonCustom color="#F07182" text="Alamat Pengiriman" />
     <ButtonCustom color="#F07182" text="Metode Pembayaran" />
     <ButtonCustom color="#F07182" text="Voucher" />
     <ButtonCustom color="#F07182" text="Penilaian" />
     <ButtonCustom color="#F07182" text="Pengaturan Akun" />
    </View>
    
  )  
}
export default SignUp