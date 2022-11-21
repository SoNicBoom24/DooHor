import React, { Component } from "react";
import { StyleSheet, ScrollView, Image, View } from "react-native";
import firebase from "../database/firebaseDB";
import { ListItem } from "react-native-elements";
import { Button, Input } from "react-native-elements";
import { Card, Title, Paragraph } from 'react-native-paper';

class Sceeenchat extends Component {
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
      });
  }

  getCollection = (querySnapshot) => {
    const all_data = [];
    querySnapshot.forEach((res) => {

      const { student_id, text } = res.data();
      all_data.push({
        key: res.id,
        student_id,
        text,
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
      <View style={styles.container}>
      < ScrollView>
                {this.state.message_list.map((item, i) => (
                    <View key={i}>
                        <Card style={{
                          backgroundColor: '#CDFFFC',
                            borderRadius: 15,
                            elevation: 15,
                            padding: 10,
                            width: "90%",
                            alignSelf: 'center',
                            marginTop: "8%",
                            marginLeft: "5%",
                            
                        }}>
                            <Card.Content>
                                <Title>{item.student_id} : You</Title>
                                <Paragraph>{item.text}</Paragraph>
                            </Card.Content>

                        </Card>
                    </View>


                ))}
      </ScrollView>
        <View style={{
    position: 'absolute',
    flexDirection:'row', 
    width: window.width, 
    margin: 10, 
    padding:4, 
    bottom: 0,
    alignItems:'center', 
    justifyContent:'center', 
    borderWidth:4, 
    borderColor:'#fff', 
    borderRadius:10, 
    backgroundColor:'#fff'
}}>
  <View style={{
    flex: 4,
  }}>
        <Input
          style={{
            height: 40, 
            width: "100%",
            color: 'white',
            backgroundColor: '#A4EBF3', 
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 10,
            flex:1,
            flexDirection:'row'
  }}
          placeholder={"ข้อความ"}
          placeholderTextColor="white" 
          value={this.state.message}
          onChangeText={(val) => this.inputValueUpdate(val, "message")}
        />
    </View>
        <View style={{ flex: 1}}>
          <Button title="ส่งข้อความ" onPress={() => this.storeSubject()} />
        </View>
        </View>
      
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      backgroundColor: "#A4EBF3",
  },

});
export default Sceeenchat;