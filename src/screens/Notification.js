import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, Switch, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';

import { NavigationContainer, useNavigation } from "@react-navigation/native";

export default function Notification() {
    const navigation = useNavigation();

    const ScreenSendOffice_Documents = () => {
        navigation.navigate("ScreenSendOffice_Documents")
    }
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.noti}>แบบฟอร์มสำหรับ ประกาศหน้าแจ้งข่าว</Text>
                <View style={{ backgroundColor: "white", width: "90%", alignSelf: "center", borderRadius: 20, paddingBottom: 30, marginBottom: 15 }}>
                    <TouchableOpacity style={styles.cardNoti}>
                        <Text style={styles.text}>ประกาศรับสมัครนักศึกษา เข้าหอพัก </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardNoti}>
                        <Text style={styles.text}>ประกาศ สำรหับนักศึกษาที่ เป็นสมาชิกเลือกห้องพัก</Text>
                    </TouchableOpacity>

                </View>

                <Text style={styles.noti}>ฟอร์มสำหรับ ส่งเอกสารให้กับนักศึกษา</Text>
                <View style={{ backgroundColor: "white", width: "90%", alignSelf: "center", borderRadius: 20, paddingBottom: 30, marginBottom: 15 }}>
                    <TouchableOpacity style={styles.cardNoti} onPress={ScreenSendOffice_Documents} >
                        <Text style={styles.text}>ฟอร์มสำหรับ ออกแบบการส่งเอกสาร ทั่วไป ใบเสร็จ และคำร้อง</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFDA79",
    },
    noti: {
        justifyContent: "center",
        alignSelf: "center",
        fontSize: 18,
        backgroundColor: "#FFB053",
        padding: 5,
        borderRadius: 10,
        overflow: "hidden",
        paddingHorizontal: 20,
        top: 20,
        zIndex: 2,
    },
    cardNoti: {
        backgroundColor: "#6EA57A",
        justifyContent: "center",
        alignSelf: "center",
        width: "85%",
        height: 65,
        top: 20,
        marginVertical: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 10
        }
    },
    text: {
        alignSelf: "center",
        color: "white",
        fontSize: 16
    }

});