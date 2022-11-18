import { Text, TextInput, View, StyleSheet, Button, Alert, SafeAreaView, TouchableOpacity } from 'react-native';
import DataTable, { COL_TYPES } from 'react-native-datatable-component';
import React, { useState } from "react";
import firebase from '../Database/firebaseDB'
import ModalDropdown from 'react-native-modal-dropdown';


export const ScoreTable = () => {
    const [text, onChangeText] = useState("");
    const [userdata, setuserdata] = useState([]);
    const [adddetail_score, setaddDetail_score] = useState('');
    const [score_begin, setscore_begin] = useState(0);
    const [Score_input, setScore_input] = useState(0);
    const [name, setName] = useState("");
    const [uid_edit, setUid_edit] = useState("");
    const [selecttype, setSelecttype] = useState("เพิ่มคะแนน");
    const all_data = [];

    const alltype = ['เพิ่มคะแนน', 'ลดคะแนน'];

    const user = firebase.auth().currentUser
    if (user) {
        firebase.firestore()
            .collection('Users')
            .where('Role', '==', 'user')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach((res) => {
                    const { first_name, last_name, score, student_id, score_details, } = res.data();
                    all_data.push({ stundet_name: first_name + " " + last_name, Stundet_id: student_id, score: score, score_details: score_details, uid: res.id });
                });
                setuserdata(all_data);
            });
    }
    else {
    }
    // let data = userdata;
    // if (text[0] in [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) {
    //     data = userdata.filter(x => String(x.Stundet_id).includes(text));
    // }
    // else {
    //     data = userdata.filter(x => String(x.stundet_name).includes(text));

    // }
    const Detail = (row) => {
        Alert.alert(
            "รายละเอียดการให้คะแนน",
            `${JSON.parse(JSON.stringify((row.score_details)))}`,
            [
                {
                    text: 'เลือก',
                    onPress: () => {
                        setUid_edit(row.uid)
                        setName(row.stundet_name)
                        setscore_begin(row.score)
                    }
                },
                {
                    text: 'กลับ'
                }
            ],

        )
    }
    const add = async () => {
        const db = firebase.firestore();
        const value1 = parseInt(score_begin);
        const value2 = parseInt(Score_input)
        if (selecttype == "เพิ่มคะแนน") {
            db.collection("Users").doc(uid_edit).update({
                score: value1 + value2,
                score_details: firebase.firestore.FieldValue.arrayUnion(adddetail_score + ` (+${value2} คะแนน)`)
            })
        }
        else {
            db.collection("Users").doc(uid_edit).update({
                score: value1 - value2,
                score_details: firebase.firestore.FieldValue.arrayUnion(adddetail_score + ` (-${value2} คะแนน)`)
            })
        }
        setUid_edit('');
        setName('');
        setScore_input(0)
        setaddDetail_score('')
        setSelecttype('เพิ่มคะแนน')
    }
    const back = () => {
        setUid_edit('')
        setName('')
    }
    const Settings =
        [
            { name: 'stundet_name', type: COL_TYPES.STRING, },
            { name: 'Stundet_id', type: COL_TYPES.STRING, },
            { name: 'score', type: COL_TYPES.INT, },
            { name: 'Detail_Score', type: COL_TYPES.Button, },
        ]
    const nameOfCols = ['stundet_name', 'Stundet_id', "score", "Detail_Score"];
    return (
        <View style={{ top: "5%" }}>
            <Text style={{ alignSelf: 'center', fontSize: 20 }}>ตารางนักศึกษา </Text>
            <Text style={{ alignSelf: 'center', fontSize: 20 }}>เลือกนักศึกษาเพื่อให้คะแนน ความประพฤติของนักศึกษา </Text>

            <TextInput placeholder="ชื่อหรือรหัสนักศึกษา" style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            <View style={{ margin: 20, }}>
                <DataTable
                    colSettings={Settings}
                    noOfPages="1"
                    onRowSelect={(row) => {
                        Detail(row);
                    }}
                    data={userdata}
                    colNames={nameOfCols}
                    headerLabelStyle={{ color: 'grey', fontSize: 20 }}

                />
            </View>
            <SafeAreaView style={{ width: "90%", backgroundColor: "#FFDA79", borderRadius: 10, alignSelf: 'center' }}>
                <View style={{ padding: 20 }}>
                    <Text style={{ padding: 20, fontSize: 18, alignSelf: 'center' }}> กรอกข้อมูลสำหรับ การให้คะแนนนักศึกษา</Text>
                    <View>
                        <Text style={{ padding: 20, fontSize: 18, display: uid_edit == '' ? 'flex' : 'none', alignSelf: 'center' }}> โปรดเลือกนักศึกษา ที่ให้คะแนน</Text>
                        <Text style={{ padding: 20, fontSize: 18, display: uid_edit != '' ? 'flex' : 'none', alignSelf: 'center' }}> นักศึกษาที่เลือก : {name}</Text>

                        <TouchableOpacity style={{ display: uid_edit != '' ? 'flex' : 'none' }} onPress={back} >
                            <View style={{ backgroundColor: "red", padding: 5, borderRadius: 10, width: "10%", alignSelf: "center", marginVertical: 10 }}>
                                <Text style={{ color: "white", alignSelf: "center", fontSize: 16 }}>
                                    ยกเลิก
                                </Text>
                            </View>
                        </TouchableOpacity>


                    </View>
                    <TextInput
                        style={{ backgroundColor: "white", padding: 5, borderRadius: 10, width: "30%", alignSelf: 'center', marginTop: "2.5%" }}
                        placeholder="รายละเอียดการให้คะแนน"
                        onChangeText={(score_details) => setaddDetail_score(score_details)}
                        value={adddetail_score} />


                    <TextInput
                        style={{ backgroundColor: "white", padding: 5, borderRadius: 10, width: "20%", alignSelf: 'center', marginTop: "2.5%" }}
                        placeholder="คะแนนที่ให้"
                        onChangeText={(score) => setScore_input(score)}
                        value={Score_input} />

                    <ModalDropdown options={alltype}
                        defaultValue={"ประเภท ของการให้คะแนน"}
                        textStyle={{ paddingLeft: 5, paddingBottom: 5, fontSize: 14, paddingTop: 3 }}
                        dropdownStyle={{ width: "15%", borderRadius: 10, backgroundColor: "white", height: 70, overflow: "hidden" }}
                        defaultTextStyle={{ color: "#Bbbbbd" }}
                        style={{ backgroundColor: "white", borderRadius: 10, width: "18%", alignSelf: "center", marginTop: "2.5%" }}
                        onSelect={(type) => setSelecttype(alltype[type])}
                        value={selecttype}

                    />

                    <TouchableOpacity onPress={add} >
                        <View style={{ backgroundColor: "#77CF32", padding: 5, borderRadius: 10, width: "40%", alignSelf: "center", marginVertical: 10, marginTop: "2.5%" }}>
                            <Text style={{ color: "white", alignSelf: "center", fontSize: 16 }}>
                                ยืนยันการ เพิ่มข้อมูลคะแนนนักศึกษา
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
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
export default ScoreTable;

