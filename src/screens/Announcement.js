import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, Switch, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import firebase from '../Database/firebaseDB'
import { useNavigation } from '@react-navigation/native';


export default class Announcement extends Component {
    constructor() {
        this.navigation = useNavigation();
        super();
        this.subjCollection = firebase.firestore().collection("declaration");
        this.state = {
            subject_list: [],
        };
    }
    getCollection = () => {


        const all_data = [];
        // firebase.firestore()
        //     .collection('declaration')
        //     .where('state', '==', "open")
        //     .get()
        //     .then(querySnapshot => {
        //         querySnapshot.forEach((res) => {
        //             const { desc, image, title, type, state } = res.data();
        //             all_data.push({ desc: desc, image: image, title: title, type: type, state: state, id: res.id });
        //         });
        //         this.setState({ subject_list: all_data, });
            // });
            


    };
    componentDidMount() {
        this.unsubscribe =
            this.subjCollection.onSnapshot(this.getCollection);
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    ScreenRegister() {
        // const navigation = useNavigation();
        // navigation.navigate('ScreenRegister')
    };
    GeneralTopic(id) {
        this.navigation.navigate('ScreenRegister')
        console.log(id)
    };
    ScreenHor() {
        // const navigation = useNavigation();
        // navigation.navigate('ScreenHor')
    };
    render() {
        return (

            // <View>
            //     <Text>BANK</Text>
            // </View>

            < ScrollView style={styles.container} >
                {this.state.subject_list.map((item, i) => (
                    <View key={i}>
                        <View style={{ display: item.type == 'Register' ? 'flex' : 'none' }}>
                            <Image style={styles.img} source={{ uri: item.image }} />
                            <TouchableOpacity onPress={() => this.ScreenRegister()}>
                                <SafeAreaView style={styles.description}>
                                    <Text style={{ padding: 10 }}>
                                        {item.title} : {item.desc}   ...กดเพื่อดูรายละเอียดเพิ่มเติม
                                    </Text>
                                </SafeAreaView>
                            </TouchableOpacity>
                        </View>
                        <View style={{ display: item.type == 'Room' ? 'flex' : 'none' }}>
                            <Image style={styles.img} source={{ uri: item.image }} />
                            <TouchableOpacity onPress={() => this.ScreenHor()}>
                                <SafeAreaView style={styles.description}>
                                    <Text style={{ padding: 10 }}>
                                        {item.title} : {item.desc}   ...กดเพื่อดูรายละเอียดเพิ่มเติม
                                    </Text>
                                </SafeAreaView>
                            </TouchableOpacity>
                        </View>

                        <View style={{ display: item.type == 'General' ? 'flex' : 'none' }}>
                            <Image style={styles.img} source={{ uri: item.image }} />
                            <TouchableOpacity onPress={() => this.GeneralTopic(item.id)} >
                            
                                <SafeAreaView style={styles.description}>
                                    <Text style={{ padding: 10 }}>
                                        {item.title} : {item.desc}   ...กดเพื่อดูรายละเอียดเพิ่มเติม
                                    </Text>
                                </SafeAreaView>
                            </TouchableOpacity>
                        </View>
                    </View>


                ))}

            </ScrollView>


        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFDA79",
    },
    img: {
        width: "80%",
        height: 150,
        resizeMode: "cover",
        borderRadius: 10,
        alignSelf: "center",
    },
    description: {
        backgroundColor: "white",
        borderRadius: 20,
        width: "80%",
        height: "100%",
        alignSelf: "center",
        marginTop: 10,
        flex: 1,
        marginBottom: 30,
        borderRadius: 15,
        elevation: 15,
        padding: 10,
    }

});

