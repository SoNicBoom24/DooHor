import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, Switch, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import firebase from '../Database/firebaseDB'
import { useRoute } from '@react-navigation/native';

export default class Announcement extends Component {
    constructor() {
        super();
        this.subjCollection = firebase.firestore().collection("declaration");
        this.state = {
            subject_list: [],
        };
    }
    getCollection = () => {
        const route = useRoute();
        console.log(route.params.id)
        const user = firebase.auth().currentUser
        if (user) {
            const all_data = [];
            firebase.firestore()
                .collection('declaration')
                .where('id', '==', route.params.id)
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach((res) => {
                        const { desc, image, title, type, state } = res.data();
                        all_data.push({ desc: desc, image: image, title: title, type: type, state: state, id: res.id });
                    });
                    this.setState({ subject_list: all_data, });

                });


        }
        else {

        }
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
                {this.state.subject_list.map((item, i) => (
                    <View key={i}>

                        <View>
                            <Image style={styles.img} source={{ uri: item.image }} />
                            <TouchableOpacity>
                                <SafeAreaView style={styles.description}>
                                    <Text style={{ padding: 10 }}>
                                        {item.title}
                                    </Text>
                                    <Text style={{ padding: 10 }}>
                                        {item.desc}
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

