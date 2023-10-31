import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const NewCollectionCard = ({ title, imageUrl }) => {
  return (
    <View style={styles.card}>
        <View style={styles.LeftContent}>
            <Text style={styles.title}>{title}{'\nCOLLECTION'}</Text>
        </View>
        <View style={styles.RightContent}>
            <View style={styles.ImageContainer}>
                <Image source={imageUrl} style={styles.Image} />
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 300,
        flexDirection: 'row',
    },
    LeftContent: {
        flexDirection: 'row',
        width: '40%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EB162D',
        gap: 0,
    },
    title: {
        width: '100%',
        fontSize: 20,
        fontWeight: 'regular',
        color: '#fff',
        textAlign: 'center',
        transform: [{ rotate: '-90deg' }],
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'regular',
        color: '#fff',
        transform: [{ rotate: '-90deg' }],
    },
    RightContent: {
        width: '60%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ddd',
    },
    ImageContainer: {
        width: '70%',
        height: '70%',
        borderTopEndRadius: 30, 
        borderBottomStartRadius: 30, 
        overflow: 'hidden',
    },
    Image: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default NewCollectionCard;
