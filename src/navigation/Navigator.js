import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ScrollView, Image } from "react-native";
import { ToggleButton } from 'react-native-paper';

import imgDooHor from "../../assets/logoDooHor.png"
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';

import CardHor from "../components/CardHor";
import ScreenHor from "../screens/SelectHor";

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
        // <>
        //     <View
        //         style={{
        //             flex: 0,
        //             alignItems: 'center',
        //             height: 10,
        //             padding: 10,
        //             flexDirection: "row",
        //             backgroundColor: "white",
        //             borderRadius: 20,
        //             justifyContent: "space-between",
        //             marginHorizontal: 20,
        //             paddingVertical: 20,
        //             marginTop: 40
        //         }}
        //     >
        //         <View>
        //             <Text>DooHor</Text>
        //         </View>
        //         <View style={{
        //             display: 'flex',
        //             flexDirection: 'row',
        //         }}>
        //             <FontAwesome style={{ marginRight: 20 }} name="comment" size={25} color={"black"} />
        //             <FontAwesome name="user" size={25} color={"black"} />
        //             {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
        //         </View>
        //     </View>
        //     <ScrollView>
        //         <View
        //             style={{
        //                 flex: 1,
        //                 alignItems: "center",
        //                 justifyContent: "center",
        //                 backgroundColor: "#FFDA79",
        //             }}
        //         >
        //             <CardHor />
        //             <CardHor />
        //             <CardHor />
        //             <CardHor />
        //             <CardHor />
        //             <CardHor />
        //             <CardHor />
        //             <CardHor />
        //             <CardHor />
        //             <CardHor />
        //             {/* <Toggle/> */}
        //         </View>
        //     </ScrollView>
        // </>
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
            <View
                style={{
                    flex: 1,
                    flexGrow: 1,
                    backgroundColor: "#FFDA79",
                }}
            >
                {/* <Text>Hello</Text> */}
                {/* <HomeScreen /> */}
                <>
                <View
                    style={{
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
                        marginTop: 40
                    }}
                >
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}>
                        <Image source={imgDooHor} style={{resizeMode: "contain", width: "25%"}} />
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}>
                        <Ionicons name="chatbubble-outline" size={24} color="black" style={{position: "absolute", left: -60, top: -15}} />
                        <FontAwesome name="user" size={25} color={"black"} style={{position: "absolute", left: -25, top: -15}} />
                    </View>
                </View>
                <ScrollView>
                    <View
                        style={{
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#FFDA79",
                        }}
                    >
                        
                        <ScreenHor />
                        <CardHor />
                        <CardHor />
                        <CardHor />
                        <CardHor />
                        <CardHor />
                        <CardHor />
                        <CardHor />
                        <CardHor />
                        <CardHor />
                    </View>
                </ScrollView>
                </>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

});