import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import firebase from '../Database/firebaseDB'
import { ListItem } from 'react-native-elements'
import { Card, Title, Paragraph } from 'react-native-paper';

class Bill extends Component {
    constructor() {
        super();
        this.subjCollection = firebase.firestore().collection("office_documents");
        this.state = { subject_list: [], };
    }
    getCollection = () => {
        const all_data = [];
        firebase.firestore()
            .collection('office_documents')
            .where('uid', '==', "LvTaBmip7DUjgaZwLJnWpRIR32o1").where('type', '==', 'Bill')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach((res) => {
                    const { title, desc, dormitory_bill, image_documents } = res.data();
                    all_data.push({ title: title, desc: desc, dormitory_bill: dormitory_bill, desc: desc, image_documents: image_documents });
                });
                this.setState({ subject_list: all_data, });
            });
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
            <View  >
                {this.state.subject_list.map((item, i) => (
                    <ListItem key={i}>
                        <Card style={{
                            width: "100%", borderRadius: 15,
                            elevation: 15,
                            padding: 10
                        }}>
                            <Card.Content>
                                <Title>{item.title}</Title>
                                <Paragraph>{item.desc}</Paragraph>
                            </Card.Content>
                            <Card.Cover style={{ width: 350, height: 350, alignSelf: "center" }} source={{ uri: item.image_documents }} />
                            <Card.Actions>
                                <Title>Card title</Title>
                            </Card.Actions>
                        </Card>
                    </ListItem>
                ))
                }
            </View>
        )

    }
}
const styles = StyleSheet.create({


});
export default Bill;