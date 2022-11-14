import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, Button, Image, Dimensions, Switch, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import ModalDropdown from 'react-native-modal-dropdown';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { firebase } from "../Database/firebaseDB";


// const options = {
//     title: 'Select Image',
//     type: 'library',
//     options: {
//         selectionLimit: 1,
//         mediaType: 'photo',
//         includeBase64: false,
//     },
// }

export default function Register() {
    const navigation = useNavigation();

    const allSex = ['ชาย', 'หญิง'];
    const allYear = ['1', '2', '3', '4'];
    const allFaculty = ['IT', 'วิศวะ', 'ครุ', 'วิทย์'];

    // const openGallery = async () => {
    //     const images = await launchImageLibrary(options);
    //     console.log(images)
    //     const formdata = new FormData()
    // }

    const todoRef = firebase.firestore().collection("DataRegister");
    const [addDataFirstName, setDataFirst] = useState("");
    const [addDataLastName, setDataLast] = useState("");
    const [addDataSex, setDataSex] = useState("");
    const [addDataAge, setDataAge] = useState("");
    const [addDataEmail, setDataEmail] = useState("");
    const [addDataStudentId, setDataStudentId] = useState("");
    const [addDataYear, setDataYear] = useState("");
    const [addDataFaculty, setDataFaculty] = useState("");
    const [addDataBit, setDataBit] = useState("");
    const [addDataHouseNo, setDataHouseNo] = useState("");
    const [addDataMoo, setDataMoo] = useState("");
    const [addDataVillage, setDataVillage] = useState("");
    const [addDataAlley_Lane, setDataAlley_Lane] = useState("");
    const [addDataSub_district, setDataSub_district] = useState("");
    const [addDataDistrict, setDataDistrict] = useState("");
    const [addDataProvince, setDataProvince] = useState("");
    const [addDataPostCode, setDataPostCode] = useState("");
    const [imageProflie, setimageProflie] = useState(null);


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })
        console.log(result)
        const source = { uri: result.uri };
        setimageProflie(source);

    };

    const uploadImage = async () => {
        const response = await fetch(imageProflie.uri)
        const blob = await response.blob();
        const filename = imageProflie.uri
        var ref = firebase.storage().ref().child(filename).put(blob);

        try {
            await ref;
        }
        catch (e) {
            console.log(e)
        }
        Alert.alert(
            'success'
        )
        setimageProflie(null)

    }




    const addField = () => {
        // if (addDataFirstName && addDataFirstName.length > 0) {
        const data = {
            firstName: addDataFirstName,
            lasstName: addDataLastName,
            sex: addDataSex,
            age: addDataAge,
            e_mail: addDataEmail,
            student_id: addDataStudentId,
            year: addDataYear,
            faculty: addDataFaculty,
            bit: addDataBit,
            houseNo: addDataHouseNo,
            moo: addDataMoo,
            village: addDataVillage,
            alley_lane: addDataAlley_Lane,
            subDistrict: addDataSub_district,
            district: addDataDistrict,
            province: addDataProvince,
            postCode: addDataPostCode
        };
        todoRef.add(data)
        navigation.navigate("ScreenNotification")
        // };
    }

    return (
        <SafeAreaView style={{ width: "100%", backgroundColor: "#FFDA79", height: "100%" }}>
            <KeyboardAwareScrollView extraHeight={100}>
                <>
                    <Image style={styles.img} source={{ uri: "https://picsum.photos/200" }} />
                </>
                <>
                    <View style={{ backgroundColor: "#FFB053", width: "90%", alignSelf: "center", padding: 10, borderRadius: 20 }}>
                        <TouchableOpacity>
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

                        <TouchableOpacity onPress={pickImage}>
                            <View style={{ padding: 5, flexDirection: "row" }}>
                                <Text style={{ fontSize: 18, padding: 5 }}>รูปถ่าย</Text>
                                <AntDesign name="upload" size={24} color="black" style={{ backgroundColor: "white", padding: 5, borderRadius: 10, marginLeft: 2, overflow: "hidden" }} />
                                {/* download มันต้องเป็นรูปไหนดีวะ */}
                            </View>
                        </TouchableOpacity>

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
                            <ModalDropdown options={allSex}
                                defaultValue={"เพศ"}
                                textStyle={{ paddingLeft: 5, paddingBottom: 5, fontSize: 14, paddingTop: 3 }}
                                dropdownStyle={{ width: "10%", borderRadius: 10, backgroundColor: "white", height: 70, overflow: "hidden" }}
                                defaultTextStyle={{ color: "#Bbbbbd" }}
                                style={{ backgroundColor: "white", borderRadius: 10, width: "15%", justifyContent: "center", paddingLeft: 5 }}
                                onSelect={(sex) => setDataSex(allSex[sex])}
                                value={addDataSex}
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

                            <ModalDropdown options={allYear}
                                defaultValue={"ชั้นปีการศึกษา"}
                                textStyle={{ paddingLeft: 5, paddingBottom: 5, fontSize: 14, paddingTop: 3 }}
                                dropdownStyle={{ width: "40%", borderRadius: 10, backgroundColor: "white", height: 140, overflow: "hidden" }}
                                defaultTextStyle={{ color: "#Bbbbbd" }}
                                style={{ backgroundColor: "white", borderRadius: 10, width: "48%", justifyContent: "center" }}
                                onSelect={(year) => setDataYear(allYear[year])}
                                value={addDataYear}
                            />
                        </View>

                        <View style={{ padding: 5, flexDirection: "row", justifyContent: "space-between" }}>
                            <ModalDropdown options={allFaculty}
                                defaultValue={"คณะ"}
                                textStyle={{ paddingLeft: 5, paddingBottom: 5 }}
                                dropdownStyle={{ width: "40%", borderRadius: 20, backgroundColor: "white" }}
                                defaultTextStyle={{ color: "#Bbbbbd" }}
                                style={{ backgroundColor: "white", borderRadius: 10, width: "48%", justifyContent: "center" }}
                                onSelect={(faculty) => setDataFaculty(allFaculty[faculty])}
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
                            <TextInput
                                style={{ backgroundColor: "white", padding: 5, borderRadius: 10, width: "30%", }}
                                placeholder="บ้านเลขที่"
                                onChangeText={(houseNo) => setDataHouseNo(houseNo)}
                                value={addDataHouseNo} />

                            <TextInput
                                style={{ backgroundColor: "white", padding: 5, borderRadius: 10, width: "20%", }}
                                placeholder="หมู่"
                                onChangeText={(moo) => setDataMoo(moo)}
                                value={addDataMoo} />

                            <TextInput
                                style={{ backgroundColor: "white", padding: 5, borderRadius: 10, width: "45%", }}
                                placeholder="หมู่บ้าน"
                                onChangeText={(village) => setDataVillage(village)}
                                value={addDataVillage} />
                        </View>

                        <View style={{ padding: 5, flexDirection: "row", justifyContent: "space-between" }}>
                            <TextInput
                                style={styles.inputContainer}
                                placeholder="ตรอก/ซอย"
                                onChangeText={(alley_lane) => setDataAlley_Lane(alley_lane)}
                                value={addDataAlley_Lane} />

                            <TextInput
                                style={styles.inputContainer}
                                placeholder="ตำบล/แขวง"
                                onChangeText={(subDistrict) => setDataSub_district(subDistrict)}
                                value={addDataSub_district} />
                        </View>

                        <View style={{ padding: 5, flexDirection: "row", justifyContent: "space-between" }}>
                            <TextInput
                                style={styles.inputContainer}
                                placeholder="อำเภอ/เขต"
                                onChangeText={(district) => setDataDistrict(district)}
                                value={addDataDistrict} />

                            <TextInput
                                style={styles.inputContainer}
                                placeholder="จังหวัด"
                                onChangeText={(province) => setDataProvince(province)}
                                value={addDataProvince} />
                        </View>

                        <View style={{ padding: 5, flexDirection: "row", justifyContent: "space-between" }}>
                            <TextInput style={styles.inputContainer}
                                placeholder="รหัสไปรษณีย์"
                                keyboardType='numeric'
                                maxLength={5}
                                onChangeText={(postCode) => setDataPostCode(postCode)}
                                value={addDataPostCode} />
                        </View>
                        <TouchableOpacity onPress={addField} >
                            <View style={{ backgroundColor: "#77CF32", padding: 5, borderRadius: 10, width: "40%", alignSelf: "center", marginVertical: 10 }}>
                                <Text style={{ color: "white", alignSelf: "center", fontSize: 16 }}>
                                    ยืนยัน
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={uploadImage} >
                            <View style={{ backgroundColor: "#77CF32", padding: 5, borderRadius: 10, width: "40%", alignSelf: "center", marginVertical: 10 }}>
                                <Text style={{ color: "white", alignSelf: "center", fontSize: 16 }}>
                                    เทส
                                </Text>
                            </View>
                        </TouchableOpacity>

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