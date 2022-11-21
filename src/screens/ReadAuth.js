import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, Switch, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import firebase from '../Database/firebaseDB'
import { Card, Title, Paragraph } from 'react-native-paper';

export default class ReadAuth extends Component {
    constructor() {
        super();
        this.subjCollection = firebase.firestore().collection("message");
        this.state = {
            subject_list: [],
        };
    }
    getCollection = (querySnapshot) => {
        const all_data = [];
        querySnapshot.forEach((res) => {
            const { student_id, text } = res.data();
            all_data.push({ student_id: student_id, text: text, });
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
                {this.state.subject_list.map((item, i) => (
                    <View key={i}>
                        <Card style={{
                            borderRadius: 15,
                            elevation: 15,
                            padding: 10,
                            width: "90%",
                            alignSelf: 'center',
                            marginTop: "8%",
                            marginLeft: "5%"
                        }}>
                            <Card.Content>
                                <Title>{item.student_id}</Title>
                                <Paragraph>{item.text}</Paragraph>
                            </Card.Content>

                        </Card>
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

});