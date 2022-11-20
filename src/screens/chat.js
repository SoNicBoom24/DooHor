import React, { Component } from "react";
import { ScrollView, Image } from "react-native";
import firebase from "../database/firebaseDB";
import { ListItem } from "react-native-elements";
import { Button, Input } from "react-native-elements";

class dormChat extends Component {
  constructor() {
    super();
    this.messageCollection = firebase.firestore().collection("message"); // ฝากทำแยกหอที
    this.userCollection = firebase.firestore().collection("users"); // ฝากทำ authen ที
    this.state = {
      message_list: [],
      message: "",
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
        student_id: "63070107", //ฝากทำให้มันเปลี่ยนเป็นคนที่ล็อคอิน
        text: this.state.message,
      })
      .then((res) => {
        this.setState({
          message: "",
        });
        Alert.alert(
          "Adding Alert",
          "New subject was added!! Pls check your DB!!"
        );
      });
  }

  getCollection = (querySnapshot) => {
    const all_data = [];
    querySnapshot.forEach((res) => {
      //   console.log("res: ", res);
      //   console.log("res.data() : ", res.data());

      const { student_id, text} = res.data();
      all_data.push({
        key: res.id,
        student_id,
        text,
      });
    });
    // console.log("all_data : ", all_data);
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
      <ScrollView >


        
        {this.state.message_list.map((item, i) => {
          return (
            <ListItem key={i} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{item.student_id}</ListItem.Title>
                <ListItem.Subtitle>{item.text}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          );
        })}
        <Input
          placeholder={"ข้อความ"}
          value={this.state.message}
          onChangeText={(val) => this.inputValueUpdate(val, "message")}
        />
        <Button title="ส่งข้อความ" onPress={() => this.storeSubject()} />
      </ScrollView>
    );
  }
}

export default dormChat;
