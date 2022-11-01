import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ScrollView, Image, TouchableOpacity } from "react-native";

import imgDooHor from "../../assets/logoDooHor.png";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import ScreenHor from "../screens/SelectHor";
import ScreenRegister from "../screens/Registration";
import ScreenProfile from "../screens/Profile";
import ScreenDetailroom from "../screens/Detailroom";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#FFDA79" }}>
            <Text>Home Screen</Text>
        </View>
    );
}

function ChatScreen() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#FFDA79" }}>
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
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#FFDA79", }}>
            <Text>Profile Screen</Text>
            {/* <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.navigate("Home")}
      /> */}
        </View>
    );
}

function TestNavigate() {
    return (
        <View>
            <Text>Hello</Text>
        </View>
    );
}

function NavBar() {
    const linkTo = useNavigation();
    return (
        <View style={{ backgroundColor: "#FFDA79" }}>
            <View
                style={{
                    flex: 0,
                    alignItems: "center",
                    height: 10,
                    padding: 10,
                    flexDirection: "row",
                    backgroundColor: "white",
                    borderRadius: 20,
                    justifyContent: "space-between",
                    marginHorizontal: 20,
                    paddingVertical: 20,
                    marginTop: 40,
                }}
            >
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <TouchableOpacity style={{position:"absolute", top: -16}}
                    onPress={() => { linkTo.navigate("ScreenMain"); }}>
                        <Image
                            source={imgDooHor}
                            style={{ resizeMode: "contain", width: 100, height: 35 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>


                    <Ionicons
                        name="chatbubble-outline"
                        size={24}
                        color="black"
                        style={{ position: "absolute", left: -60, top: -15 }}
                        onPress={() => {
                            linkTo.navigate("ScreenDetailroom");
                        }}
                    />

                    <FontAwesome
                        name="user"
                        size={25}
                        color={"black"}
                        style={{ position: "absolute", left: -25, top: -15 }}
                        onPress={() => {
                            linkTo.navigate("ScreenProfile");
                        }}
                    />
                </View>
            </View>
            {/* <View style={{ width: "100%", height: "100%" }}>
        <ScreenHor />
        <ScreenRegister />
        <ScreenProfile />
      </View> */}
        </View>
    );
}

export default function App() {
    return (
        <>
            <NavigationContainer>
                <NavBar />
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="ScreenMain" component={TestNavigate} />
                    <Stack.Screen name="ScreenHor" component={ScreenHor} />
                    <Stack.Screen name="ScreenRegister" component={ScreenRegister} />
                    <Stack.Screen name="ScreenProfile" component={ScreenProfile} />
                    <Stack.Screen name="ScreenDetailroom" component={ScreenDetailroom} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({});