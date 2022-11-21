import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, TouchableOpacity } from 'react-native';
import firebase from '../Database/firebaseDB'
import { useNavigation } from '@react-navigation/native';

export default function (props) {
    const navigation = useNavigation();
    return <CardHor {...props} navigation={navigation} />;
}

class CardHor extends Component {
    constructor() {
        super();
        this.subjCollection = firebase.firestore().collection("Room")
        this.state = {
            subject_list: [],
        }
    }
    getCollection = () => {

        const user = firebase.auth().currentUser
        if (true) {
            const all_data = [];
            firebase.firestore()
                .collection('Hor')
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach((res) => {
                        const { building, price, type, sex, desc } = res.data();
                        all_data.push({ building: building, price: price, type: type, desc: desc, sex: sex });
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

    choose(id) {
        const db = firebase.firestore();
        db.collection("Check").doc('uir0tIOJ7Uu4ZNLDQHGW').update({
            building: id
        })
        const { navigation } = this.props;
        navigation.navigate('Sceeenselect')
    }
    render() {
        return (
            <View>
                {this.state.subject_list.map((item, i) => (
                    <View key={i}>

                        <TouchableOpacity style={styles.container} onPress={() => this.choose(item.building)}>
                            <Image style={styles.img} source={{ uri: "https://picsum.photos/200" }} />
                            <View style={{ position: "absolute", left: 150, top: 10, overflow: "hidden" }}>
                                <Text style={{ fontSize: 25 }}>หอ : ตึก {item.building}</Text>
                            </View>
                            <View style={{ position: "absolute", right: 40, top: 15, overflow: "hidden" }}>
                                <Text style={{ fontSize: 15 }}>ช่วงราคา {item.price} เพศ : {item.sex} ประเภท : {item.type}</Text>
                            </View>
                            <View style={{ position: "absolute", right: 40, bottom: 20, overflow: "hidden" }}>
                                <Text style={{ fontSize: 15, color: "gray" }}>{item.desc}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))
                }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: 'wrap',
        width: "90%",
        height: 130,
        backgroundColor: "white",
        borderRadius: 20,
        marginTop: 20,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 10
        }
    },
    img: {
        width: 130,
        height: 130,
        borderRadius: 20,
        flexWrap: 'wrap',
        resizeMode: "cover",
        overflow: "hidden",
        zIndex: 2
    }
});