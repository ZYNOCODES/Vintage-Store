import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCard = ({ title, imageUrl }) => {
  return (
    <View style={styles.card}>
      <Image source={imageUrl} style={styles.backgroundImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 170,
    height: 250,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: 'red',
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    borderRadius: 10,
  },
  contentContainer: {
    position: 'absolute',
    bottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
});

export default ProductCard;
