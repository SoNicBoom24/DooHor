import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';
import Toggle from "react-native-toggle-element";


export default function CardHor() {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{ uri: "https://picsum.photos/200" }} />
            <View style={{ position: "absolute", left: 150, top: 10, overflow: "hidden" }}>
                <Text style={{ fontSize: 25}}>หอ1</Text>
            </View>
            <View style={{ position: "absolute", right: 40, top: 15, overflow: "hidden" }}>
                <Text style={{ fontSize: 15 }}>4500$</Text>
            </View>
            <View style={{ position: "absolute", right: 40, bottom: 20, overflow: "hidden" }}>
                <Text style={{ fontSize: 15, color: "gray" }}>คำอธิบายเพิ่มเติม</Text>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: 'wrap',
        width: "90%",
        height: 130,
        backgroundColor: "white",
        borderRadius: 20,
        marginTop: 20,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 10
        }
    },
    img: {
        width: 130,
        height: 130,
        borderRadius: 20,
        flexWrap: 'wrap',
        resizeMode: "cover",
        overflow: "hidden",
        zIndex: 2
    }
});