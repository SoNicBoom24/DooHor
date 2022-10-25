
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';
import Toggle from "react-native-toggle-element";


export default function CardHor() {
    const [toggleValue, setToggleValue] = useState(false);
    return (
        <Toggle
            trackBarStyle={{false: "#FFA927", true: "white"}}
            thumbStyle={toggleValue ? "#FFA927" : "white"}
            value={toggleValue}
            onPress={(newState) => setToggleValue(newState)}
            leftTitle="เครื่องปรับอากาศ"
            rightTitle="พัดลม"
            thumbButton={{activeBackgroundColor: "white", color: "black",inActiveBackgroundColor: "#FFA927",}}
            containerStyle={{borderRadius: 0}}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: 'wrap',
        width: "90%",
        height: "130px",
        backgroundColor: "white",
        borderRadius: 20,
    },
});