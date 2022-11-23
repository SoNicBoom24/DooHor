import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, Switch, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import firebase from '../Database/firebaseDB'
import { useRoute } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function (props) {
    const route = useRoute();
    return <GeneralTopic {...props} route={route} />;
}
class GeneralTopic extends Component {
    constructor() {
        super();
        this.uid = firebase.auth().currentUser.uid

        this.subjCollection = firebase.firestore().collection("Users").where("uid", "==", this.uid);
        this.state = {
            subject_list: [],
            role: ""
        };
    }
    getCollection = (querySnapshot) => {
        let checkrole = "";
        querySnapshot.forEach((res) => {
            const { Role } = res.data();
            checkrole = Role
            this.setState({ role: checkrole })
        }
        );

        const { route } = this.props;
        const all_data = [];
        firebase.firestore()
            .collection('declaration')
            .where('id', '==', route.params.id)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach((res) => {
                    const { desc, image, title, type, state, all_desc } = res.data();
                    all_data.push({ desc: desc, image: image, title: title, type: type, state: state, all_desc: all_desc, id: res.id });
                });
                this.setState({ subject_list: all_data, });

            });
    };
    componentDidMount() {
        this.unsubscribe =
            this.subjCollection.onSnapshot(this.getCollection);
        // alert(this.props.id)
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    delete(id) {
        firestore()
            .collection('declaration')
            .doc(id)
            .delete()
            .then(() => {
                alert("ลบ ประกาศนี้แล้ว")
            });
    }
    render() {

        return (

            < ScrollView style={styles.container} >
                <Text>{this.props.id}</Text>
                {this.state.subject_list.map((item, i) => (
                    <View key={i}>

                        <View>
                            <Image style={styles.img} source={{ uri: item.image }} />
                            <SafeAreaView style={styles.description}>
                                <Text style={{ padding: 10 }}>
                                    {item.title}
                                </Text>
                                <Text style={{ padding: 10 }}>
                                    {item.all_desc}
                                </Text>
                            </SafeAreaView>
                            <FontAwesome name="trash" size={24} color="black" style={{ bottom: 0, alignSelf: "center", display: this.state.role == "admin" ? "flex" : "none" }} onPress={() => this.delete(item.id)} ess />
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