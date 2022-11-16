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
                        <TouchableOpacity style={styles.cardNoti} onPress={() => this.props.navigation.navigate('ScreenAnnoucement')}  >
                            <Image style={styles.imgNoti} 
                                source={{uri: "https://i.pinimg.com/originals/94/32/cd/9432cdd515ab3d772334e471e230c211.jpg"}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardNoti} onPress={() => this.props.navigation.navigate('ScreenRegister')}>
                            <Image style={styles.imgNoti} 
                                source={{uri: "https://i.pinimg.com/originals/7d/98/84/7d98840fdff1b2e7cd508cc7f3a17403.jpg"}} />
                        </TouchableOpacity>

                    </View>

                    <Text style={styles.noti}>ประกาศสำนักงาน IT</Text>
                    <View style={{ backgroundColor: "white", width: "90%", alignSelf: "center", borderRadius: 20, paddingBottom: 30, marginBottom: 15 }}>
                        <TouchableOpacity style={styles.cardNoti} onPress={() => { console.log('IT work'); }} >
                            <Image style={styles.imgNoti} 
                                source={{uri: "https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg"}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardNoti}>
                        <Image style={styles.imgNoti} 
                                source={{uri: "https://i.pinimg.com/originals/ec/11/6d/ec116dc201666899c1830dbb92ddd67d.jpg"}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardNoti}>
                        <Image style={styles.imgNoti} 
                                source={{uri: "https://i.pinimg.com/originals/94/32/cd/9432cdd515ab3d772334e471e230c211.jpg"}} />
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
        backgroundColor: "#fff",
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
    },
    imgNoti:{
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        borderRadius: 10,
        // opacity: 0.7
    }

});