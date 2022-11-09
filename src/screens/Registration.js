import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, Switch, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import ModalDropdown from 'react-native-modal-dropdown';
import { AntDesign } from '@expo/vector-icons';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


const options = {
    title: 'Select Image',
    type: 'library',
    options: {
        selectionLimit: 1,
        mediaType: 'photo',
        includeBase64: false,
    },
}
export default function register() {
    const countries = ["ชาย", "หญิง", "ไม่ระบุ"]
    
    const openGallery = async () => {
        const images = await launchImageLibrary(options);
        console.log(images)
        const formdata = new FormData()
        // formdata.append("file", )
    }

    return (
        <SafeAreaView style={{ width: "100%", backgroundColor: "#FFDA79", height: "100%" }}>
            <KeyboardAwareScrollView extraHeight={100}>
                <>
                    <Image style={styles.img} source={{ uri: "https://picsum.photos/200" }} />
                </>
                <>
                    <View style={{ backgroundColor: "#FFB053", width: "90%", alignSelf: "center", padding: 10, borderRadius: 20 }}>
                        <TouchableOpacity onPress={openGallery}>
                            <View style={{ padding: 5, flexDirection: "row" }}>
                                <Text style={{ fontSize: 18, padding: 5 }}>สำเนาบัตรประจำตัวประชาชน</Text>
                                <AntDesign name="upload" size={24} color="black" style={{ backgroundColor: "white", padding: 5, borderRadius: 10, marginLeft: 2, overflow: "hidden" }} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={{ padding: 5, flexDirection: "row" }}>
                                <Text style={{ fontSize: 18, padding: 5 }}>สำเนาทะเบียนบ้าน</Text>
                                <AntDesign name="upload" size={24} color="black" style={{ backgroundColor: "white", padding: 5, borderRadius: 10, marginLeft: 2, overflow: "hidden" }} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={{ padding: 5, flexDirection: "row" }}>
                                <Text style={{ fontSize: 18, padding: 5 }}>รูปถ่าย</Text>
                                <AntDesign name="upload" size={24} color="black" style={{ backgroundColor: "white", padding: 5, borderRadius: 10, marginLeft: 2, overflow: "hidden" }} />
                                {/* download มันต้องเป็นรูปไหนดีวะ */}
                            </View>
                        </TouchableOpacity>

                        <View style={{ padding: 5, flexDirection: "row", justifyContent: "space-between" }}>
                            <TextInput style={styles.inputContainer} placeholder="ชื่อ" />

                            <TextInput style={styles.inputContainer} placeholder="นามสกุล" />
                        </View>

                        <View style={{ padding: 5, flexDirection: "row", justifyContent: "space-between" }}>
                            <ModalDropdown options={['ชาย', 'หญิง', 'ไม่ระบุ']}
                                defaultValue={"เพศ"}
                                textStyle={{ paddingLeft: 5, paddingBottom: 5, fontSize: 14, paddingTop: 3 }}
                                dropdownStyle={{ width: "10%", borderRadius: 20, backgroundColor: "white", height: 100 }}
                                defaultTextStyle={{ color: "#Bbbbbd" }}
                                style={{ backgroundColor: "white", borderRadius: 10, width: "15%", justifyContent: "center" }} />

                            <TextInput style={{ width: "15%", backgroundColor: "white", padding: 5, borderRadius: 10, marginHorizontal: 5 }}
                                keyboardType='numeric'
                                maxLength={3}
                                placeholder="อายุ" />

                            <TextInput style={{ width: "65%", backgroundColor: "white", padding: 5, borderRadius: 10 }}
                                keyboardType="email-address"
                                placeholder="E-mail" />
                        </View>

                        <View style={{ padding: 5, flexDirection: "row", justifyContent: "space-between" }}>
                            <TextInput style={styles.inputContainer}
                                keyboardType="numeric"
                                maxLength={8}
                                placeholder="รหัสนักศึกษา" />

                            <ModalDropdown options={['1', '2', '3', '4']}
                                defaultValue={"ชั้นปีการศึกษา"}
                                textStyle={{ paddingLeft: 5, paddingBottom: 5, fontSize: 14, paddingTop: 3 }}
                                dropdownStyle={{ width: "40%", borderRadius: 20, backgroundColor: "white" }}
                                defaultTextStyle={{ color: "#Bbbbbd" }}
                                style={{ backgroundColor: "white", borderRadius: 10, width: "48%", justifyContent: "center" }} />
                        </View>

                        <View style={{ padding: 5, flexDirection: "row", justifyContent: "space-between" }}>
                            <ModalDropdown options={['IT', 'วิศวะ', 'ครุ', 'วิทย์']}
                                defaultValue={"คณะ"}
                                textStyle={{ paddingLeft: 5, paddingBottom: 5 }}
                                dropdownStyle={{ width: "40%", borderRadius: 20, backgroundColor: "white" }}
                                defaultTextStyle={{ color: "#Bbbbbd" }}
                                style={{ backgroundColor: "white", borderRadius: 10, width: "48%", justifyContent: "center" }} />

                            <TextInput style={styles.inputContainer} placeholder="สาขา" />
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
                    </View>
                </>
            </KeyboardAwareScrollView>
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