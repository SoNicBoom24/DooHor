import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions } from 'react-native';
import Card from "react-native-card-component";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function CardHor() {
    return (
        <Card containerStyle={{ borderRadius: 20, borderColor: "#fff", width: "90%"}}>
            <Card.Content>
                <Card.Row>
                <Card.Thumbnail source={{ uri: 'https://picsum.photos/200' }}
                            style={{height: 100, width: 100, borderRadius: 20 }} />
                    <Card.Row>
                        <Card.Col>
                            <Card.Title text='หอ1' style={{ fontSize: 30, paddingHorizontal: 10 }} />
                        </Card.Col>
                        <Card.Col>
                            <Card.Title text='4500 $' style={{ right: 0, top: 0 }} />
                        </Card.Col>
                        {/* style={{ alignSelf: "flex-end", paddingLeft: 40, paddingTop: 50, color: "gray" }} */}
                    </Card.Row>
                    <Card.Row>
                        <Card.Col>
                            <Card.Title text='คำอธิบายเพิ่มเติม' style={{ alignSelf: "flex-end", paddingTop: 50, color: "gray" }} />
                        </Card.Col>
                    </Card.Row>
                </Card.Row>
            </Card.Content>
        </Card>
    );
}