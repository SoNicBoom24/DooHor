import React, { useState, Component, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import firebase from '../Database/firebaseDB'
import { Card, Title, Paragraph } from 'react-native-paper';
import ModalDropdown from 'react-native-modal-dropdown';
import { useNavigation } from '@react-navigation/native';

export default function (props) {
    const navigation = useNavigation();
    return <Room {...props} navigation={navigation} />;
}

class Room extends Component {
    constructor() {
        super();
        this.subjCollection = firebase.firestore().collection("Room")
        this.state = {
            subject_list: [],
            selecttype: "ชั้นที่ 1",
            alltype: ['ชั้นที่ 1', 'ชั้นที่ 2', 'ชั้นที่ 3', 'ชั้นที่ 4'],
        }
    }
    getCollection = () => {

        const user = firebase.auth().currentUser
        if (true) {
            const all_data = [];
            firebase.firestore()
                .collection('Room')
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach((res) => {
                        const { RoomName, student, floor, pos } = res.data();
                        all_data.push({ RoomName: RoomName, student: student.length, floor: floor, pos: pos });
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

    GotoRoom(name) {
        const { navigation } = this.props;
        navigation.navigate('ScreenDetailroom',
            {
                Roomname: name
            })
    };
    render() {
        return (
            <View>
                <View style={{ marginTop: "5%" }} >
                    <ModalDropdown options={this.state.alltype}
                        defaultValue={"เลือกชั้น"}
                        textStyle={{ paddingLeft: 5, paddingBottom: 5, fontSize: 14, paddingTop: 3 }}
                        dropdownStyle={{ width: "10%", borderRadius: 10, backgroundColor: "white", height: 70, overflow: "hidden" }}
                        defaultTextStyle={{ color: "#Bbbbbd" }}
                        style={{ backgroundColor: "white", borderRadius: 10, width: "40%", justifyContent: "center", marginLeft: "54%", marginTop: '10%' }}
                        onSelect={(type) =>
                            this.setState({
                                selecttype: this.state.alltype[type]
                            })
                        }
                        value={this.state.selecttype}
                    />
                </View>
                {this.state.subject_list.map((item, i) => (
                    <View key={i}>
                        <TouchableOpacity onPress={() => this.GotoRoom(item.RoomName)} style={{ marginTop: "10%", display: item.floor == this.state.selecttype && item.pos == 'R' ? 'flex' : 'none' }} >
                            <View style={{
                                flexDirection: "row",
                                flexWrap: "wrap", backgroundColor: item.student == 4 ? 'red' : 'blue', padding: 5, borderRadius: 10, width: "40%", alignSelf: "center", marginVertical: 10
                            }}>
                                <Text style={{ color: "white", alignSelf: "center", fontSize: 16, marginLeft: '18%' }}>
                                    {item.RoomName}
                                </Text>
                                <Text style={{ color: "white", alignSelf: "center", fontSize: 12, marginLeft: '2%' }}>
                                    {item.student} / 4
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))
                }
            </View>
        )

    }
}


