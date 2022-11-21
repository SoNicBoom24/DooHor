import React, { useEffect, useReducer, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ScrollView, Image, TouchableOpacity } from "react-native";

import imgDooHor from "../../assets/logoDooHor.png";
import { FontAwesome, MaterialIcons, Ionicons, Octicons } from "@expo/vector-icons";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ScreenSendOffice_Documents from '../screens/SendOffice_Documents'
import ScreenHor from "../screens/SelectHor";
import ScreenRegister from "../screens/Registration";
import ScreenLogin from "../screens/Login";
import { ScoreTable } from "../screens/ScoreTable";
import ScreenDetailroom from "../screens/Detailroom"
import ScreenNotification from "../screens/Notification";
import ScreenProflie from "../screens/Profile";
import ScreenAnnoucement from "../screens/Announcement";
import ScreenRegisTable from "../screens/RegisTable"
import ScreenGeneralTopic from "../screens/GeneralTopic";
import Sceeenchat from "../screens/chat"
import Sceeenselect from "../screens/select"
import firebase from '../Database/firebaseDB'
import ReadAuth from '../screens/ReadAuth'
import Table_check from "../screens/Table_check"
import Create_Announcement from '../screens/Create_Announcement'
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
        // <View>
        //     <Text>Hello</Text>
        // </View>
        <ScreenNotification></ScreenNotification>
    );
}

function NavBar() {
    const linkTo = useNavigation();
    const user = firebase.auth().currentUser
    if (user) {
        const uid = firebase.auth().currentUser.uid
        firebase.firestore().collection("Users").where('uid', '==', uid).where('Role', '==', 'admin').querySnapshot.forEach((res) => {
            const { Role } = res.data();
            const isRole = Role;
        }
        )
    }

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
                    marginBottom: 40
                }}
            >
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <TouchableOpacity style={{ position: "absolute", top: -16 }}
                        onPress={() => { linkTo.navigate("ScreenMain"); }}>
                        <Image
                            source={imgDooHor}
                            style={{ resizeMode: "contain", width: 100, height: 35 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>


                    {/* {isRole == "admin" &&
                        <Ionicons
                            name="chatbubble-outline"
                            size={24}
                            color="black"
                            style={{ position: "absolute", left: -85, top: -13 }}
                            onPress={() => {
                                linkTo.navigate("");
                            }}
                        />
                        <Octicons 
                            name="feed-star" 
                            size={25} 
                            color="black" 
                            style={{ position: "absolute", left: -55, top: -13 }}
                        />
                        <MaterialIcons 
                            name="edit" size={25} 
                            color="black" 
                            style={{ position: "absolute", left: -25, top: -13 }}
                        />
                    } */}

                    <Ionicons
                        name="chatbubble-outline"
                        size={24}
                        color="black"
                        style={{ position: "absolute", left: -60, top: -13 }}
                        onPress={() => {
                            linkTo.navigate("ScoreTable");
                        }}
                    />
                    <FontAwesome
                        name="user"
                        size={25}
                        color={"black"}
                        style={{ position: "absolute", left: -25, top: -13 }}
                        onPress={() => {
                            linkTo.navigate("Create_Announcement");
                        }}
                    />
                </View>
            </View>
        </View>
    );
    // }
}

export default function Navigator() {

    return (
        <>
            <NavigationContainer>

                <NavBar />
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="ScreenLogin" component={ScreenLogin} />
                    <Stack.Screen name="ScreenNotification" component={ScreenNotification} />
                    <Stack.Screen name="ScreenHor" component={ScreenHor} />
                    <Stack.Screen name="ScreenMain" component={TestNavigate} />
                    <Stack.Screen name="ScreenRegister" component={ScreenRegister} />
                    <Stack.Screen name="ScoreTable" component={ScoreTable} />
                    <Stack.Screen name="ScreenProflie" component={ScreenProflie} />
                    <Stack.Screen name="ScreenDetailroom" component={ScreenDetailroom} />
                    <Stack.Screen name="ScreenSendOffice_Documents" component={ScreenSendOffice_Documents} />
                    <Stack.Screen name="ScreenAnnoucement" component={ScreenAnnoucement} />
                    <Stack.Screen name="ScreenRegisTable" component={ScreenRegisTable} />
                    <Stack.Screen name="ScreenGeneralTopic" component={ScreenGeneralTopic} />
                    <Stack.Screen name="Sceeenchat" component={Sceeenchat} />
                    <Stack.Screen name="Sceeenselect" component={Sceeenselect} />
                    <Stack.Screen name="ReadAuth" component={ReadAuth} />
                    <Stack.Screen name="Table_check" component={Table_check} />
                    <Stack.Screen name="Create_Announcement" component={Create_Announcement} />


                    {/* isSignedIn ? (
                    <>
                    <Stack.Screen name="ScreenNotification" component={ScreenNotification} />
                    <Stack.Screen name="ScreenHor" component={ScreenHor} />
                    <Stack.Screen name="ScreenMain" component={TestNavigate} />
                    <Stack.Screen name="ScreenRegister" component={ScreenRegister} />
    
                    <Stack.Screen name="ScreenDetailroom" component={ScreenDetailroom} />
                    <Stack.Screen name="ScreenProflie" component={ScreenProflie} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="ScreenLogin" component={ScreenLogin} />
                    </>
                ) */}




                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({});



