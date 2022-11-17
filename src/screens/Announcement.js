import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, Switch, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import firebase from '../Database/firebaseDB'
import { ListItem } from 'react-native-elements'

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

    return (


        < ScrollView style={styles.container} >
            <View>

                <Image style={styles.img}
                    source={{ uri: "https://i.pinimg.com/originals/94/32/cd/9432cdd515ab3d772334e471e230c211.jpg" }} />
                <View style={styles.description}>
                    <Text style={{ padding: 10 }}>
                        รายละเอียด
                    </Text>
                </View>

            </View>


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