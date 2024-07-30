import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const { width: viewportWidth } = Dimensions.get('window');

function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.bannerContainer}>
        <Swiper
          style={styles.wrapper}
          showsButtons={true}
          autoplay={true}
          loop={true}
          nextButton={<Text style={styles.buttonText}>›</Text>}
          prevButton={<Text style={styles.buttonText}>‹</Text>}
        >
          <View style={styles.slide}>
            <Image source={require('./assets/ika3.jpg')} style={styles.bannerImage} />
          </View>
          <View style={styles.slide}>
            <Image source={require('./assets/Ag.jpg')} style={styles.bannerImage} />
          </View>
          <View style={styles.slide}>
            <Image source={require('./assets/ika.jpg')} style={styles.bannerImage} />
          </View>
        </Swiper>
        <Text style={styles.bannerText}>Fashion Sale</Text>
        <TouchableOpacity style={styles.bannerButton}>
          <Text style={styles.bannerButtonText}>Check</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newSection}>
        <Text style={styles.newSectionTitle}>New</Text>
        <Text style={styles.newSectionSubtitle}>You've never seen it before!</Text>
        <ScrollView horizontal>
          <View style={styles.newItem}>
            <Image 
              source={require('./assets/Ag.jpg')}
              style={styles.newItemImage} 
            />
            <Text style={styles.newItemText}>Item 1</Text>
          </View>
          <View style={styles.newItem}>
            <Image 
              source={require('./assets/Ag.jpg')}
              style={styles.newItemImage} 
            />
            <Text style={styles.newItemText}>Item 2</Text>
          </View>
          <View style={styles.newItem}>
            <Image 
              source={require('./assets/Ag.jpg')}
              style={styles.newItemImage} 
            />
            <Text style={styles.newItemText}>Item 3</Text>
          </View>
          <View style={styles.newItem}>
            <Image 
              source={require('./assets/Ag.jpg')}
              style={styles.newItemImage} 
            />
            <Text style={styles.newItemText}>Item 4</Text>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAEBE5',
  },
  bannerContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  wrapper: {
    height: 400,
  },
  slide: {
    width: viewportWidth,
    height: 400,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerText: {
    position: 'absolute',
    top: 230,
    left: 20,
    color: 'white',
    fontSize: 30,
    fontFamily: 'MetroBold',
  },
  bannerButton: {
    position: 'absolute',
    top: 270,
    left: 20,
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  bannerButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  buttonText: {
    color: '#F07182',
    fontSize: 50,
    fontWeight: 'bold',
  },
  newSection: {
    padding: 20,
  },
  newSectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  newSectionSubtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  newItem: {
    marginRight: 10,
  },
  newItemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  newItemText: {
    textAlign: 'center',
    marginTop: 5,
  },
});

export default Home;
