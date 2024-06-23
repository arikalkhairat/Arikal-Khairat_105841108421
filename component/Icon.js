import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'

const Icon = ({ imageSource }) => {
    return (
    <View style={styles.container}>
      <Image
      source={imageSource}
      style={styles.image}
      />
      </View>
    );
}  

const styles = StyleSheet.create({
    container: {
      marginTop:50
    },
    image: {
      width:50, 
      height:50, 
      borderRadius: 100, 
      marginRight:20,
      marginLeft:20

    },
     
});
       

export default Icon