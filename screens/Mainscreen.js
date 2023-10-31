import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Home from './HomeScreen';
import Category from './CategoryScreen';
import Cart from './CheckoutScreen';
import Favorites from './FavoritesScreen';
import Profile from './ProfileScreen';


export default function MainScreen() {
    const [CurrentScreen, setCurrentScreen] = useState('Home');
    const handleSwitchScreens = (val) => {
        setCurrentScreen(val);
    }
    return (
    <View style={styles.container}>
        <View style={styles.Content}>
            {CurrentScreen === 'Home' ? (<Home/>) : 
            (CurrentScreen === 'Category' ? (<Category/>) : 
            CurrentScreen === 'Cart' ? (<Cart/>) : 
            CurrentScreen === 'Favorites' ? (<Favorites/>):
            CurrentScreen === 'Profile' ? (<Category/>) : null)}
        </View>
        <View style={styles.BottomBar}>
            <TouchableOpacity style={styles.BottomBarIcon}
            onPress={()=>handleSwitchScreens('Home')}>
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.BottomBarIcon}
            onPress={()=>handleSwitchScreens('Category')}>
                <Text>Category</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.BottomBarIcon}
            onPress={()=>handleSwitchScreens('Cart')}>
                <Text>Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.BottomBarIcon}
            onPress={()=>handleSwitchScreens('Favorites')}>
                <Text>Favorites</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.BottomBarIcon}
            onPress={()=>handleSwitchScreens('Profile')}>
                <Text>Profile</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    BottomBarIcon:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        height: '100%',
    },
    BottomBar:{
        flexDirection:'row',
        width: '100%',
        height: 60,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
    },
    Content:{
        flex:1,
        width: '100%',
        alignItems:'center',
        justifyContent:'center'
    },
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        marginTop: 30,
    },
});