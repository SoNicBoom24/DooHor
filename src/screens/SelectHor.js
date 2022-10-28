import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, Switch } from 'react-native';

import { ToggleButton } from 'react-native-paper';

import CardHor from "../components/CardHor";

export default function selestHor() {
    // const [status, setStatus] = React.useState('checked');
    // const onButtonToggle = value => {
    //     setStatus(status === 'checked' ? 'unchecked' : 'checked');
    //   };
    return (
        <View style={styles.container}>
            {/* <ToggleButton
      icon="bluetooth"
      value="bluetooth"
      status={status}
      onPress={onButtonToggle}
      size={50}
      color={"white"}
    ></ToggleButton> */}
            <View style={styles.slide}>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: 'wrap',
        width: "90%",
        height: 50,
        backgroundColor: "#FFA927",
        borderRadius: 20,
        marginTop: 10,
    },
    slide: {
        width: "45%",
        height: "80%",
        backgroundColor: "white",
        borderRadius: 20,
        alignSelf: "center",
        flexWrap: 'wrap',
        alignItems: "center",
        marginTop: 10,
        marginLeft: "2.5%",
        position: "absolute",
    }
});