import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Profile() {
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.subtitle}>page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '100%',
    },
    title:{
        fontSize: 50,
        fontWeight: 'bold',
        color: '#EB162D',
    },
    subtitle:{
        fontSize: 40,
        fontWeight: 'bold',
        color: '#EB162D',
    },
});