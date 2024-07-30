import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const categories = ['Women', 'Men', 'Kids'];
const shopItems = [
  {
    id: '1',
    title: 'New',
    image: require('./assets/img.jpg'),
  },
  {
    id: '2',
    title: 'Clothes',
    image: 'https://example.com/clothes.jpg',
  },
  {
    id: '3',
    title: 'Shoes',
    image: 'https://example.com/shoes.jpg',
  },
  {
    id: '4',
    title: 'Accesories',
    image: 'https://example.com/accessories.jpg',
  },
];

const ShopPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Categories</Text>
        <View style={styles.searchIcon}>
          <Text>🔍</Text>
        </View>
      </View>
      <View style={styles.categories}>
        {categories.map((category, index) => (
          <Text key={index} style={styles.categoryText}>
            {category}
          </Text>
        ))}
      </View>
      <ScrollView>
        <View style={styles.promotion}>
          <Text style={styles.promotionText}>SUMMER SALES</Text>
          <Text style={styles.promotionSubText}>Up to 50% off</Text>
        </View>
        <FlatList
          data={shopItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <Text style={styles.itemTitle}>{item.title}</Text>
            </View>
          )}
          contentContainerStyle={styles.list}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchIcon: {
    fontSize: 20,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  categoryText: {
    fontSize: 16,
    color: '#888',
  },
  promotion: {
    backgroundColor: 'red',
    padding: 20,
    alignItems: 'center',
  },
  promotionText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  promotionSubText: {
    color: '#fff',
    fontSize: 16,
  },
  list: {
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 10,
  },
  itemImage: {
    width: 60,
    height: 60,
    marginRight: 20,
    borderRadius: 10,
  },
  itemTitle: {
    fontSize: 18,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#f8f8f8',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerButtonActive: {
    alignItems: 'center',
  },
  footerButtonText: {
    fontSize: 16,
    color: '#888',
  },
  footerButtonTextActive: {
    fontSize: 16,
    color: '#ff6347',
  },
});

export default ShopPage;
