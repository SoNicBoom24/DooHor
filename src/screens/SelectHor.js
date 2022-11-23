import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image, Dimensions, Switch, ScrollView } from "react-native";

import SwitchSelector from "react-native-switch-selector";

import CardHor from "../components/CardHor";
import CardHor2 from "../components/CardHor2";

const options = [
    { label: "เครื่องปรับอากาศ", value: "1" },
    { label: "พัดลม", value: "0" },
];

export default function SelectHor() {
    const [check, setCheck] = useState("1")
    const Checktype = async (value) => {
        setCheck(value)
    }
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#FFDA79" }}>
            <View style={{ alignItems: "center", paddingBottom: 30 }}>
                <SwitchSelector
                    options={options}
                    initial={0}
                    textColor={"black"}
                    selectedColor={"black"}
                    backgroundColor={"#FFA927"}
                    borderColor={"black"}
                    buttonColor={"white"}
                    style={{
                        width: "90%",
                        borderRadius: 20,
                        backgroundColor: "#FFA927",
                        padding: 5,
                        marginBottom: 5
                    }}
                    onPress={(value) => Checktype(value)}
                />
                {check == '1' ? (<CardHor />) : (<CardHor2 />)}
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
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
        flexWrap: "wrap",
        alignItems: "center",
        marginTop: 10,
        marginLeft: "2.5%",
        position: "absolute",
    },
});