import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryCard = ({ title, imageUrl }) => {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <Image source={imageUrl} style={styles.backgroundImage} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 200,
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

export default CategoryCard;
