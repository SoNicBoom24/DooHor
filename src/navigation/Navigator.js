import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ScrollView, Image } from "react-native";
import { ToggleButton } from 'react-native-paper';

import imgDooHor from "../../assets/logoDooHor.png"
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';

import ScreenHor from "../screens/SelectHor";
import ScreenRegister from "../screens/Registration";
import ScreenProfile from "../screens/Profile";
import ScreenDetailroom from "../screens/Detailroom"

import { NativeRouter, Route, Link } from "react-router-native";

function HomeScreen() {

    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFDA79",
            }}
        >
            <Text>Home Screen</Text>
        </View>
    );
}

function ChatScreen() {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFDA79",
            }}
        >
            <Text>Chat Screen</Text>
            {/* <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      /> */}
        </View>
    );
}

function ProfileScreen() {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFDA79",
            }}
        >
            <Text>Profile Screen</Text>
            {/* <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.navigate("Home")}
      /> */}
        </View>
    );
}


export default function App() {
    return (
        <>
            <View style={{ flex: 1, flexGrow: 1, backgroundColor: "#FFDA79", }}>
                <>
                    <View style={{
                        flex: 0,
                        alignItems: 'center',
                        height: 10,
                        padding: 10,
                        flexDirection: "row",
                        backgroundColor: "white",
                        borderRadius: 20,
                        justifyContent: "space-between",
                        marginHorizontal: 20,
                        paddingVertical: 20,
                        marginTop: 40,
                    }}>
                        <View style={{ display: 'flex', flexDirection: 'row', }}>
                            <Image source={imgDooHor} style={{ resizeMode: "contain", width: 100 }} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', }}>
                            <Ionicons name="chatbubble-outline" size={24} color="black" style={{ position: "absolute", left: -60, top: -15 }} />
                            <FontAwesome name="user" size={25} color={"black"} style={{ position: "absolute", left: -25, top: -15 }} />
                        </View>
                    </View>
                    {/* <ScreenHor /> */}
                    <ScreenDetailroom />
                    {/* <ScreenProfile /> */}
                </>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

});
