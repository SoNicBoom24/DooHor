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
        this.subjCollection = firebase.firestore().collection("declaration");
        this.state = {
            subject_list: [],
        };
    }
    getCollection = () => {
        const { route } = this.props;
        const all_data = [];
        firebase.firestore()
            .collection('declaration')
            .where('id', '==', route.params.id)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach((res) => {
                    const { desc, image, title, type, state, all_desc } = res.data();
                    all_data.push({ desc: desc, image: image, title: title, type: type, state: state, all_desc: all_desc });
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

    render() {

        return (
            <SafeAreaView style={styles.container} >

                <ScrollView>
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
                                <FontAwesome name="trash" size={24} color="black" style={{ bottom: 0, alignSelf: "center" }} />
                            </View>
                        </View>

                    ))}

                </ScrollView>
            </SafeAreaView>


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
        height: 200,
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