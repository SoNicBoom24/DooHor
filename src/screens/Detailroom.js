import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, Switch, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import firebase from '../Database/firebaseDB'
import { useRoute } from '@react-navigation/native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { AntDesign, Feather } from '@expo/vector-icons';

export default function (props) {
    const route = useRoute();
    return <Detailroom {...props} route={route} />;
}
class Detailroom extends Component {
    constructor() {
        super();
        this.subjCollection = firebase.firestore().collection("declaration");
        this.state = {
            subject_list: [],
            image_list: [],
            student_list: [],
            Text_stundent_list: [],
            state_list: []

        };
    }
    getCollection = () => {
        const { route } = this.props;
        const all_data = [];

        firebase.firestore()
            .collection('Room')
            .where('RoomName', '==', route.params.Roomname)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach((res) => {
                    const { RoomName, building, desc, floor, id, image_room, price, student, state, Text_stundent } = res.data();
                    all_data.push({ RoomName: RoomName, building: building, floor: floor, image_room: image_room, state: state, desc: desc, id: id, desc: desc, price: price, student: student, Text_stundent: Text_stundent });
                });
                this.setState({ subject_list: all_data, });
                this.setState({ image_list: all_data[0].image_room, });
                this.setState({ student_list: all_data[0].student, });
                this.setState({ Text_stundent_list: all_data[0].Text_stundent, });
                this.setState({ state_list: all_data[0].state, });

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
    addinRoom() {

    }
    render() {
        return (
            < ScrollView style={styles.container} >
                {this.state.image_list.map((item, i) => (
                    <View key={i} style={{
                        backgroundColor: "white",
                        height: 200,
                        width: '90%',
                        overflow: "hidden",
                        borderRadius: 20,
                        alignSelf: "center",
                        marginBottom: 20,
                    }}>
                        <Image source={{ uri: item }} style={{height: 200}}>
                        </Image>
                    </View>

                ))}

                {this.state.subject_list.map((item, i) => (
                    <View key={i} style={{ marginTop: 10 }}>
                        <View>
                            <SafeAreaView style={styles.description}>
                                <Text style={{ padding: 10, textAlign: 'center' }}>
                                    รายละเอียดห้องพัก
                                </Text>
                                <Text style={{ padding: 10 }}>
                                    {item.desc}
                                </Text>

                            </SafeAreaView>
                        </View>
                    </View>

                ))}

                <View style={{ alignItems: "center", marginBottom: 20, }}>

                    <Card style={{
                        borderRadius: 15, width: "95%", marginBottom: 10,
                    }} >

                        <Card.Content
                        ><Title style={{ fontSize: 15, textAlign: 'center' }}>รายชื่อนักศึกษา </Title>
                            {this.state.student_list.map((item, i) => (
                                <Paragraph key={i} style={{ fontSize: 15 }}>{i + 1}. {item}</Paragraph>

                            ))}
                            <Title style={{ fontSize: 15, textAlign: 'center' }}>คำแนะนำตัว </Title>
                            {this.state.Text_stundent_list.map((item, i) => (
                                <Paragraph key={i} style={{ fontSize: 15 }}>{i + 1}. {item}</Paragraph>
                            ))}
                            <Title style={{ fontSize: 15, textAlign: 'center' }}>สถานะ </Title>
                            {this.state.state_list.map((item, i) => (
                                <View key={i} style={{flexDirection: "row"}}>
                                    <Paragraph  style={{ fontSize: 15 }}>{i + 1}. {item}</Paragraph>
                                    <Text style={{color: "green", marginLeft: 10, marginTop: 2, display: item == "confirm" ? "none" : "flex"}}  >ยืนยัน</Text>
                                    <Text style={{color: "red", marginLeft: 10, marginTop: 2}}  >ยกเลิก</Text>
                                </View>
                            ))}
                        </Card.Content>

                    </Card>
                    <Button
                        title="ลงชื่อเข้าหอพัก"
                        color="#594545"
                        onPress={() => this.addinRoom()}
                    />

                </View>

            </ScrollView>


        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFDA79",
        width: "100%"
    },

    description: {
        backgroundColor: "white",
        borderRadius: 20,
        width: "90%",
        height: "100%",
        alignSelf: "center",
        flex: 1,
        marginBottom: 30,
        borderRadius: 15,
        elevation: 15,
        padding: 10,
    }

});