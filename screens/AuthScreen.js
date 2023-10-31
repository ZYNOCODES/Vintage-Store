import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

export default function Authentication() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
      async function prepare() {
        try {
          await Font.loadAsync(Entypo.font);
          await new Promise(resolve => setTimeout(resolve, 2000));
        } catch (e) {
          console.warn(e);
        } finally {
          // Tell the application to render
          setAppIsReady(true);
        }
      }
      prepare();
    }, []);
  
    const onLayoutRootView = useCallback(async () => {
      if (appIsReady) {
        await SplashScreen.hideAsync();
      }
    }, [appIsReady]);
  
    if (!appIsReady) {
      return null;
    }
    const handleLogIn = () => {

    }
    return (
    <View style={styles.container} onLayout={onLayoutRootView}>
        <View style={styles.logo}>
            <Text style={styles.title}>Vintage touch</Text>
        </View>
        <View style={styles.FormContainer}>
            <Text style={styles.subtitle}>Sign in to your account</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                />
                <View style={styles.ForgetpassCaontainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity>
                        <Text style={styles.Forgetpass}>Forget password?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={handleLogIn}
            >
                <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
            <View style={styles.BottomBar}>
                <Text style={styles.BottomBarTitle}>You don't have an account?</Text>
                <TouchableOpacity>
                    <Text style={styles.BottomBarSignUp}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    Forgetpass:{
        fontSize: 12,
        fontWeight: 'bold',
    },
    ForgetpassCaontainer:{
        flexDirection: 'column',
        alignItems: 'flex-end', 
        justifyContent: 'space-between',
        width: '100%',
    },
    BottomBarSignUp:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#EB162D',
    },
    BottomBar: {
        flexDirection: 'row',
        alignItems: 'flex-end', 
        justifyContent: 'center',
        marginTop: 60,
        gap: 5,
    },
    container: {
        flex: 1, 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'flex-start',
        paddingTop: 30,
    },
    logo:{
        width: '100%',
        height: 'auto',
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop: 100,
    },
    title:{
        fontSize: 40,
        fontWeight: 'bold',
        color: '#EB162D',
    },
    FormContainer:{
        width: '80%',
        height: 'auto',
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop: 100,
        flexDirection: 'column',
        gap: 20,
    },
    form:{
        flexDirection: 'column',
        width: '100%',
        height: 'auto',
        alignItems: 'center', 
        justifyContent: 'center',
        gap: 20,
    },
    subtitle:{
        fontSize: 20,
        fontWeight: 'medium',
        color: '#000',
    },
    input: {
        height: 'auto',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 15,
        width: '100%',
        borderRadius: 10,
        fontSize: 15,
        backgroundColor: '#dddddd',
    },
    button: {
        backgroundColor: '#EB162D',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});