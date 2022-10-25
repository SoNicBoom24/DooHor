import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Card from "react-native-card-component";
import CardHor from '../components/CardHor';
import Toggle from '../components/Toggle';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#FFDA79", }}>
            {/* <ScrollView> */}
            <CardHor/>
            {/* <Toggle/> */}
        {/* </ScrollView> */}
        </View>
    );
}

function ChatScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#FFDA79", }}>
            <Text>Chat Screen</Text>
            {/* <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      /> */}
        </View>
    );
}

function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#FFDA79", }}>
            <Text>Profile Screen</Text>
            {/* <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.navigate("Home")}
      /> */}
        </View>
    );
}

const Stack = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                tabBarStyle: {
                    position: 'absolute',
                    borderRadius: 50,
                    borderColor: "#fff",
                    borderTopColor: "#fff",
                    backgroundColor: "#fff",
                    height: "50px",
                    width: "98%",
                    top: 15,
                    left: "1%",
                },
                headerShown: false,
                headerTransparent: true,


            }} >
                <Stack.Screen name="Home" component={HomeScreen} options={{
                    tabBarIcon: () => (
                        <FontAwesome5 name="eye" size={25} color={"black"} />
                    ),
                    tabBarShowLabel: false,
                }} />
                <Stack.Screen name="Details" component={ChatScreen} options={{
                    tabBarIcon: () => (
                        <FontAwesome5 name="comment" size={25} color={"black"} />
                    ),
                    tabBarShowLabel: false,
                }} />
                <Stack.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarIcon: () => (
                        <FontAwesome5 name="user" size={25} color={"black"} />
                    ),
                    tabBarShowLabel: false,
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    // card: {
    //     borderRadius: 20,
    //     overflow: "hidden",
    //     borderColor: "#000",
    //     borderWidth: 0
    // }
    //     container: {
    //         flex: 1,
    //         backgroundColor: '#fff',
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //     },
    //       nav: {
    //         backgroundColor: "#000000",
    //         flex: 1,
    //         width: 'calc(100%-10px)',
    //         height: '200px'
    //        },
});
