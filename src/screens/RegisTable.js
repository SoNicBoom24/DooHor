import { Text, TextInput, View, StyleSheet, Button, Alert, TouchableOpacity, SafeAreaView } from 'react-native';
import DataTable, { COL_TYPES } from 'react-native-datatable-component';
import ModalDropdown from 'react-native-modal-dropdown';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import React, { useState, useEffect } from "react";
import firebase from '../Database/firebaseDB'
export default function SendOffice_Documents() {
    const [text, onChangeText] = React.useState("");
    const [userdata, setuserdata] = React.useState([]);
    const [userschoose, setUsersChoose] = React.useState([]);
    //////////////////////////////////////////
    const [check, setCheck] = React.useState(true);

    const alltype = ['Bill', 'General', 'Petition'];
    const all_data = []
    const user = firebase.auth().currentUser
    if (true) {
        firebase.firestore()
            .collection('DataRegister')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach((res) => {
                    const { firstName, lasstName, student_id, e_mail, age, alley_lane, bit, faculty, houseNo, imgHouse, imgIdCard, imgSelfie, moo, postCode, province, sex, district, subDistrict, village, year, Reason, score } = res.data();
                    all_data.push({ stundet_name: firstName + " " + lasstName, Stundet_id: student_id, e_mail: e_mail, age: age, sex: sex, Reason: Reason, imgHouse: imgHouse, imgIdCard: imgIdCard, imgSelfie: imgSelfie, address: houseNo + " " + moo + " " + village + " " + alley_lane + " " + subDistrict + " " + district + " " + province + " " + postCode, education: faculty + " " + bit + " " + year, uid: res.id, score: score });
                });
                setuserdata(all_data);

            });
    }
    else {
    }
    // let data_table = userdata
    // if (text[0] in [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) {
    //     data_table = userdata.filter(x => String(x.Stundet_id).includes(text));
    // }
    // else {
    //     data_table = userdata.filter(x => String(x.stundet_name).includes(text));

    // }
    const Settings =
        [
            { name: 'stundet_name', type: COL_TYPES.STRING, },
            { name: 'Stundet_id', type: COL_TYPES.STRING, },
            { name: 'score', type: COL_TYPES.STRING, },
            { name: 'choose', type: COL_TYPES.Button, },
        ]
    const nameOfCols = ['stundet_name', 'Stundet_id', "score", "choose"];

    return (
        <View style={{ top: "5%" }}>

            <View style={{ display: check ? 'flex' : 'none', width: "100%" }} >
                <Text style={{ alignSelf: 'center', fontSize: 20 }}>ตารางนักศึกษา</Text>
                <Text style={{ alignSelf: 'center', fontSize: 20 }}>สำหรับ ให้คะแนนการสมัครเข้าเป็นสมาชิกหอพักของนักศึกษา</Text>

                <TextInput placeholder="ชื่อหรือรหัสนักศึกษา" style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                <DataTable

                    colSettings={Settings}
                    noOfPages="1"
                    data={userdata}
                    onclick
                    colNames={nameOfCols}
                    headerLabelStyle={{ color: 'grey', fontSize: 20 }}
                    onRowSelect={(row) => {
                        setCheck(false)
                        setUsersChoose(row)
                    }}
                />

            </View>
            <SafeAreaView style={{ width: "90%", backgroundColor: "#FFDA79", borderRadius: 10, alignSelf: 'center', display: check ? 'none' : 'flex' }}>
                <View style={{ padding: 20 }}>
                    <Text>{userschoose.stundet_name}</Text>
                </View>
                <View style={{ padding: 20 }}>
                    <Text style={{ padding: 20, fontSize: 18 }}> ข้อมูล รายละเอียดนักศึกษา</Text>
                </View>
                <View></View>
            </SafeAreaView>


        </View >

    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 15,
        borderWidth: 1,
        padding: 10,
        width: "20%",
    },
});
