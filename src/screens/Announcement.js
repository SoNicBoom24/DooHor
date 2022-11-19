import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, Switch, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import firebase from '../Database/firebaseDB'

export default function Announcement() {
    const [home, setHome] = useState([])
    const all_data = []
    // firebase.firestore()
    //     .collection('declaration')
    //     .where('state', '==', 'open')
    //     .get()
    //     .then(querySnapshot => {
    //         querySnapshot.forEach((res) => {
    //             const { desc, image, title, } = res.data();
    //             all_data.push({ desc: desc, image: image, title: title, });
    //         });
    //         setHome(all_data);

    //     });
    var data = [];

    for (let i = 0; i < home.length; i++) {
        data.push(
            <View key={i}>
                <View>

                    <Image style={styles.img}
                        source={{ uri: home[i].image }} />
                    <View style={styles.description}>
                        <Text style={{ padding: 10 }}>
                            {home[i].desc}
                        </Text>
                    </View>

                </View>

            </View>
        )
    }
    return (

        < ScrollView style={styles.container} >
            {data}
        </ScrollView>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFDA79",
    },
    img: {
        width: "80%",
        height: 150,
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
        marginTop: 15,
        flex: 1,
        marginBottom: 30,
        minHeight: 200
    }

});

