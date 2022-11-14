import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, Switch, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { firebase } from "../config";

import ModalDropdown from 'react-native-modal-dropdown';
import { AntDesign } from '@expo/vector-icons';

const Home = () => {
    const todoRef = firebase.firestore().collection("newDataRegister");
    const [addDataFirstName, setDataFirst] = useState("");
    const [addDataLastName, setDataLast] = useState("");
    const [addDataSex, setDataSex] = useState("");
    const [addDataAge, setDataAge] = useState("");
    const [addDataEmail, setDataEmail] = useState("");
    const [addDataStudentId, setDataStudentId] = useState("");
    const [addDataYear, setDataYear] = useState("");
    const [addDataFaculty, setDataFaculty] = useState("");
    const [addDataBit, setDataBit] = useState("");

    const addField = () => {
        if (addDataFirstName && addDataFirstName.length > 0) {
            const data = {
                firstName: addDataFirstName,
                lasstName: addDataLastName,
                sex: addDataSex,
                age: addDataAge,
                e_mail: addDataEmail,
                student_id: addDataStudentId,
                year: addDataYear,
                faculty: addDataFaculty,
                bit: addDataBit
            };
            todoRef
                .add(data)
                .then(() => {
                    setDataFirst("");
                    setDataLast("");
                    setDataSex("");
                    setDataAge("");
                    setDataEmail("");
                    setDataStudentId("");
                    setDataYear("");
                    setDataFaculty("");
                    setDataBit("");
                    Keyboard.dismiss();
                })
                .catch((error) => {
                    alert(error);
                })
        };
    }

    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            {/* <View style={{ padding: 5, flexDirection: "row", justifyContent: "space-between" }}>
                <TextInput
                    style={styles.inputContainer}
                    placeholder="ชื่อ"
                    onChangeText={(firstName) => setDataFirst(firstName)}
                    value={addDataFirstName} />

                <TextInput
                    style={styles.inputContainer}
                    placeholder="นามสกุล"
                    onChangeText={(lastName) => setDataLast(lastName)}
                    value={addDataLastName} />

            </View>
                <TouchableOpacity onPress={addField}>
                    <View style={{ backgroundColor: "#77CF32", padding: 5, borderRadius: 10, width: "40%", alignSelf: "center", marginVertical: 10 }}>
                        <Text style={{ color: "white", alignSelf: "center", fontSize: 16 }}>
                            ยืนยัน
                        </Text>
                    </View>
                </TouchableOpacity> */}
            <View style={{ padding: 5, flexDirection: "row", justifyContent: "space-between" }}>
                            <TextInput 
                                style={styles.inputContainer} 
                                placeholder="ชื่อ"
                                onChangeText={(firstName) => setDataFirst(firstName)}
                                value={addDataFirstName}
                                />

                            <TextInput 
                                style={styles.inputContainer} 
                                placeholder="นามสกุล"
                                onChangeText={(lastName) => setDataLast(lastName)} 
                                value={addDataLastName} 
                                />
                        </View>

                        <View style={{ padding: 5, flexDirection: "row", justifyContent: "space-between" }}>
                            <ModalDropdown options={['ชาย', 'หญิง', 'ไม่ระบุ']}
                                defaultValue={"เพศ"}
                                textStyle={{ paddingLeft: 5, paddingBottom: 5, fontSize: 14, paddingTop: 3 }}
                                dropdownStyle={{ width: "10%", borderRadius: 20, backgroundColor: "white", height: 100 }}
                                defaultTextStyle={{ color: "#Bbbbbd" }}
                                style={{ backgroundColor: "white", borderRadius: 10, width: "15%", justifyContent: "center" }}
                                // onChangeText={(sex) => setDataLast(sex)} 
                                // value={addDataSex}
                                onSelect={(txt) => console.log(txt)}
                                />

                            <TextInput style={{ width: "15%", backgroundColor: "white", padding: 5, borderRadius: 10, marginHorizontal: 5 }}
                                keyboardType='numeric'
                                maxLength={3}
                                placeholder="อายุ"
                                onChangeText={(age) => setDataAge(age)} 
                                value={addDataAge} 
                                />

                            <TextInput style={{ width: "65%", backgroundColor: "white", padding: 5, borderRadius: 10 }}
                                keyboardType="email-address"
                                placeholder="E-mail"
                                onChangeText={(e_mail) => setDataEmail(e_mail)} 
                                value={addDataEmail} 
                                />
                        </View>

                        <View style={{ padding: 5, flexDirection: "row", justifyContent: "space-between" }}>
                            <TextInput style={styles.inputContainer}
                                keyboardType="numeric"
                                maxLength={8}
                                placeholder="รหัสนักศึกษา"
                                onChangeText={(student_id) => setDataStudentId(student_id)} 
                                value={addDataStudentId}
                                 />

                            <ModalDropdown options={['1', '2', '3', '4']}
                                defaultValue={"ชั้นปีการศึกษา"}
                                textStyle={{ paddingLeft: 5, paddingBottom: 5, fontSize: 14, paddingTop: 3 }}
                                dropdownStyle={{ width: "40%", borderRadius: 20, backgroundColor: "white" }}
                                defaultTextStyle={{ color: "#Bbbbbd" }}
                                style={{ backgroundColor: "white", borderRadius: 10, width: "48%", justifyContent: "center" }}
                                onChangeText={(year) => setDataYear(year)} 
                                value={addDataYear} 
                                />
                        </View>

                        <View style={{ padding: 5, flexDirection: "row", justifyContent: "space-between" }}>
                            <ModalDropdown options={['IT', 'วิศวะ', 'ครุ', 'วิทย์']}
                                defaultValue={"คณะ"}
                                textStyle={{ paddingLeft: 5, paddingBottom: 5 }}
                                dropdownStyle={{ width: "40%", borderRadius: 20, backgroundColor: "white" }}
                                defaultTextStyle={{ color: "#Bbbbbd" }}
                                style={{ backgroundColor: "white", borderRadius: 10, width: "48%", justifyContent: "center" }}
                                onChangeText={(faculty) => setDataFaculty(faculty)} 
                                value={addDataFaculty}
                                 />

                            <TextInput 
                                style={styles.inputContainer} 
                                placeholder="สาขา"
                                onChangeText={(bit) => setDataBit(bit)} 
                                value={addDataBit} 
                                />
                        </View>

                        <Text style={{ fontSize: 18, padding: 5 }}>ที่อยู่ปัจจุบัน</Text>

                        <View style={{ padding: 5, flexDirection: "row", justifyContent: "space-between" }}>
                            <TextInput style={styles.inputContainer} placeholder="บ้านเลขที่" />

                            <TextInput style={styles.inputContainer} placeholder="หมู่บ้าน" />
                        </View>

                        <View style={{ padding: 5, flexDirection: "row", justifyContent: "space-between" }}>
                            <TextInput style={styles.inputContainer} placeholder="ตรอก/ซอย" />

                            <TextInput style={styles.inputContainer} placeholder="ตำบล/แขวง" />
                        </View>

                        <View style={{ padding: 5, flexDirection: "row", justifyContent: "space-between" }}>
                            <TextInput style={styles.inputContainer} placeholder="อำเภอ/เขต" />

                            <TextInput style={styles.inputContainer} placeholder="จังหวัด" />
                        </View>

                        <View style={{ padding: 5, flexDirection: "row", justifyContent: "space-between" }}>
                            <TextInput style={styles.inputContainer}
                                placeholder="รหัสไปรษณีย์"
                                keyboardType='numeric'
                                maxLength={5} />
                        </View>
                        <TouchableOpacity onPress={addField} >
                            <View style={{backgroundColor: "#77CF32", padding: 5, borderRadius: 10, width: "40%", alignSelf: "center", marginVertical: 10}}>
                                <Text style={{color: "white", alignSelf: "center", fontSize: 16}}>
                                    ยืนยัน
                                </Text>
                            </View>
                        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: "white",
        padding: 5,
        borderRadius: 10,
        width: "48%",
    },
});

export default Home;