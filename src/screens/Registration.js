import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, Switch, SafeAreaView, ScrollView, TextInput } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import ModalDropdown from 'react-native-modal-dropdown';

export default function register() {
    return (
        <SafeAreaView style={{ width: "100%"}}>
            {/* <> */}
                <KeyboardAwareScrollView extraHeight={100}>
                    <>
                        <Image style={styles.img} source={{ uri: "https://picsum.photos/200" }} />
                    </>
                    <>
                        <View style={{ backgroundColor: "#FFB053", width: "90%", alignSelf: "center", padding: 10, borderRadius: 20 }}>
                            <View style={{ padding: 5 }}>
                                <Text style={{ fontSize: 18, padding: 5 }}>สำเนาบัตรประจำตัวประชาชน</Text>
                            </View>
                            <View style={{ padding: 5 }}>
                                <Text style={{ fontSize: 18, padding: 5 }}>สำเนาทะเบียนบ้าน</Text>
                            </View>
                            <View style={{ padding: 5 }}>
                                <Text style={{ fontSize: 18, padding: 5 }}>รูปถ่าย</Text>
                            </View>
                            <View style={{ padding: 5, flexDirection: "row", justifyContent: "space-between" }}>
                                <TextInput style={styles.inputContainer} placeholder="ชื่อ"></TextInput>
                                <TextInput style={styles.inputContainer} placeholder="นามสกุล"></TextInput>
                            </View>
                            <View style={{ padding: 5, flexDirection: "row", justifyContent: "space-between" }}>
                                <TextInput style={{ width: "30%", backgroundColor: "white", padding: 5, borderRadius: 10, marginRight: 10 }}
                                    keyboardType='numeric'
                                    placeholder="อายุ"></TextInput>
                                <TextInput style={{ width: "65%", backgroundColor: "white", padding: 5, borderRadius: 10 }}
                                    keyboardType="email-address"
                                    placeholder="E-mail"></TextInput>
                            </View>
                            <View style={{ padding: 5, flexDirection: "row", justifyContent: "space-between" }}>
                                <TextInput style={styles.inputContainer}
                                    keyboardType="numeric"
                                    maxLength={1000}
                                    placeholder="รหัสนักศึกษา"></TextInput>
                                {/* https://www.npmjs.com/package/react-native-select-dropdown */}
                                <ModalDropdown options={['1', '2', '3', '4']}
                                    defaultValue={"ชั้นปีการศึกษา"}
                                    textStyle={{ color: "gray", paddingLeft: 5, paddingBottom: 5 }}
                                    dropdownStyle={{ width: "40%", borderRadius: 20, backgroundColor: "white" }}
                                    style={{ backgroundColor: "white", borderRadius: 10, width: "48%", justifyContent: "center" }} />
                                {/* <TextInput style={styles.inputContainer}
                        keyboardType="numeric"
                        placeholder="ชั้นปีการศึกษา"></TextInput> */}
                            </View>
                            <View style={{ padding: 5, flexDirection: "row", justifyContent: "space-between" }}>
                                {/* <TextInput style={styles.inputContainer} placeholder="คณะ"></TextInput> */}
                                <ModalDropdown options={['IT', 'วิศวะ', 'ครุ', 'วิทย์']}
                                    defaultValue={"คณะ"}
                                    textStyle={{ color: "gray", paddingLeft: 5, paddingBottom: 5 }}
                                    dropdownStyle={{ width: "40%", borderRadius: 20, backgroundColor: "white" }}
                                    style={{ backgroundColor: "white", borderRadius: 10, width: "48%", justifyContent: "center" }} />
                                <TextInput style={styles.inputContainer} placeholder="สาขา"></TextInput>
                            </View>
                            <Text style={{ fontSize: 18, padding: 5 }}>ที่อยู่ปัจจุบัน</Text>
                            <View style={{ padding: 5, flexDirection: "row", justifyContent: "space-between" }}>
                                <TextInput style={styles.inputContainer}
                                    placeholder="บ้านเลขที่"></TextInput>
                                <TextInput style={styles.inputContainer}
                                    placeholder="หมู่บ้าน"></TextInput>
                            </View>
                            <View style={{ padding: 5, flexDirection: "row", justifyContent: "space-between" }}>
                                <TextInput style={styles.inputContainer}
                                    placeholder="ตรอก/ซอย"></TextInput>
                                <TextInput style={styles.inputContainer}
                                    placeholder="ตำบล/แขวง"></TextInput>
                            </View>
                            <View style={{ padding: 5, flexDirection: "row", justifyContent: "space-between" }}>
                                <TextInput style={styles.inputContainer} placeholder="อำเภอ/เขต"></TextInput>
                                <TextInput style={styles.inputContainer} placeholder="จังหวัด"></TextInput>
                            </View>
                            <View style={{ padding: 5, flexDirection: "row", justifyContent: "space-between" }}>
                                <TextInput style={styles.inputContainer}
                                    placeholder="รหัสไปรษณีย์"
                                    keyboardType='numeric'
                                    maxLength={1000}></TextInput>
                            </View>
                        </View>
                    </>
                </KeyboardAwareScrollView>
            {/* </> */}
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    img: {
        width: "90%",
        height: 200,
        borderRadius: 20,
        flexWrap: 'wrap',
        resizeMode: "cover",
        overflow: "hidden",
        zIndex: 2,
        alignSelf: "center",
        marginVertical: 25,
    },
    inputContainer: {
        backgroundColor: "white",
        padding: 5,
        borderRadius: 10,
        width: "48%",

    },
});