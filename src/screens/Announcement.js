import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, Switch, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default function Announcement() {
  return (
    < ScrollView style={styles.container} >
        <Image style={styles.img}
            source={{uri: "https://i.pinimg.com/originals/94/32/cd/9432cdd515ab3d772334e471e230c211.jpg"}} />
        <View style={styles.description}>
            <Text style={{padding: 10}}>
                รายละเอียด
            </Text>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFDA79",
    },
    img:{
        width: "80%",
        height: 150,
        resizeMode: "cover",
        borderRadius: 10,
        alignSelf: "center",
    },
    description:{
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