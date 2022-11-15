import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, Switch, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
import firebase from '../Database/firebaseDB'

import { NavigationContainer, useNavigation } from "@react-navigation/native";

export default function RootFunction() {
    const navigation = useNavigation() // extract navigation prop here 

    return <Notification navigation={navigation} /> //pass to your component.

}



class Notification extends Component {

    constructor() {
        super();
        this.subjCollection = firebase.firestore().collection("declaration");
        this.state = { subject_list: [], };
    }
    getCollection = (querySnapshot) => {
        const all_data = [];
        querySnapshot.forEach((res) => {
            const { image } = res.data();
            all_data.push({ image });
        });
        this.setState({ subject_list: all_data, });
    };

    componentDidMount() {
        this.unsubscribe =
            this.subjCollection.onSnapshot(this.getCollection);
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        return (
            < ScrollView style={styles.container} >
                <View>
                    <Text style={styles.noti}>ประกาศสำนักงานหอพักใน</Text>
                    <View style={{ backgroundColor: "white", width: "90%", alignSelf: "center", borderRadius: 20, paddingBottom: 30, marginBottom: 15 }}>
                        <TouchableOpacity style={styles.cardNoti} onPress={() => this.props.navigation.navigate('ScreenHor')}  >
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardNoti} onPress={() => this.props.navigation.navigate('ScreenRegister')}>
                            <Text style={styles.text}>ประกาศ สำรหับนักศึกษาที่ เป็นสมาชิกเลือกห้องพัก</Text>
                        </TouchableOpacity>

                    </View>

                    <Text style={styles.noti}>ประกาศสำนักงาน IT</Text>
                    <View style={{ backgroundColor: "white", width: "90%", alignSelf: "center", borderRadius: 20, paddingBottom: 30, marginBottom: 15 }}>
                        <TouchableOpacity style={styles.cardNoti} onPress={() => { console.log('IT work'); }} >
                            <Text style={styles.text}>ประกาศ ตึกถล่ม</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardNoti}>
                            <Text style={styles.text}>ประกาศ น้ำท่วม</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardNoti}>
                            <Text style={styles.text}>ประกาศ หนาว</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView >
        )
    }
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