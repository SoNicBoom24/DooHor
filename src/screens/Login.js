import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, Switch, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import firebase from '../Database/firebaseDB'

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Login() {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })

    const navigation = useNavigation();

    const onLoginPressed = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email.value, password.value)
            .then((res) => {
                console.log('User logged-in successfully!')
                alert("User logged-in successfully!")
                setEmail({ value: '', error: '' })
                setPassword({ value: '', error: '' })
            })
            navigation.navigate("ScreenNotification")

    }
    return (
        <View style={styles.container} >
            <Text style={styles.logintext}>Login</Text>
            <TextInput style={styles.inputContainer} placeholder="Username" value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
            />
            <TextInput style={styles.inputContainer} value={password.value}
                placeholder="Password" onChangeText={(text) => setPassword({ value: text, error: '' })}
            />
            <View style={styles.buttonLogin}>
                <TouchableOpacity onPress={onLoginPressed}>
                <View style={{backgroundColor: "transparent", padding: 5, borderRadius: 5, flexDirection: "row"}}>
                    <Text style={{color: "white", fontSize: 18}}>
                        Login
                    </Text>
                    <AntDesign name="caretright" size={24} color="#FFE664" />
                </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFB053",
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        backgroundColor: "white",
        padding: 5,
        borderRadius: 10,
        width: "70%",
        margin: 10,
        fontSize: 20
    },
    logintext: {
        fontSize: 50,
        color: "white",
        paddingBottom: 50,
        fontWeight: "700"
    },
    buttonLogin: {
        backgroundColor: "#FF9A3C",
        width: "30%",
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    }
});