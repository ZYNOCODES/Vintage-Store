import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import NewCollectionCard from '../components/NewCollection';

export default function Home() {
    const [Category, setCategory] = useState([
        {title: 'Shirts', image: require('../assets/karolina.jpg')},
        {title: 'Dresses', image: require('../assets/renduyeti.jpg')},
        {title: 'Boots', image: require('../assets/renduyeti.jpg')},
        {title: 'Jackets & Blazers', image: require('../assets/karolina.jpg')},
        {title: 'Coats', image: require('../assets/karolina.jpg')},
        {title: 'Lingerie & Nightwear', image: require('../assets/renduyeti.jpg')},
        {title: 'Levi\'s', image: require('../assets/renduyeti.jpg')}
    ]);
    const [CurrentCategory, setCurrentCategory] = useState('Home');
    const handleSwitchCategorys = (val) => {
        setCurrentCategory(val);
    }
    return (
    <ScrollView>
        <View style={styles.container}>
        <View style={styles.TopBar}>
            <Text style={styles.title}>Vintage</Text>
            <Text style={styles.subtitle}>touch</Text>
        </View>
        <View style={styles.Content}>
            <FlatList 
                data= {Category}
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
                renderItem={({ item }) => 
                    <CategoryCard title={item.title} imageUrl={item.image} />
                }
            />
            <NewCollectionCard title={'SWEET SHIRTS'} imageUrl={require('../assets/karolina.jpg')}/>
            <View style={styles.CategoryContent}>
                <Text style={styles.CategoryTitle}>Category</Text>
                <FlatList 
                    data= {Category}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                    renderItem={({ item }) => 
                        <TouchableOpacity style={styles.CategoryBarIcon}
                        onPress={()=>handleSwitchCategorys(item.title)}>
                            <Text>{item.title}</Text>
                        </TouchableOpacity>
                    }
                />
                <View style={styles.ProductContent}>
                    <FlatList 
                        data= {Category}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={2}
                        renderItem={({ item }) => 
                            <ProductCard title={item.title} imageUrl={item.image} />
                        }
                    />
                </View>
            </View>  
        </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    ProductContent:{
        width: '100%',
        height: 'auto',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    CategoryBarIcon:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        height: '100%',
        padding: 10,
        fontSize: 15,
        height: 40,
    },
    CategoryContent:{
        width: '100%',
        height: 'auto',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 20
    },
    CategoryTitle:{
        fontSize: 25,
        fontWeight: 'medium',
        color: '#EB162D',
        paddingStart: 10,
    },
    Content:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: 'auto',
    },
    subtitle:{
        fontSize: 15,
        fontWeight: 'medium',
        color: '#EB162D',
    },
    title:{
        fontSize: 20,
        fontWeight: 'medium',
        color: '#EB162D',
    },
    TopBar:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 'auto',
        padding: 20,
    },
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '100%',
    },
    
});