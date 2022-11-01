import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, Switch, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function register() {

    return (
        <View style={styles.container} >
            <Text style={styles.logintext}>Login</Text>
            <TextInput style={styles.inputContainer} placeholder="Username" />
            <TextInput style={styles.inputContainer} placeholder="Password" />
            <View style={styles.buttonLogin}>
                <Button title="Login" color={"white"}/>
                <AntDesign name="caretright" size={24} color="#FFE664" />
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