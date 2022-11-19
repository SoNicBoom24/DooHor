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

import firebase from '../Database/firebaseDB'

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
    // const user = firebase.auth().currentUser
    // console.log(user)
    // if (check) {
    // if (user) {
    //     firebase.firestore()
    //         .collection('Users')
    //         .where('uid', '==', uid)
    //         .get()
    //         .then(querySnapshot => {
    //             querySnapshot.forEach((res) => {
    //                 setUserData(res.data())
    //             });
    //         });
    // }
    // else {
    //     alert("ยังไม่ได้ล็อคอิน พาส test1234")
    // }


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

                    {/* สำหรับ admin */}
                    {/* {isRole == "admin" &&
                        <Ionicons
                            name="chatbubble-outline"
                            size={24}
                            color="black"
                            style={{ position: "absolute", left: -85, top: -13 }}
                            onPress={() => {
                                linkTo.navigate("ScreenRegister");
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
                            linkTo.navigate("ScreenSendOffice_Documents");
                        }}
                    />
                    <FontAwesome
                        name="user"
                        size={25}
                        color={"black"}
                        style={{ position: "absolute", left: -25, top: -13 }}
                        onPress={() => {
                            linkTo.navigate("ScreenProflie");
                        }}
                    />
                </View>
            </View>
        </View>
    );
    // }
}

export default function Navigator() {
    const [user, setUser] = useState(null)
    useEffect(() => {
        setInterval(() => {

            setUser(firebase.auth().currentUser)
        }, 5000)
        // console.log(user)
    }, [])
    return (
        <>
            <NavigationContainer>
                {user ? (<NavBar />) : (<></>)}
                {/* <NavBar /> */}
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="ScreenLogin" component={ScreenLogin} />
                    <Stack.Screen name="ScreenNotification" component={ScreenNotification} />
                    <Stack.Screen name="ScreenHor" component={ScreenHor} />
                    <Stack.Screen name="ScreenMain" component={TestNavigate} />
                    <Stack.Screen name="ScreenRegister" component={ScreenRegister} />
                    <Stack.Screen name="ScoreTable" component={ScoreTable} />
                    {/* <Stack.Screen name="ScreenDetailroom" component={ScreenDetailroom} /> */}
                    <Stack.Screen name="ScreenProflie" component={ScreenProflie} />
                    <Stack.Screen name="ScreenDetailroom" component={ScreenDetailroom} />
                    <Stack.Screen name="ScreenSendOffice_Documents" component={ScreenSendOffice_Documents} />
                    <Stack.Screen name="ScreenAnnoucement" component={ScreenAnnoucement} />
                    <Stack.Screen name="ScoreTable" component={ScoreTable} />
                    <Stack.Screen name="ScreenSendOffice_Documents" component={ScreenSendOffice_Documents} />
                    <Stack.Screen name="ScreenRegisTable" component={ScreenRegisTable} />
                    {/* isSignedIn ? (
                    <>
                    <Stack.Screen name="ScreenNotification" component={ScreenNotification} />
                    <Stack.Screen name="ScreenHor" component={ScreenHor} />
                    <Stack.Screen name="ScreenMain" component={TestNavigate} />
                    <Stack.Screen name="ScreenRegister" component={ScreenRegister} />
                    <Stack.Screen name="DataTableTest" component={DataTableTest} />
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



