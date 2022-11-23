import React, { Component } from "react";
import { StyleSheet, ScrollView, Image, View } from "react-native";
import firebase from "../Database/firebaseDB";
import { ListItem } from "react-native-elements";
import { Button, Input } from "react-native-elements";
import { Card, Title, Paragraph } from 'react-native-paper';

class Sceeenchat extends Component {
  constructor() {
    super();
    this.messageCollection = firebase.firestore().collection("message");
    this.user = firebase.firestore().collection("Users");
    this.uid = firebase.auth().currentUser.uid
    this.state = {
      message_list: [],
      message: "",
      name: "",
      id: firebase.firestore.FieldValue.serverTimestamp(),
    };
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  storeSubject() {
    this.messageCollection
      .add({
        id: this.state.id,
        student_name: this.state.name,
        text: this.state.message,
      })
      .then((res) => {
        this.setState({
          message: "",
        });
      });
  }

  getCollection = (querySnapshot) => {
    let all_get = "";
    firebase.firestore()
      .collection('Users')
      .where('uid', '==', this.uid)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach((res) => {
          let { first_name, last_name } = res.data();
          all_get = first_name + " " + last_name
        });
        this.setState({
          name: all_get,
        });

      });


    const all_data = [];
    querySnapshot.forEach((res) => {
      const { student_name, text, id } = res.data();
      all_data.push({
        student_name,
        text,
        id
      });
    });
    this.setState({
      message_list: all_data,
    });
  };

  componentDidMount() {
    this.unsubscribe = this.messageCollection.onSnapshot(this.getCollection);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      < ScrollView style={styles.container}>
        {this.state.message_list.map((item, i) => (
          <View key={i}>
            <Card style={{
              borderRadius: 15,
              elevation: 15,
              padding: 10,
              width: "90%",
              alignSelf: 'center',
              marginTop: "8%",
              marginLeft: "5%",

            }}>
              <Card.Content>
                <Title>{this.state.name}</Title>
                <Paragraph>{item.text}</Paragraph>

              </Card.Content>

            </Card>
          </View>


        ))}

        <View style={{
          flexDirection: 'row',
          width: window.width,
          margin: 10,
          padding: 4,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 4,
          borderColor: '#fff',
          borderRadius: 10,
          backgroundColor: '#fff'
        }}>
          <View style={{
            flex: 4,
          }}>
            <Input
              style={{
                height: 40,
                width: "100%",
                flex: 1,
                flexDirection: 'row'
              }}
              placeholder={"ข้อความ"}
              placeholderTextColor="white"
              value={this.state.message}
              onChangeText={(val) => this.inputValueUpdate(val, "message")}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Button title="ส่งข้อความ" onPress={() => this.storeSubject()} />
          </View>
        </View>
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
export default Sceeenchat;