import { Text, TextInput, View, StyleSheet, Button, Alert, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import DataTable, { COL_TYPES } from 'react-native-datatable-component';
import ModalDropdown from 'react-native-modal-dropdown';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import React, { useState, useEffect } from "react";
import firebase from '../Database/firebaseDB'
export default function Create_Announcement() {
    const [selecttype, setSelecttype] = React.useState("Register");
    const [title_input, setTitle] = React.useState("");
    const [desc_input, setDesc] = React.useState("");
    const [image, setImage] = React.useState("");
    const [input_alldata, setInput_alldata] = React.useState("");
    /////////////////////////////
    const alltype = ['Room', 'Register', 'General'];
    const db = firebase.firestore();

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })
        const source = { uri: result.uri };
        setImage(source);
    };
    const add = async () => {
        const response = await fetch(image.uri)
        const blob = await response.blob();
        const filename = image.uri
        var ref1 = firebase.storage().ref().child(filename).put(blob);
        try {
            await ref1;

        }
        catch (e) {
            console.log(e)
        }
        Alert.alert(
            'success'
        )
        if (selecttype == 'Register') {
            db.collection("declaration").doc("Bfju2YmnuNB8gDcc7wmn").update({
                title: title_input,
                desc: desc_input,
                state: 'open',
                image: filename
            })
        }
        else {

        }


    }
    return (
        <ScrollView style={{ width: "100%", backgroundColor: "#FFDA79", borderRadius: 10, alignSelf: 'center', flex: 1 }}>

            <View style={{ padding: 20 }}>
                <ModalDropdown options={alltype}
                    defaultValue={"ประเภท ของประกาศ"}
                    textStyle={{ paddingLeft: 5, paddingBottom: 5, fontSize: 14, }}
                    dropdownStyle={{ width: "50%", borderRadius: 10, backgroundColor: "white", height: 70, overflow: "hidden" }}
                    defaultTextStyle={{ color: "#Bbbbbd" }}
                    style={{ backgroundColor: "white", borderRadius: 10, width: "50%", justifyContent: "center" }}
                    onSelect={(type) => setSelecttype(alltype[type])}
                    value={selecttype}
                />
            </View>
            <TouchableOpacity onPress={pickImage} style={{
                backgroundColor: "gray", borderRadius: 15,
                elevation: 15,
                padding: 10,
                width: "90%",
                height: "40%",
                alignSelf: 'center'

            }}>
                <View style={{ padding: 5, alignSelf: 'center', }} >
                    <AntDesign name="upload" size={24} color="black" style={{ backgroundColor: "white", padding: 5, borderRadius: 10, marginTop: '15%' }} />
                </View>
            </TouchableOpacity>
            <View style={{ padding: 20 }}>
                <TextInput
                    style={{ backgroundColor: "white", padding: 5, borderRadius: 10, width: "50%", }}
                    placeholder="หัวข้อ"
                    onChangeText={(title) => setTitle(title)}
                    value={title_input} />

                <TextInput
                    style={{ backgroundColor: "white", padding: 5, borderRadius: 10, width: "90%", marginTop: "5%" }}
                    placeholder="รายละเอียด"
                    onChangeText={(desc) => setDesc(desc)}
                    value={desc_input} />


                <TouchableOpacity onPress={add} >
                    <View style={{ backgroundColor: "#77CF32", padding: 5, borderRadius: 10, width: "40%", alignSelf: "center", marginVertical: 10, marginBottom: "15%" }}>
                        <Text style={{ color: "white", alignSelf: "center", fontSize: 16 }}>
                            ยืนยัน
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFDA79",
    },


});